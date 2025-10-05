import "./post-card.css"

export default function PostCard(props) {
    const author_name = (props.post.author)?props.post.author:"Hello";
    const author_initials = author_name.slice(0,1);
    const post_content = props.post.content;

    return (
        <div className={"post-card"}>
            <div className={"post-card-title-container"}>
                <p className={"post-author-picture"}>{author_initials}</p>
                <p className={"post-author-name"}>{author_name}</p>
            </div>
            <div className={"post-card-content-container"}>
                {post_content}
            </div>
        </div>
    );
}