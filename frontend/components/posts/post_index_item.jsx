import React from "react";
import { Link } from "react-router-dom";



class PostIndexItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            displayComments: false
        }
    }

    render(){

        return (
            <li>
                <div>
                    <p>{this.props.post.authorName}</p>
                    <p>{this.props.post.authorHeadline}</p>
                </div>
                <p>{this.props.post.body}</p>
                <p onClick={(e) => this.setState({ displayComments: true })}>
                    See comments
                </p>
                <button>Like</button>
                <button onClick={(e) => this.setState({ displayComments: true })}>
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
                        <div>Comment BOX here</div>
                        <div>Comments are displayed here</div>
                    </div> :
                    <div></div>
                }

            </li>
        )
    }

}


export default PostIndexItem