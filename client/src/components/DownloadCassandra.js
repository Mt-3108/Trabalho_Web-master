import React from 'react';




//Componente de Ordem inferior
export default class DownloadCassandra extends React.Component {




	
	
//const Topo = props =>{
	render() {
			console.log(this.props);
		return (
			<div className='Componente'>
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
												
											</div>
											
										<div className='CassadraDown'>
											
										</div>
								</nav>
							</header>
                            <article>
                                <div className='CassandraText'>
                                    <h3>
                                        Downloading Cassandra     
                                    </h3>
                                    <h3>Latest Version Beta</h3>
									<p>Download the latest Apache Cassandra 4.0 beta release:<a href='#'>4.0-beta2</a></p>
                                </div>
                                
                        </article>

                        <div className="footer">
                                <footer>
                                   
                                </footer>
                            </div>
						</div>

						
					);
				
            }	
            
            


	}
//}

	