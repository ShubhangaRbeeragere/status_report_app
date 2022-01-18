import React from 'react';
import Mitem from '/home/akhil.e@TA.COM/node-react-project-dec/my-react-app/src/components/Milestone/Mitem.js'

function Mlist(props) {


    return (
        <ui className='Alist'>
            <li>
            {props.alists.map((alist) => ( 
            
            <Mitem
            key = {alist.id}
            id={alist.milestones_id}
            title={alist.title}
            content={alist.content}
        
            />
            ))}
            </li>
        </ui>
    );
}

export default Mlist;
