import React from "react";
import CreateCommentContainer from "./create_comment_container";
import { Link } from "react-router-dom";

class CommentIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            displayCommentEdit: false,
            displayReply: false,
            displayButtons: false,
            comment: this.props.comment
        }
        this.toggleReply = this.toggleReply.bind(this);
        this.toggleCommentEdit = this.toggleCommentEdit.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLike = this.handleLike.bind(this)
        this.toggleButtons = this.toggleButtons.bind(this);
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

    toggleButtons(e) {
        if (this.state.displayButtons) {
            this.setState({ displayButtons: false })
        } else {
            this.setState({ displayButtons: true })
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
        if (JSON.stringify(currentLike) in likes) {
            const likeId = likes[JSON.stringify(currentLike)]
            deleteLike(likeId)
        } else {
            const likeForm = { user_id: currentUserId, likable_id: comment.id, likable_type: 'Comment' }
            createLike(likeForm)
        }
    }

    render(){
        const {comment, postId, currentUserId, deleteComment} = this.props

        return(
        <div id="comment-item">
                <Link to={`/users/${comment.commenterId}`}>
                    <div className="img">
                        <img src={comment.authorHeadshotUrl} alt="" />
                    </div>
                </Link>
                <div >
                    <div id="comment-body">
                        <div className="component-title" >
                                <div className="headline-tag">
                                    <Link to={`/users/${comment.commenterId}`}>
                                        <div className="text-link">
                                            <span>{comment.commenterFirstname} {comment.commenterLastname}</span>
                                            {comment.commenterPronouns ? <span>&nbsp;({comment.commenterPronouns})</span> : <span></span>}
                                        </div>
                                        <div>
                                            <p>{comment.commenterHeadline}</p>
                                        </div>
                                    </Link>
                                </div>
                            {currentUserId === comment.commenterId ?
                                <div className="dropdown-container">
                                    <div className="icon" onClick={this.toggleButtons}>
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </div>
                                    {this.state.displayButtons ?
                                        <div className="dropdown-buttons" onClick={(e) => { this.setState({ displayButtons: false })}}>
                                            <div onClick={this.toggleCommentEdit}>
                                                <i className="fa-solid fa-pen"></i>
                                                <p>Edit Comment</p>
                                            </div>
                                            <div onClick={(e) => deleteComment(comment.id)}>
                                                <i className="fa-solid fa-trash-can"></i>
                                                <p>Delete Comment</p>
                                            </div>
                                        </div> : <div></div>
                                    }
                                </div> :
                                <div></div>
                            }
                        </div>
                            
                        {this.state.displayCommentEdit ?
                        <div id="comment-edit-container" className="component-body">
                            <input type="text" value={this.state.comment.body} 
                                    onChange={this.updateBody}/>
                            <br/>
                            <div>
                                    <button className="session-button" onClick={this.handleSubmit}>Save Changes</button>
                                    <button className="session-button" onClick={(e) => { this.setState({ displayCommentEdit: false }) }}>Cancel</button>
                            </div>
                        </div> : 
                        <div id="comment-paragraph" className="component-body">
                            <p >{comment.body}</p>
                        </div>

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
                            <CreateCommentContainer
                                    postId={postId}
                                    parentCommentId={comment.id}
                                    formType="Add a reply..."
                                    comment={comment}
                            />
                        </div> : <div></div>}
                    </div>
                </div>
        </div>
        )
    }
    


}

export default CommentIndexItem