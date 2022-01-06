import React from 'react';
import './home.css';



export default function HomeSubAchievement (props){


     
     const onSubmit = (e) => {
        e.preventDefault();
        console.log("refresh prevented");
      };

    return (
        <div className= 'Home'onSubmit={(onSubmit)} >
            
                <div>
                <h3 className='subsHeader'>SUB ACHIEVEMENTS</h3>
                </div>
              
            

            <ul className='SUBS'>
            
                    <li className='Subs'>sub Achievements are here</li>
                    <li className='Subs'>sub Achievements are here</li>
                    <li className='Subs'>sub Achievements are here</li>

            </ul>
            
                
                
            


        </div>
    )
}

