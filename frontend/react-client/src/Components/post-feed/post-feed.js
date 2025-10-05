import "./post-feed.css"
import PostCard from "../post-card/post-card";
import {useEffect, useState} from "react";

async function fetchPosts(filters) {
    const url =
        `http://localhost:3001/posts/?dept=${filters.dept}&section=${filters.section}
        &specialization=${filters.specialization}&role=${filters.role}`;
    const response = await fetch(url);

    if (!response.ok) {
        console.log(`Response Status: ${response.status}`);
    }

    return await response.json();
}


function PostFeed() {
    const [posts, setPosts] = useState([]);
    const [postFilter, setPostFilter] = useState({dept: "", section: "", specialization: "", role: ""});

    useEffect(() => {
        fetchPosts(postFilter).then(value => {
            setPosts(value.map(post => <PostCard post={post} key={post._id} test/>));

        });
        console.log(posts);
    }, [postFilter]);

    return (
        <div id={"feed-container"}>
            <div id={"filter-bar"}>
                <span>Filters</span>
                <select name={"dept"} id={"department-filter-dropdown"}
                        onChange={e => {
                            setPostFilter({...postFilter, dept: e.target.value});
                        }}>
                    <option value="">Public</option>
                    <option value={"ait-cse"}>AIT-CSE</option>
                    <option value={"cse"}>CSE (General)</option>
                </select>
                <select name={"section"} id={"section-filter-dropdown"}
                        onChange={e => {
                            setPostFilter({...postFilter, section: e.target.value});
                        }}>
                    <option value="">Public</option>
                    <option value={"22bcc-1"}>22BCC-1</option>
                    <option value={"22bcc-2"}>22BCC-2</option>
                </select>
                <select name={"specialization"} id={"specialization-filter-dropdown"}
                        onChange={e => {
                            setPostFilter({...postFilter, specialization: e.target.value});
                        }}>
                    <option value="">Public</option>
                    <option value={"CC"}>Cloud Computing</option>
                    <option value={"FSD"}>Full Stack Development</option>
                    <option value={"AIML"}>AI/ML</option>
                </select>
            </div>
            <div id="post-feed-container">
                {posts}
            </div>
        </div>
    );
}

export default PostFeed;