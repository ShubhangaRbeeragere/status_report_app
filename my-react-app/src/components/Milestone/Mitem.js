
import './m.css'


const Mitem = ({id,Mkey,title,content,onDelete}) => {

    const handleDelete = () => {
        onDelete(id);
        //window.location.reload();
        //e.preventDefault();
    }


    return (
        <li className='list' key={Mkey}>
         
            <span className="titlespan">{title}</span>
            <br></br>
          
            <span className="contentspan">{content}</span>
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

export default Mitem;


