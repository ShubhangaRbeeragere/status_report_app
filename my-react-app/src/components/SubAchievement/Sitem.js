import React from 'react'

function Sitem(props) {

    const name = props.subachievement_name;
    const content = props.content;

    return <div>
        
          <h4>{name}</h4>
          <h5>{content}</h5>
        
     
       
        </div>
}

export default Sitem;
