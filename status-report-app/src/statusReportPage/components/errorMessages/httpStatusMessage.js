export default function StatusMessage(props) {
    return (
        <div
            className={
                props.isVisible ? "statusMessage-on" : "statusMessage-off"
            }
            onTransitionEnd={() => {
                props.changeMessageVisiblity();
            }}
        >
            <div className="statusMessage">
                <p>{props.message}</p>
            </div>
        </div>
    );
}
