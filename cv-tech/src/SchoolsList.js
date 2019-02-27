import React, { Component } from 'react';
const schools = require('./schools.json');



class SchoolsList extends Component {

	handleClick(src) {
		console.log(src);
	}
	
	render() {
		return (

			schools.map(({ID, School}) => {
				let src = "https://s3.amazonaws.com/collegevine-assets/schools/" + JSON.stringify(ID) + "-thumb.jpg";
			    return(
			      <ul>
			        <li key={ID}>{ID}</li>
			        <li key={ID}>{School}</li>
			        <img src={"https://s3.amazonaws.com/collegevine-assets/schools/" + JSON.stringify(ID) + "-thumb.jpg"}/>
			        <button onClick={() => this.handleClick(src)}>Approve Image</button>

			      </ul>
			      ); 
			    
		  })
		);
	}

}

export default SchoolsList;