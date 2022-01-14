import React from 'react';
import Aitem from './Aitem';

function Alist(props) {

    return (
        <ul className='Alist'>
            {props.alists.map((alist) => ( 
            
            <Aitem 
            key = {alist.id}
            id={alist.achievement_id}
            achievement_name={alist.achievement_name}
            content={alist.content}
            date={alist.date}
                
            />
            ))}
            
        </ul>
    );
}

export default Alist
