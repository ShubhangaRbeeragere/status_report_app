import { useEffect } from "react";

const CompanyName = (props) => {
  useEffect(() => {
    document.title = "Login Page";
  }, []);
  return (
    <div className="companyHolder">
      <div className="nameHolder">
        <div className="logo"></div>
        <h1 className="name">Travancore Analytics</h1>
      </div>
    </div>
  );
};

export default CompanyName;
