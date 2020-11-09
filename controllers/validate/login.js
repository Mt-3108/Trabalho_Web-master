
//let db = user.db('ProjetoWeb');
module.exports = function validateLogin(user){
    listUser = [];
    let error = {};
    console.log(user);
    if(user.email==''){
            error.email = 'Email inválido';
    }

    if(user.password==''){
        error.password = 'Senha inválida';
    }

    //listUser = db.collection('users').find({});
   // for( i=0;i<listUser.length;i++){
      // if(user.email!=listUser[i].email){

         //   errorRegister.email = 'O email não confere na lista de usuários cadastrados.';
      //  }

      
   // }

    return {error,valid: Object.keys(error).length};
}
