import { Link } from "react-router-dom";
export default function LoginError(params) {
  return (
    <div className="loginErrorWrapper">
      <div className="loginError">
        <p className="error">Error</p>
        <p>You need to Login before loading this page</p>
        Click <Link to="/">here</Link> to Login
      </div>
    </div>
  );
}
