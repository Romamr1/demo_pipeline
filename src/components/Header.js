import React, { Component } from 'react';


export class Header extends Component {

 	render() {  
		return ( 
			<div>
				<div id="header" className="cols-style">
					<span className="pipeline">PIPELINE</span><span className="manager">Manager</span> 
					<div className="right-align">
						<a className="vr">File</a>	
						<a className="vr">Feedback</a>
						<a>Search</a>
						<input type="text" />
						<a>Help</a>
					</div>
					      
				</div>
				<div>
					<a className="drop-down">Show Blaster</a>
					<div className="right-align">
						<button className="green">	All Record Types	</button>
						<button className="white">	Lead				</button>
						<button className="white">	Nurture				</button>
						<button className="green">	Sell				</button>
						<button className="white">	Renew				</button>
						<button className="white filter">	Filter				</button>
					</div>
				</div>
				<div>
					<span className="drop-down">
						<a>Knowledge Meteor</a>
					    <a>Proof of Life</a>
					    <a>Weighter</a>
					    <a>ChroNo</a>
					    <a>rate</a>
					</span> <button className="dateline">Dateline</button>
				</div>
			</div>
		)
	}
}