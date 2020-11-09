import React from 'react';
import axios from 'axios';
import style from './style.css';
import { findAllByDisplayValue } from '@testing-library/react';






export default class Registro extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {mensagem:'',name: '',erro:{},show: false ,email:''
                     , password:'', 
                     password_save:''};
    }


    showRegister(){
         
      this.setState({show:!this.state.show})
       
           
    }

    submmit(){
        const email = this.state.email;
        const password = this.state.password;
        const passwordSave = this.state.password_save;
        const name = this.state.name;
        /*Constante valid recebe método validate*/
        //const valid = this.validate(email,password,passwordSave);

        /*se a string erro retornada estiver vazia*/
        
        if(this.validate(email,password,passwordSave)){
            axios.post('/users/register',{name,email,password}).then((resposta)=>{
                
                console.log(resposta)
                if(resposta){
                    /*confirmação do token*/
                    localStorage.setItem('token',resposta.data.token);
                    localStorage.setItem('role',resposta.data.role);
                    window.location.reload(false);
                    alert('Registro concluido com sucesso.')
                    
                }
                
                
    
            }).catch((error) => {
                this.setState({mensagem : error.response.data.error})
              });
            //alert(valid);
          //  this.validate(validate);
        
            
        }
        /*Chamada a Api de Registro*/
      
        
    }

    validate(email,password,passwordSave){
        
        let isValid = true;
        let erro = {};
        if(password != passwordSave){
            isValid = false;
            erro['passwordSave'] = 'A senha deve ser igual a senha salva'
            //erro += 'A senha deve ser igual a senha salva\n';
        }

        
        if(password.length <3){
            isValid = false;
            erro['password'] ='A quantidade de caracteres da senha deve ser maior que 3';
            //erro += 'A quantidade de caracteres da senha deve ser maior que 3\n';
        }
        if(password ==''){
            isValid = false;
            // erro += 'A senha não deve possuir 0 caracteres\n';
            erro['password'] ='A senha não deve possuir 0 caracteres';
            
         }
 

        if(email == ''){
            isValid = false;
            erro['email'] ='O email não deve possuir 0 caracteres';
            
            //erro += 'O email não deve possuir 0 caracteres\n';
        }

        
        // validar email
        if(email.length<3){
            isValid = false;
            //erro += 'A quantidade de caracteres do email deve ser maior que 3\n';
            erro['email'] ='A quantidade de caracteres do email deve ser maior que 3';

        }

        if(!this.validarEmail(email)){
                isValid = false;
               // erro += 'O email não é valido\n';
               erro['email'] ='O email não é valido';
        }

        this.setState({erro:erro})
        return isValid;
    }


    validarEmail(str){
        const pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return pattern.test(str);  // returns a boolean 
    }
    
    
    onChange(event){
        /*chamada ao evento, target= objeto,Input possui name e value */
        this.setState({[event.target.name]:event.target.value})
       
    }
    render(){
        return(
                    <div>
                        <div className='MostrarRegistro'>
                             <button className='btRegistro' onClick={this.showRegister.bind(this)}>
                                 Registro
                             </button>
                        </div>
                        

                    
                        {this.state.show && <div>
                        <div className='registro'>
                            
                           
                        <h2 className='emailRegistro'>Nome:</h2>

                            <input className='inputName' type='text' name='name' onChange={this.onChange.bind(this)}></input>
                            <span className='erro'>
                                {this.state.erro['name']}
                            </span>
                            <h2 className='emailRegistro'>E-mail:</h2>

                            <input className='inputEmail' type='text' name='email' onChange={this.onChange.bind(this)}></input>
                            <span className='erro'>
                                {this.state.erro['email']}
                            </span>
                            <h2 className= 'senhaRegistro'>Senha:</h2>
                            <input  type='password' name='password' onChange={this.onChange.bind(this)}></input>
                            <span className='erro'>
                                 {this.state.erro['password']}
                            </span>
                            <h2 className='confirmSenRegistro'>Confirmação de senha:</h2>
                            <input className = 'confirmSenInput'  type='password' name='password_save' onChange={this.onChange.bind(this)}></input>
                            <span className='erro'>
                                 {this.state.erro['passwordSave']}
                            </span>
                            <div className='logbtRegistro'>
                                <button onClick={this.submmit.bind(this)}>
                                        Registrar
                                </button>
                                    <span className='erro'>
                                        {this.state.mensagem}
                                    </span>
                            </div>
                           

                        </div>
                        <div>
                               
                         </div>
                    
                    </div>
                }
                        
        </div>
            
        );
    }
}