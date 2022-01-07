import PropTypes from "prop-types";

const Presentation = (props) => {
    return (
        <div className="presentationWrapper">
            <button
                type="button"
                className="cancelButton"
                onClick={() => {
                    props.togglePresentation();
                }}
            >
                <i className="fas fa-times"></i>
            </button>
            <div className="presentation">Presentation</div>
        </div>
    );
};

export default Presentation;

Presentation.propTypes = {
    presentation: PropTypes.shape({
        buttonState: PropTypes.bool,
    }),
};
