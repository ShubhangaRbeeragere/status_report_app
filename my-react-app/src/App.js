import React,{useState} from 'react';
import AchievementHome from './components/Achievement/AchievementHome';


function App() {
 
  const [nextPageUrl,setNextPageUrl] = useState ()
  const [sub,setSub] =useState ()
  const [prevPageUrl,setPrevPageUrl] = useState ()



  return (
    <div>

<AchievementHome/></div>


  )
}

export default App;
