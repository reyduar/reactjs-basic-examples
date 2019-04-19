import React, { Component } from 'react';
import Platillos from './Platillos';
import Bebidas from './Bebidas';
import Pedidos from './Pedidos';
import { Link } from 'react-router';

class Lienzo extends Component{
	render(){
		return(
			<div className="container">
				<div className="jumbotron" >
					<h2>Nombre de Tienda</h2>
				</div>
				<div>
					<ul className="nav nav-pills ListMargin">
						<li role="presentation" className="active"><Link to="/">Comidas</Link></li>
						<li role="presentation" className="active"><Link to="bebidas">Bebidas</Link></li>
					</ul>
				</div>
				{this.props.children}
				<Pedidos/>
			</div>
			)
	}
}

export default Lienzo;