function DeleteNotification(props) {
    return (
        <div className="notificationWrapper">
            <div className="notification">
                <p className="message">Delete Project?</p>
                <div className="buttonHolder">
                    <button
                        type="button"
                        className="deleteYes"
                        // onClick={() => {
                        //     props.deleteProject(true);
                        // }}
                    >
                        Yes
                    </button>
                    <button
                        type="button"
                        className="deleteNo"
                        // onClick={props.deleteProject(false)}
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeleteNotification;
