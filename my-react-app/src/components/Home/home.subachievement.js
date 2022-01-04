import React from 'react';
import './home.css';
import { Route, Link, BrowserRouter, withRouter } from "react-router-dom";


export default function HomeSubAchievement (){


     
     const onSubmit = (e) => {
        e.preventDefault();
        console.log("refresh prevented");
      };

    return (
        <form className= 'Home'onSubmit={(onSubmit)} >
            
                <div>
                <h3 className='subsHeader'>SUB ACHIEVEMENTS</h3>
                </div>
                <div>
                <button className= 'subsButton' >Add Sub Achievement</button>
                
                </div>
            

            <ul className='SUBS'>
            
                    <li className='Subs'>sub Achievements are here</li>
                    <li className='Subs'>sub Achievements are here</li>
                    <li className='Subs'>sub Achievements are here</li>

            </ul>



        </form>
    )
}

