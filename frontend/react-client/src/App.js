import "./App.css"
import "./Components/login-form/login-form"
import {BrowserRouter} from "react-router-dom";
import PostFeed from "./Components/post-feed/post-feed";



function App() {
    return (
        <BrowserRouter>
            <PostFeed />
        </BrowserRouter>
    );
}

export default App;