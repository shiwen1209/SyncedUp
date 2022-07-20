import React from "react";
import { Link } from "react-router-dom";

class CommentForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            body: "",
            post_id: this.props.postId,
            commenter_id: this.props.currentUserId,
            parent_comment_id: this.props.parentCommentId,
            display: true
        }
        this.updateBody = this.updateBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateBody(e){
        this.setState({body: e.currentTarget.value })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createComment(this.state)
        this.setState({ body: "", display: false})
    }

    render(){
        const {currentUserId, formType} = this.props;

        if (this.state.display || formType === "Add a comment..."){
                return (
                    <div id={formType === "Add a reply..." ? "comment-reply-form" : "comment-create-form"}>
                        {formType === "Add a reply..." ?
                        < Link className="link" to={`/users/${currentUserId}`}>
                            <div className="img">
                                <img src={this.props.comment.authorHeadshotUrl} alt="" />
                            </div>
                        </Link> : <div></div>
                        }
                        <form onSubmit={this.handleSubmit}>
                            <textarea value={this.state.body}
                                placeholder={formType}
                                onChange={this.updateBody}></textarea>
                            {formType === "Add a comment..." ?
                                <button type="submit">Post</button> :
                                <button type="submit">Reply</button>
                            }
                        </form>

                    </div>
                )
            } else {return (<div></div>)}

        }
    

}

export default CommentForm