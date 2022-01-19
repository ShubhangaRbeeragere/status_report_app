
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
                <button onClick={handleDelete} className="fas fa trash"></button>
            </span>
        </div>
    )
}

export default User;





// export default Mitem;
