import React from 'react';
import './home.css';
import { Route, Link, BrowserRouter, withRouter } from "react-router-dom";
import HomeSubAchievement from './home.subachievement';


function Hometest (props){
    return (
        <form className= 'Home' >
            
                <div>
                <h3 className='subsHeader'>SUB ACHIEVEMENTS</h3>
                </div>
        </form>
    )
}

function Addbutton (props){
    return (
        <form className= 'Home' >
                <div>
                <button className= 'subsButton' >Add Sub Achievement</button>
                </div>
        </form>
    )
}

// function Addbutton (props){
//     const isClicked = props.isClicked;
//   if (isClicked) {
//     return <HomeSubAchievement />;
//   }
//   return <Hometest />;
// }

