import React from 'react';
import ReactDOM from 'react-dom';




function clock(){
	let time = `${new Date().toLocaleTimeString()}`;
	ReactDOM.render(time,document.getElementById('root'));	
	setTimeout(function(){
		clock();	
	},1000)
};


function sounds(){

	var audio = new Audio('after.mp3');
	 
audio.play();


}



let btn = <div>
			<center>
			<button onClick={clock}>Start Clock</button>

			
			<h1>Liera Jean Guiang</h1>
			<h1> BSIT 3-D</h1>
			</center>
			</div>;

		






ReactDOM.render(btn,document.getElementById('root'));