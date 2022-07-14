import React from "react";
import { Link } from "react-router-dom";
import CommentIndexContainer from "../comments/comment_index_container"



class PostIndexItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            displayComments: false
        }
        this.toggleComments = this.toggleComments.bind(this)
    }

    toggleComments(e){
        if(this.state.displayComments){
            this.setState({ displayComments: false })
        } else {
            this.setState({ displayComments: true })
        }
    }

    render(){

        return (
            <li className="component" id="post">
                <div>
                    <p>{this.props.post.authorName}</p>
                    <p>{this.props.post.authorHeadline}</p>
                </div>
                <p>{this.props.post.body}</p>
                <p onClick={this.toggleComments}>
                    See comments
                </p>
                <button>Like</button>
                <button onClick={this.toggleComments}>
                    Comment
                </button>


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

                {this.state.displayComments ?
                    <div>
                        <CommentIndexContainer post={this.props.post}/>
                    </div> :
                    <div></div>
                }

            </li>
        )
    }

}


export default PostIndexItem