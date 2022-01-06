export const AddListButton = (props) => {
    return (
        <button
            className="addListButton"
            onClick={() => {
                props.toggleAddList("form-left-right-one", "wrapper-fade-in");
            }}
        >
            Add
        </button>
    );
};
