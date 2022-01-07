import PropTypes from "prop-types";

const Presentation = (props) => {
    let presentation = props.presentation;
    return (
        <>
            <button
                type="button"
                className="cancelButton"
                onClick={() => {
                    props.togglePresentation();
                }}
            >
                <i className="fas fa-times"></i>
            </button>
            <div className="presentation">
                {presentation.data.map((item) => (
                    <div className="achievement" key={item.achievement_id}>
                        <h1>{item.achievement_name}</h1>
                        <p>{item.date}</p>
                        <p>{item.content}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Presentation;

Presentation.propTypes = {
    presentation: PropTypes.shape({
        buttonState: PropTypes.bool,
        data: PropTypes.arrayOf(PropTypes.object),
    }),
    togglePresentation: PropTypes.func,
};
