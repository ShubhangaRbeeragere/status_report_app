function DeleteNotification(props) {
    return (
        <div className="notificationWrapper">
            <div className="notification">
                <p className="message">
                    Delete Project{" "}
                    <span className="projectName">{props.projectName}?</span>
                </p>
                <div className="buttonHolder">
                    <button
                        type="button"
                        className="deleteYes"
                        onClick={() => {
                            props.deleteProject(props.projectName);
                        }}
                    >
                        Yes
                    </button>
                    <button
                        type="button"
                        className="deleteNo"
                        onClick={() => {
                            props.toggleDeleteNotification("something", false);
                        }}
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeleteNotification;
