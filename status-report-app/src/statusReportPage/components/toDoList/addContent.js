export const AddContent = (props) => {
    let inputValidate = props.addContentInputValidate;
    let formValidate = props.addContentFormValidate;
    let addContent = props.addContent;

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
                    type="button"
                    onClick={() => {
                        props.toggleContentList("dummy", false);
                    }}
                >
                    <i className="fas fa-times"></i>
                </button>
                <label>
                    Issues/Risk:
                    <br />
                    <textarea
                        name="content"
                        value={addContent.content}
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
