
// function Mitem(props) {

//     const title = props.title;
//     const content = props.content;

//     return <div>
        
//           <h4>{title}</h4>          
          
//           <h5>{content}</h5>
        
//           </div>
// }
const User = ({id,title,content,onDelete}) => {

    const handleDelete = () => {
        onDelete(id);
    }

    return (
        <div className='list'>
            <span>{title}</span>
            <span>{content}</span>
            <span>
                <button>edit</button>
                <button onClick={handleDelete}>delete</button>
            </span>
        </div>
    )
}

export default User





// export default Mitem;
