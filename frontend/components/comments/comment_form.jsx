import React from "react";

class CommentForm extends React.Component{
    constructor(props){
        // debugger
        super(props);
        this.state = {
            body: "",
            post_id: this.props.postId,
            commenter_id: this.props.currentUserId,
            parent_comment_id: this.props.parentCommentId,
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
        this.setState({ body: this.props.formType })
    }

    render(){
            return (
                <form onSubmit={this.handleSubmit}>
                    <textarea value={this.state.body}
                        placeholder={this.props.formType}
                            onChange={this.updateBody}></textarea>
                        {this.props.formType === "Add a comment..." ?
                            <button type="submit">Post</button> :
                            <button type="submit">Reply</button>
                        }
                </form>
            )
        }
    

}

export default CommentForm