import { CompanyLogo } from "./companyLogo";
import { Period } from "./period";
import PropTypes from "prop-types";
export const Header = (props) => {
    return (
        <div className="header boxes">
            {<CompanyLogo />}
            {
                <Period
                    fetchData={props.fetchData}
                    date={props.date}
                    setDate={props.setDate}
                />
            }
            {
                <button
                    onClick={() => {
                        props.togglePresentation("wrapper-fade-in");
                    }}
                    className="presentationButton"
                >
                    Presentation
                </button>
            }
        </div>
    );
};

Header.propTypes = {
    fetchData: PropTypes.func,
    date: PropTypes.any,
    togglePresentation: PropTypes.func,
};
