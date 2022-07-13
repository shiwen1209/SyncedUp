import React from "react";
import { Link } from "react-router-dom";



class PostIndexItem extends React.Component {

    render(){

        const simplePost = this.props.post
        return (
            <li>
                <div>
                    <p>{this.props.post.authorName}</p>
                    <p>{this.props.post.authorHeadline}</p>
                </div>

                <p>{this.props.post.body}</p>
                <button>Like</button>
                <button>Comment</button>

                {this.props.currentUserId === this.props.post.authorId ?
                    <div>
                        <button onClick={(e) => this.props.deletePost(this.props.post.id)}>
                            Delete</button>
                        <button onClick={(e) => this.props.openModalPayload({ modal: 'updatePost', payload: this.props.post })}>
                            Update Post
                        </button>
                    </div> :
                    <div></div>
                }
            </li>
        )
    }

}


export default PostIndexItem