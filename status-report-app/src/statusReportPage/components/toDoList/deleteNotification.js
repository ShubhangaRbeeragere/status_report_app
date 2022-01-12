function DeleteNotification(props) {
    return (
        <div className="notificationWrapper">
            <div className="notification">
                <p className="message">Delete Project {props.projectName}?</p>
                <button
                    type="button"
                    className="deleteYes"
                    onClick={() => {
                        props.deleteProject(true);
                    }}
                >
                    Yes
                </button>
                <button
                    type="button"
                    className="deleteNo"
                    onClick={props.deleteProject(false)}
                >
                    No
                </button>
            </div>
        </div>
    );
}

export default DeleteNotification;
