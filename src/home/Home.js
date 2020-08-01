import React from 'react';

import MyImage from './me.png';
import './Home.css';

function Home() {
  return (
    <div className="Home">
    	<div className = "homeEncapsulated">
    		<div className = "aboutMe">
    			<div className = "name"> Bruno <br /> Pastre </div>

    			<div >
	    			<div className = "info"> <b>Passionate</b> software developer </div>
	    			<div className = "info"> <b>Creative</b> design student </div>
	    			<div className = "info"> <b>Curitiba</b> | Brazil </div>
    			</div>
    		</div>

    		<img className = "myImage" src= {MyImage} alt = "Bruno Pastre"/>

    	</div>
    </div>
  );
}

export default Home;
