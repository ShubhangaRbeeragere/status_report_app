import React from 'react'

function Aitem(props) {

    const name = props.achievement_name;
    const content = props.content;
    const date = props.date;

    return <div>
        
          <h4>{name}</h4>
          <h5>{content}</h5>
         
          <h7>{date}</h7>

     
       
        </div>
}

export default Aitem;