
//let db = user.db('ProjetoWeb');
module.exports = function validateRegister(user){
    listUser = [];
    let errorRegister = {};
     

        if(user.name==''){
            errorRegister.name =  'Seu nome não deve possuir zero caracteres';
        }
        if(user.email==''){
            errorRegister.email =  'Seu email não deve possuir zero caracteres';
        }

        if(user.password==''){
            errorRegister.password = 'Sua senha não deve possuir zero caracteres';

        }

        if(user.email.length<3){
            errorRegister.email = 'Seu email não pode possuir menos que 3 caracteres';
        }

        if(user.password.length<3){
            errorRegister.password = 'Sua senha não deve possuir menos que 3 caracteres';
        }

        
     
        

  
       return {errorRegister,valid:Object.keys(errorRegister).length};
}

function  validarEmail(str){
   const pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return pattern.test(str);  // returns a boolean 
}

    
