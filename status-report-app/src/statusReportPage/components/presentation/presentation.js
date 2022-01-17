import PropTypes from "prop-types";
import SubAchievement from "./subAchievement";
const Presentation = (props) => {
    let presentation = props.presentation;
    return (
        <>
            <button
                type="button"
                className="cancelButton"
                onClick={() => {
                    props.togglePresentation(false);
                }}
            >
                <i className="fas fa-times"></i>
            </button>
            <div className="presentation">
                {presentation.data &&
                    presentation.data.map((achievement) => (
                        <div
                            className="achievement"
                            key={achievement.achievement_id}
                        >
                            <h1>{achievement.achievement_name}</h1>
                            <p>{achievement.date}</p>
                            <p>{achievement.content}</p>

                            <SubAchievement
                                subAchievement={
                                    achievement.sub_achievements_key
                                }
                            />
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
