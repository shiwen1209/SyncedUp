import React from "react";

export default (props)=>{
    return(
        <li>
            <p>{props.post.body}</p>
            <button>Like</button>
            <button>Comment</button>
            
        </li>
    )
}