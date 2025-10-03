import "./login-form.css"

function loginForm(props) {
    return (
        <form id={"login-form"} action={"/login/"} method={"POST"}>
            <h3 id={"login-heading"}>Login</h3>
            <p id={"welcome-message"}>Welcome to our Information Management and Distribution System</p>
            <div id={"uid-input-group"} className={"login-input-group"}>
                <label htmlFor={"login-uid"} className={"login-input-label"}>UID</label>
                <input type="text" id={"login-uid"} className={"login-input"} required={true}/>
            </div>
            <div id={"password-input-group"} className={"login-input-group"}>
                <label htmlFor={"login-password"} className={"login-input-label"}>Password</label>
                <input type="password" id={"login-password"} className={"login-input"} required={true}/>
            </div>

            <button type={"submit"} id={"login-form-submit"}>Login</button>
        </form>
    );
}

export default loginForm;