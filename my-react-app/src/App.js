import React,{useState} from 'react';
import AchievementTest from './components/Achievement/AchievementTest';
import MilestoneTest from './components/Milestone/MilestoneTest';
import './App.css'






function App() {


  const [openMilestone,setOpenMilestone] = useState(false);
  const [openAchievements,setOpenAchievements] = useState(true);
 
  return (
    <div><button className='SelectMilestones' onClick={() => {
      setOpenMilestone(true);
      setOpenAchievements(false);
    }}>MILESTONES</button>
    <button className='SelectAchievements' onClick={() => {
      setOpenMilestone(false);
      setOpenAchievements(true);
    }}>ACHIEVEMENTS</button>


<div className='AT'>
{openAchievements &&  <AchievementTest />}

</div>

<div className='MT'>
{openMilestone &&  <MilestoneTest />}

</div>


</div>


  )
}

export default App;
