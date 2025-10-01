import {BrowserRouter} from "react-router-dom";
import Post from "./Components/post-creation-form/post-creation-form";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Post />
    </BrowserRouter>
  );
}

export default App;
