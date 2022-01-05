export const AddListButton = (props) => {
    return (
        <button
            className="addListButton"
            onClick={() => {
                props.toggleAddList();
            }}
        >
            Add
        </button>
    );
};
