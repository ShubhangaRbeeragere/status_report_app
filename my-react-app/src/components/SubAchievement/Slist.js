import React from 'react';
import Aitem from './Sitem';

function Slist(props) {

    return (
        <ul className='Alist'>
            {props.alists.map((alist) => ( 
            
            <Aitem 
            key = {alist.id}
            id={alist.subachievement_id}
            subachievement={alist.subachievement_name}
            content={alist.content}
                
            />
            ))}
            
        </ul>
    );
}

export default Slist;
