export const AddList = (props) => {
    let inputValidate = props.addListInputValidate;
    let formValidate = props.addListFormValidate;
    let addList = props.addList;

    return (
        <div className="addListWrapper">
            <form
                action="#"
                onSubmit={(e) => {
                    formValidate(e);
                }}
            >
                <button
                    type="button"
                    className="cancelButton"
                    onClick={() => {
                        props.toggleAddList(false);
                    }}
                >
                    <i className="fas fa-times"></i>
                </button>
                <div className="formAlignment">
                    <label>
                        Project:
                        <br />
                        <input
                            autoComplete="off"
                            type="text"
                            value={addList.project}
                            name="project"
                            onChange={(e) => {
                                inputValidate(e);
                            }}
                            autoFocus
                        />
                    </label>
                    <label>
                        Date:
                        <br />
                        <input
                            type="date"
                            value={addList.date}
                            name="date"
                            onChange={(e) => {
                                inputValidate(e);
                            }}
                        />
                    </label>
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
                        ></textarea>
                    </label>
                    <input
                        className="submitButton"
                        type="submit"
                        value="Save"
                    />
                </div>
            </form>
        </div>
    );
};
