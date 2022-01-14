import React from 'react';


function Mitem(props) {

    const title = props.title;
    const content = props.content;

    return <div>
        
          <h4>{title}</h4>          
          
          <h5>{content}</h5>
          <button className='deleteButton'>X</button>
          </div>
}

export default Mitem;
