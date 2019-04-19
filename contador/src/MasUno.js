import React, { Component } from 'react';
import VarPrincipalData from './PrincipalData';

class MasUno extends Component{
	otraFuncion(){
		console.log(VarPrincipalData);
	}
	render(){
		return(
			<div>
				<button onClick={function(){VarPrincipalData.aumentarNumero()}} >Aumentar</button>
			</div>
			)
	}
}

export default MasUno;