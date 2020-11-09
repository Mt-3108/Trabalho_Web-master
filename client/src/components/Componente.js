import React from 'react';
import DownloadCassandra from './DownloadCassandra';
import Redirec from './Redirec';
import Login from './Login';
import isAutent from './isAutent';
import Api from './Api';
import Registro from './Registro';
import asf_feather from './img/asf_feather.png';
import cassandra_logo from './img/cassandra_logo.png';






//Componente de Ordem inferior
export default class Topo extends React.Component {
	 click ;
	constructor(props){
		super(props);
		this.state = {click: false};
		//this.state = {titulo: 'What is Cassandra?'}
		
	}

	
	tituloOnClicked(){  
	  
		
 
		this.setState({
		  click :true	

		});  
		
	
	
		
	} 

		botaoDownload(){
			if (this.state.click ==true ) {
					
				return <Redirec/>
				
			
				
				
			}
		
		}

	deslogar(){
		localStorage.removeItem('token');
		window.location.reload(false);
	}

	
	
//const Topo = props =>{
	render() {
			console.log(this.props);
		return (
			<div className='Componente'>
				<body>
					{this.botaoDownload()}
					
				<header className = 'header'>
					
					<div className='topo' role="menu">
					
						
							<p>
							
							<img src={asf_feather} alt='icon'/>
							<div className='dropdown'>
									<button className='dropbtn'>
										Apache Software Foundation

										</button>
									<div className='dropdown-content'>

										<a href='#'>Apache Homepage</a>
										<a href='#'>License</a>
										<a href='#'>Sponsorship</a>
										<a href='#'>Thanks</a>
										<a href='#'>Sercurity</a>
									</div>
								<div/>
							</div>
								/Apache Cassandra
									</p>

						
							<div className='imgtopo'/>
								<img src={cassandra_logo} alt='logo'/>
						
							</div>
								<nav>
									<div className='botaomediaquery' >
										<button type="button">
										</button>
									</div>
									<ul className='login'>
										{ isAutent() ?<button onClick = {this.deslogar.bind(this)}>
												Deslogar
										</button> : <Login/>} 

									</ul>
											
											<div className='texto1'>
												{/*Se logado isAutent retorna true*/} 
												{isAutent() ? <Api/> :<div>  <h1 className='texto1h1'>
													Necessário Logar para ter acesso a pesquisa de idade.
													<h2 className='estaRegistrado'>Certifique-se de que está registrado.</h2>	
												</h1> <Registro /> </div>}
												
											</div>

											<div className='botao' >
													<button onClick={this.tituloOnClicked.bind(this)}>
														Download Cassandra
													</button>
											</div>
										<div className='CassadraDown'>
											<p>
												<a href='#'>Cassandra 4.0-beta1 Changelog</a>
											</p>
										</div>
								</nav>
							</header>
							<article>
								<div className='CassandraText'>
									<h3>{this.state.titulo}
											What is Cassandra?
									</h3>
								</div>
								<div className='resumo'>
									<p> 
								
										The Apache Cassandra database is the right choice when you need scalability and high availability without compromising performance. Linear scalability and proven fault-tolerance on commodity hardware or cloud infrastructure make it the perfect platform for mission-critical data. Cassandra's support for replicating across multiple datacenters is best-in-class, providing lower latency for your users and the peace of mind of knowing that you can survive regional outages.
									</p>
								</div>
						</article>

						<div className="footer">
								<footer>
									<blockquote>
										<p>
											Universidade Tecnológica Federal do Paraná -2020.
										</p>
									</blockquote>
								</footer>
							</div>
						</body>
			
						</div>

						
					);
				
            }	
            
            


	}
//}

	