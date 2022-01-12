import React from 'react';
import Mitem from '/home/akhil.e@TA.COM/node-react-project-dec/my-react-app/src/components/Milestone/Mitem.js'

function Mlist(props) {

    return (
        <ul className='Alist'>
            {props.alists.map((alist) => ( 
            
            <Mitem
            key = {alist.id}
            id={alist.milestones_id}
            achievement={alist.title}
            content={alist.content}
                
            />
            ))}
            
        </ul>
    );
}

export default Mlist;
