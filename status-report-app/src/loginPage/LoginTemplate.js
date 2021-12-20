import ErrorMessage from "./ErrorMessage";
const LoginTemplate = ({userInput, formValidation, updateInputs, error}) => {
    document.querySelector("title").innerHTML = "Login Page";
    return(
        <div className="loginHolder">
            <h2 className="name">
                LogIn
            </h2>
            <form onSubmit={formValidation}>
                <label htmlFor="userName">Username</label>
                <input type="text" name="username" value={userInput.username} onChange={updateInputs} placeholder="name.ta"/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={userInput.password} onChange={updateInputs} placeholder="Password"/>
                <input className="button" type="submit" value="Log In"/>
            </form>
            <div className="messages">
               {<ErrorMessage error = {error}/>} 
            </div>
        </div>
    )
}

export default LoginTemplate;