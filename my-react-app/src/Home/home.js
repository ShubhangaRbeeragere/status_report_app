import React from 'react'

import HomeSubAchievement from '../components/Homet/home.subachievement';
import SubAchievements from '../components/SubAchievement/SubAchievement';


export default function Hometest(props) {
    

    return (
        <div>
            <div>
                <h1>Sub Achievements</h1>
                    </div>
                
                        <div>
                            <HomeSubAchievement/> 
                        </div>

                        
                        <button >{props.SubAchievements}</button>
                       

                        <div>


                        </div>

                <div></div>



        </div>
    )
    }


