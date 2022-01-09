import React from 'react';
import Aitem from './Aitem';

function Alist(props) {

    const closealist = props.closealist

    return (
        <ul className='Alist'>
            {props.alists.map((alist) => ( 
            
            <Aitem 
            key={alist.id}
            id={alist.id}
            achievement={alist.achievement}
            content={alist.content}
            date={alist.date}
                
            />
            ))}
            
        </ul>
    );
}

export default Alist
