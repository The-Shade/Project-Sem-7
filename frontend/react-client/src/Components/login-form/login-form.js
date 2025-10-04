import "./login-form.css"
import {useState} from "react";

async function LoginUser(credentials) {
    return fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    }).then(value => value.json());
}

function LoginForm({ setToken }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const HandleSubmit = async e => {
        e.preventDefault();
        const token = await LoginUser({
            username,
            password
        });
        setToken(token);
    };

    return (
        <form id={"login-form"} onSubmit={HandleSubmit}>
            <h3 id={"login-heading"}>Login</h3>
            <p id={"welcome-message"}>Welcome to our Information Management and Distribution System</p>
            <div id={"uid-input-group"} className={"login-input-group"}>
                <label htmlFor={"login-uid"} className={"login-input-label"}>UID</label>
                <input type="text" onChange={e => setUsername(e.target.value)} id={"login-uid"} className={"login-input"} placeholder={"Enter UID"} required={true}/>
            </div>
            <div id={"password-input-group"} className={"login-input-group"}>
                <label htmlFor={"login-password"} className={"login-input-label"}>Password</label>
                <input type="password" onChange={e => setPassword(e.target.value)} id={"login-password"} className={"login-input"} placeholder={"Enter Password"} required={true}/>
            </div>

            <button type={"submit"} id={"login-form-submit"}>Login</button>
        </form>
    );
}

export default LoginForm;