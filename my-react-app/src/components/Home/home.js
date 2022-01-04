import React from 'react';
import HomeAchievement from './home.achievement';
import HomeMilestone from './home.milestones';
import HomeSubAchievement from './home.subachievement';

export default function Home (props){


    return (
        <div>
        <HomeAchievement/>
        <HomeSubAchievement/>
        <HomeMilestone/>
        </div>
    )
}

