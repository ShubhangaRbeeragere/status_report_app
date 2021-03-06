import ErrorMessage from "./ErrorMessage";
const LoginTemplate = ({ userInput, formValidation, updateInputs, error }) => {
    return (
        <div className="loginHolder">
            <h2 className="name">LogIn</h2>
            <form onSubmit={formValidation}>
                <label htmlFor="userName">Username</label>
                <input
                    type="text"
                    name="username"
                    value={userInput.username}
                    maxLength={23}
                    onChange={updateInputs}
                    placeholder="Username"
                    autoFocus
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    maxLength={16}
                    value={userInput.password}
                    onChange={updateInputs}
                    placeholder="Password"
                />
                <input className="button" type="submit" value="Log In" />
            </form>
            <div className="messages">{<ErrorMessage error={error} />}</div>
        </div>
    );
};

export default LoginTemplate;
