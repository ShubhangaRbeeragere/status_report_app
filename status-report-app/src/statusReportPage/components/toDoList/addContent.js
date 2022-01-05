export const AddContent = (props) => {
    let inputValidate = props.addContentInputValidate;
    let formValidate = props.addContentFormValidate;
    let addList = props.addContent;

    return (
        <div className="addContentWrapper">
            <form
                action="#"
                onSubmit={(e) => {
                    formValidate(e);
                }}
            >
                <button
                    className="cancelButton"
                    onClick={() => {
                        props.toggleContentList();
                    }}
                >
                    <i className="fas fa-times"></i>
                </button>
                <label>
                    Content:
                    <br />
                    <textarea
                        name="content"
                        value={addList.content}
                        id="content"
                        cols="30"
                        rows="10"
                        onChange={(e) => {
                            inputValidate(e);
                        }}
                        autoFocus
                    ></textarea>
                </label>
                <input className="submitButton" type="submit" value="Save" />
            </form>
        </div>
    );
};
