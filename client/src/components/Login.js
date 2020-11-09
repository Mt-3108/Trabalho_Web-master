import React from 'react';
import Redirec from './Redirec';
import axios  from 'axios';




export default class Login extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {mensagem:'',email:''
                     , password:'' };
    }

    submmit(){
        const email = this.state.email;
        const password = this.state.password;
        axios.post('/users/login',{email,password}).then((resposta)=>{
            if(resposta){
                /*token - resposta da api, data e token vem da API*/
                localStorage.setItem('token',resposta.data.token);
                localStorage.setItem('role',resposta.data.role);
                window.location.reload(false);
                alert('Login feito com sucesso');
            }

        }).catch((error) => {
            this.setState({mensagem : error.response.data.error})
          });
        
    }
    
    
    onChange(event){
        this.setState({[event.target.name]:event.target.value})
        
    }

    render(){
        return(
                  
                <div className='login'>
                    <h1 className = 'lg'> Login </h1>
                    <h2 className = 'emailh2'>E-mail:</h2>
                    <input className='e-mail' type='text' name='email' onChange={this.onChange.bind(this)}></input>
                    <h2 className='passh2'> Senha:</h2>
                    <div className='inputs'></div>
                    <input className = 'pass' type='password' name='password' onChange={this.onChange.bind(this)}></input>
                    <button className = 'btSubmit' onClick={this.submmit.bind(this)}>
                        Login
                    </button>
                    <span className='erro'>
                          {this.state.mensagem}
                     </span>

                </div>
           
        );
    }

}



