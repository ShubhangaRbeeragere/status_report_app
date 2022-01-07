import PropTypes from "prop-types";

function SubAchievement(props) {
    return (
        <>
            {props.subAchievement.map((item) => (
                <div className="subAchievement" key={item.sub_achievements_id}>
                    <h3>{item.sub_achievement_name}</h3>
                    <p>{item.content}</p>
                </div>
            ))}
        </>
    );
}

export default SubAchievement;

SubAchievement.propTypes = {
    subAchievement: PropTypes.array,
};
