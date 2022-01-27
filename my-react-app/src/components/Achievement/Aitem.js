
import './A.css'


const Aitem = ({id,Akey,achievement_name,content,onDelete}) => {

    const handleDelete = () => {

        onDelete(id);
        // window.location.reload(false);
    }

    return (
        <li className='Alist' key={Akey}>
           
            <span className="titlespan2">{achievement_name}</span>
            <br></br>
          
            <span className="contentspan2">{content}</span>
            <span>
                <div className="listedit">
                 </div>
                <div className="listdelete">
                    <button onClick={handleDelete} className="deletelist">D e l e t e</button>
                </div>
                
               
            </span>
        </li>
    )
}

export default Aitem;


