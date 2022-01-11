import React from 'react'

function Aitem(props) {



    return <li>
        <div>
            <h4>{props.achievement_name}</h4>
            <p>{props.content}</p>
     
        </div>
        </li>
}

export default Aitem;
