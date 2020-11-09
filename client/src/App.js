import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import Componente from './components/Componente';
import style from './components/style.css';
 
//Componente Raiz -  Ordem Superior
 function App(){
 // var teste = document.querySelector('.App'),
 //  request = new XMLHttpRequest();
 //  request.open('GET','',true);
 // request.onreadystatechange =function(){
   //   if(request.readyState==4 && request.status==200){
    //    console.log(request.responseText);
      //}
 // };
 // request.send();
    
    
      return(   
      <div className='App'>
        
        <Componente /> 
      </div>
      );
   // }  

}
 

export default App;
