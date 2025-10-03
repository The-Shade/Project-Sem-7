import "./App.css"
import "./Components/login-form/login-form"
import {BrowserRouter} from "react-router-dom";
import LoginForm from "./Components/login-form/login-form";



function App(props) {
    return (
        <BrowserRouter>
                <LoginForm />
        </BrowserRouter>
    );
}

export default App;