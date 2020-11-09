import React from 'react';
import axios  from 'axios';
import Publi from './Publi'


export default class Api extends React.Component{
    constructor(props){
        super(props);
        this.state = {mensagem:'',
            text:'',data: []}
        
    }

      
    onChange(event){
        this.setState({[event.target.name]:event.target.value})
       
    }

    submit(){
  
        if(this.validate()){
            axios.get('/publication/search?summary='+this.state.text).then((resposta)=>{
                if(resposta){
                    const res = resposta.data;
                    let mes;
                    if(res.length){
                        mes = 'Pesquisa Feita com Sucesso';
                    } else {
                        mes = 'Não foram econtrados resultados';
                    }
                    this.setState({data: res,mensagem:mes})
                }

        

              }).catch((error) => {
                console.log(error.response);
              });
        }
      
    }

    validate(){
        

        if(this.state.text.length<3){
            this.setState({mensagem:'O nome não deve possuir menos de três caracteres.'})
            return false;
        }
        return true;
    }
        
    render(){
            return(
                <div>
                    {localStorage.getItem('role') === 'admin' && <Publi/>}
                    <p className='nomeDesejado'>Digite o texto desejado:</p>
                    <input className ='enviarNome' type='text' name='text' onChange={this.onChange.bind(this)}></input>
                  <div className='btEnviar'>
                     <button onClick={this.submit.bind(this)}>
                        Enviar
                    </button>
                  </div>
                   
                    <h1>
                    <ul>
                    {this.state.data.map(item => (
                       <li>
                           <h2>{item.name}</h2>
                            <p>{item.age}</p>
                            <p>{item.summary}</p>
                       </li>
                    ))}
                     </ul> 
                    </h1>

                    <span >
                        {this.state.mensagem}
                    </span>
                </div>
            );
    }
}