import React from 'react';




//Componente de Ordem inferior
export default class Topo extends React.Component {

	constructor(props){
		super(props);
		this.state = '';
	}

	
	tituloOnClicked(){  
      
 
		this.setState({
		  click :true
	
	
		});  
		 
	
	} 
	novaView(){
		this.setState(
			document.getElementsByClassName('')
		);
	}
//const Topo = props =>{
	render() {
		console.log(this.props);
		return (
			<div className='topo'>
				<header className = 'header'>
					<div className='topo' role="menu">
					
						
							<p>
							<img src='img/asf_feather.png'/>
								/Apache Cassandra
									</p>

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
							<div className='imgtopo'/>
								<img src='img/cassandra_logo.png'/>
							</div>
								<nav>
									<div className='botaomediaquery' >
										<button type="button">
										</button>
									</div>
									<ul className='links'>
										<li><a href='#'>Home </a></li>
										<li><a href='#'>Download  </a></li>
										<li><a href='#'>Documentation </a></li>
										<li><a href='#'>Comunity </a></li>
										<li><a href='#'>Blog</a></li>
									</ul>
											<div className='texto1'>
												<h1 className='texto1h1'>
													Manage massive amounts of data, fast, without losing sleep
												</h1>
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
						</div>
						
					);
				
			}		
	}
//}

	