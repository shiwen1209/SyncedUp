import React from "react";
import CreateCommentContainer from "./create_comment_container";

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
        // debugger
        e.preventDefault();
        this.props.updateComment(this.state.comment)
        this.setState({ displayCommentEdit: false })
    }



    render(){
        return(
            <div>
                <div>
                    <p>{this.props.comment.commenterName}</p>
                    <p>{this.props.comment.commenterHeadline}</p>
                    {this.state.displayCommentEdit ? 
                        <form onSubmit={this.handleSubmit}>
                            <textarea value={this.state.comment.body}
                                    onChange={this.updateBody}>
                            
                            </textarea>
                            <br />
                            <button type="submit">Save Changes</button>
                            <button>Cancel</button>
                        </form> :
                            <p>{this.props.comment.body}</p>
                    }
                </div>

                {this.props.comment.commenterId === this.props.currentUserId ?
                    <div>
                        <button onClick={this.toggleCommentEdit}>Edit</button>
                        <button onClick={(e)=>this.props.deleteComment(this.props.comment.id)}>Delete</button>
                    </div>
                    : <div></div>
                }

                <button>Like</button>
                <button onClick = {this.toggleReply}>Reply</button>

                {this.state.displayReply ? 
                    <div>
                        <CreateCommentContainer 
                            postId={this.props.postId}
                            parentCommentId={this.props.comment.id}
                            formType="Add a reply..."
                             />
                    </div> : 
                    <div></div> }
                
            </div>
        )
    }
    


}

export default CommentIndexItem