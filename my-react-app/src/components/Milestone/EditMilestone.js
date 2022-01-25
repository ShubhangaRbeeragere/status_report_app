import React,{useState} from 'react';
import './m.css';
import axios from 'axios';

export default function EditMilestones (props) {

  const closeMilestones = props.closeMilestones;

  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [datas, setDatas] = useState(null);
 
const updateOnclick = (title,content)=> {


  setLoading(true);
  setIsError(false);
  const data = {
    title: title,
    content: content
  }
  axios.put('http://localhost:8080/milestones/updateMILESTONE', data).then(res => {
    setDatas(res.data);
    setName('');
    setJob('');
    setLoading(false);
  }).catch(err => {
    setLoading(false);
    setIsError(true);
  });
}


    return (
   
        <form className='Milestones'  onSubmit={(updateOnclick)}>
  
            <div className='Mname' >
                <button className='xbutton' onClick={()=> closeMilestones(false)}>X</button>
                <label><h4 className='aHeader'>Milestone</h4></label>
                <input className='aInput' type="text" 
             placeholder='Enter Title...'  name="title"></input>
   
               <label> <h4 className='cHeader'>Content</h4></label>
                <input className='cInput' type="text" placeholder='Enter content...'  name="content"></input>
            </div>
     
            <div>
          <button className='Mbuttons' type='update'>Save  </button>

        </div>
    

        
      </form>        
    );
}



