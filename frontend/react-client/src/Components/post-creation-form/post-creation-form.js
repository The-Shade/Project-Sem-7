import './post-creation-form.css'

function Post_Creation_Form (props) {
    return (
        <div id={"post-form-container"}>
            <h2>Create Post</h2>
            <input type="text" id="post-title-input" placeholder="Enter post title"/>
            <textarea id="post-content-input" rows="5" placeholder="Enter post content"></textarea>
            <br/>

            <button id="publishBtn">Publish</button>
            <button id="resetBtn">Reset</button>
        </div>
    );
}

export default Post_Creation_Form;