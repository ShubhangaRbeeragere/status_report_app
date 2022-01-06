import React,{useState} from 'react';
import SubAchievements from '../SubAchievement/SubAchievement';
import HomeAchievement from './home.achievement';
import HomeMilestone from './home.milestones';
import HomeSubAchievement from './home.subachievement';
   const GoToPage = <SubAchievements/>
export default function Home (props){

    const [addSUB, setAddSUB] = useState({
        AddSUBButtonState: false,
        subachievement: "",
        content: "",
    });

 
        
    


    return (
        <div>
        <div>
            <HomeSubAchievement
               />
               <button onClick={GoToPage} ></button>
        
        </div>
        <HomeMilestone/>
        </div>
    )
}

