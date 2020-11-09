import React from 'react'
import TituloOnClicked from './Eventos';





    //Componente de ordem inferior
    export default class Meio extends React.Component{
        constructor(props){
            super(props);
            this.state = {click: false}
            
        }
       
        render(){
            
          return( <div className = 'Meio'>
                <article>
                    <div className='CassandraText'>
                        <h3>{this.state.click}
                                 What is Cassandra?
                        </h3>
                    </div>
                    <div className='resumo'>
                        <p> 
                       
                            The Apache Cassandra database is the right choice when you need scalability and high availability without compromising performance. Linear scalability and proven fault-tolerance on commodity hardware or cloud infrastructure make it the perfect platform for mission-critical data. Cassandra's support for replicating across multiple datacenters is best-in-class, providing lower latency for your users and the peace of mind of knowing that you can survive regional outages.
                        </p>
                    </div>
             </article>
         </div>
         );
            
           
        }
    }