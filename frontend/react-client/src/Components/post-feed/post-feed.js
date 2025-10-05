import "./post-feed.css"
import PostCard from "../post-card/post-card";

function PostFeed() {
    return (
        <div id={"feed-container"}>
            <div id={"filter-bar"}>
                <span>Filters</span>
                <select name={"dept"} id={"department-filter-dropdown"}>
                    <option value={"ait-cse"}>AIT-CSE</option>
                    <option value={"cse"}>CSE (General)</option>
                </select>
                <select name={"section"} id={"section-filter-dropdown"}>
                    <option value={"22bcc-1"}>22BCC-1</option>
                    <option value={"22bcc-2"}>22BCC-2</option>
                </select>
                <select name={"specialization"} id={"specialization-filter-dropdown"}>
                    <option value={"CC"}>Cloud Computing</option>
                    <option value={"FSD"}>Full Stack Development</option>
                    <option value={"AIML"}>AI/ML</option>
                </select>
            </div>
            <div id="post-feed-container">
                <PostCard name={"Abhilakshya Gusain"} content={"This is a post."}/>
                <PostCard name={"Muskaan Walia"}/>
                <PostCard name={"Malli"}/>
                <PostCard name={"Jasanpreet Kaur"}/>
            </div>
        </div>
    );
}

export default PostFeed;