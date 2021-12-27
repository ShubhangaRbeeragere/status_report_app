import { CompanyLogo } from "./companyLogo";
import { Period } from "./period";
import { Presentation } from "./presentation";
export const Header = (props) => {
    return (
        <div className="header boxes">
            { <CompanyLogo/> }
            { <Period/> }
            { <Presentation/> }
        </div>
    )
}