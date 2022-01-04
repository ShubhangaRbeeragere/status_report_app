import React,{Component} from 'react';
import './AddedSubAchievement'


export default class AddedSubAchievement extends Component() {

render(){
    return (
        <div className='AddedSubAchievement'>
            <div className='AddButton'>
            <button >Add Sub Achievement</button>
            </div>
            <ul>
                <li >subachievements  <i class="fa-solid fa-trash-can"></i></li>
            </ul>   

            
        </div>
    )
}}

