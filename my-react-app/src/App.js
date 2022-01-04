import React from 'react';
import Home from './components/Home/home';
import { BrowserRouter} from "react-router-dom";
import HomeAchievement from './components/Home/home.achievement';
import Milestones from './components/Milestone/Milestone';
import SubAchievements from './components/SubAchievement/SubAchievement';
import Achievements from './components/Achievement/Achievement'
import {Route} from 'react-router-dom';






function App() {


  return (
    <div>

      <Home/>
 

    </div>
  )
}

export default App;
