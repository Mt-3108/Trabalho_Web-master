var express = require('express');
var router = express.Router();
let User = require('../models/User');
const validateUser = require('../controllers/validate/login');
const validateRegister = require('../controllers/validate/registro');
/* GET users listing. */


//router.post('/register',controllers.register);
router.post('/login',async (req, res, next) => { 
  
  const email = req.body.email;
  const password = req.body.password;
      
    const {error,valid}=validateUser(req.body);
      if(valid){
          return res.status(400).json(error);
          
      }

      const tesUser = await User.find({email,password});

      if(tesUser.length==0){
        return res.status(400).json({'error' : 'Email ou senha estão incorretos'});
      }

      const role = email == 'admin' && password == 'admin'?'admin':'normal'; 
  
      const id = tesUser[0]._id
      
      req.session.id = id;
      req.session.role = role;

      return res.status(200).send({token: id, role:role});
});

router.post('/register', async (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  let user = new User({});
  user.name  = name;
  user.email = email;
  user.password =  password;

   const {errorRegister,valid}=validateRegister(req.body);

   console.log(valid);

   if(valid){
    return res.status(400).json(errorRegister);
   }

   const userName = await User.find({name});
   
   if(userName.length>0){
     return res.status(400).json({'error': 'Nome já foi registrado'});
   }
   

   const userEmail = await User.find({email});
   if(userEmail.length>0){
    return res.status(400).json({'error': 'Email já registrado'});
   }
  const userInsert = await user.save();
  const id = userInsert.insertedId;
  const role = email == 'admin' && password == 'admin'?'admin':'normal'; 

  req.session.id = id;
  req.session.role = role;

  return res.status(200).send({token: id, role:role });} );
module.exports = router;
