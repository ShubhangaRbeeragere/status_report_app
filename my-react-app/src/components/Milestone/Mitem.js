import React from 'react';
import Mlist from '/home/akhil.e@TA.COM/node-react-project-dec/my-react-app/src/components/Milestone/Mitem.js'

function Mitem(props) {

    const title = props.title;
    const content = props.content;

    return <div>
        
          <h4>{title}</h4>
          <h5>{content}</h5>
        
     
       
        </div>
}

export default Mitem;
