import React from "react";
import CreateCommentContainer from "./create_comment_container";
import { Link } from "react-router-dom";

class CommentIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            displayCommentEdit: false,
            displayReply: false,
            comment: this.props.comment
        }
        this.toggleReply = this.toggleReply.bind(this);
        this.toggleCommentEdit = this.toggleCommentEdit.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLike = this.handleLike.bind(this)
    }

    toggleReply(){
        if(this.state.displayReply){
            this.setState({displayReply: false})
        } else {
            this.setState({ displayReply: true })
        }
    }

    toggleCommentEdit(){
        if (this.state.displayCommentEdit) {
            this.setState({ displayCommentEdit: false })
        } else {
            this.setState({ displayCommentEdit: true })
        }

    }

    updateBody(e) {
        const prevComment = this.props.comment
        const newComment = Object.assign({}, prevComment)
        newComment.body = e.currentTarget.value
        this.setState({ comment: newComment })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateComment(this.state.comment)
        this.setState({ displayCommentEdit: false })
    }

    handleLike(e) {
        const {comment, likes, currentUserId, createLike, deleteLike } = this.props
        const currentLike = { userId: currentUserId, likableId: comment.id, likableType: 'Comment' }
        // debugger
        if (JSON.stringify(currentLike) in likes) {
            const likeId = likes[JSON.stringify(currentLike)]
            deleteLike(likeId)
        } else {
            const likeForm = { user_id: currentUserId, likable_id: comment.id, likable_type: 'Comment' }
            createLike(likeForm)
        }
    }




    render(){
        const {comment, currentUserId, updateComment, deleteComment} = this.props

        return(
        <div id="comment-item">
                <Link to={`/users/${comment.commenterId}`}>
                    <div className="img">
                        img
                    </div>
                </Link>
                <div >
                    <div id="comment-body">
                        <div className="component-title" >
                                <div className="headline-tag">
                                    <Link to={`/users/${comment.commenterId}`}>
                                        <div>
                                            <span>{comment.commenterFirstname} {comment.commenterLastname}</span><span>({comment.commenterPronouns})</span>
                                        </div>
                                        <div>
                                            <p>{comment.commenterHeadline}</p>
                                        </div>
                                    </Link>
                                </div>
                    
                                {currentUserId === comment.commenterId ?
                                <div>

                                    <button onClick={this.toggleCommentEdit}>
                                        Edit    
                                    </button>
                                    <button onClick={(e)=>deleteComment(this.props.comment.id)}>
                                        Delete
                                    </button>
                                </div> :
                                <div></div>
                            }
                        </div>
                            
                    
                
                        {this.state.displayCommentEdit ?
                        <form className="component-body"
                        onSubmit={this.handleSubmit}>
                            <textarea value={this.state.comment.body}
                                onChange={this.updateBody}>
                            </textarea>
                            <br />
                            <button type="submit">Save Changes</button>
                            <button>Cancel</button>
                        </form> : <p className="component-body">{this.props.comment.body}</p>
                        }
                
                    </div>
                    <div id="like-reply">
                        <div>   
                            <button onClick={this.handleLike}>Like</button>&nbsp;&nbsp;
                            {comment.numLikes > 0 ?
                                < div className="post-like-comment">
                                    <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                                    <p>{comment.numLikes}</p>
                                </div> : <div></div>
                             }
                            &nbsp;&nbsp;<p>|</p>&nbsp;&nbsp;
                            <button onClick={this.toggleReply}>Reply</button>
                        </div>

                        {this.state.displayReply ? 
                        <div id="reply-area">
                            <Link to={`/users/${currentUserId}`}>
                                    <div className="img">
                                        img
                                    </div>
                            </Link>
                            <CreateCommentContainer
                                    postId={this.props.postId}
                                    parentCommentId={this.props.comment.id}
                                    formType="Add a reply..."
                            />
                        </div> : <div></div> }
                    </div>
                </div>
        </div>
        )
    }
    


}

export default CommentIndexItem