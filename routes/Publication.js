
var express = require('express');
const { routes } = require('../app');
var router = express.Router();
var controllers = require('../controllers/PublicationController');
/* GET users listing. */


function verifySession(req, res, next){
  const session = req.session;
  if (!session) return res.status(500).send({ message: 'No session provided.' });
  
  if(req.session.id){
    return next();
  } 

  return res.status(401).send({ message: 'Usuário não logado' });
}

function verifyRole(req, res, next){
  if(req.session.role == 'admin'){
    return next();
  } 

  return res.status(401).send({ message: 'Usuário deve ser administrador' });
}

router.post('/save',verifySession, verifyRole, controllers.Create);
router.get('/search',verifySession, controllers.Search);

module.exports = router;
