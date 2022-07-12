import React from "react";



export default (props)=>{
    return(
        <li>
            <div>
                <p>{props.post.authorName}</p>
                <p>{props.post.authorHeadline}</p>
            </div>

            <p>{props.post.body}</p>
            <button>Like</button>
            <button>Comment</button>

            {props.currentUserId === props.post.authorId ?
                <div>
                    <button onClick={(e) => props.deletePost(props.post.id)}>
                        Delete</button>
                    <button>Edit</button>
                </div> :
                <div></div>
            }
        </li>
    )
}