import React from "react";

class CommentForm extends React.Component{
    constructor(props){
        // debugger
        super(props);
        this.state = {
            body: "Add a comment...",
            post_id: this.props.postId,
            commenter_id: this.props.currentUserId,
            parent_comment_id: null
        }
        this.updateBody = this.updateBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateBody(e){
        this.setState({body: e.currentTarget.value })
    }

    handleSubmit(e){
        this.props.createComment(this.state)
    }

    render(){
        // debugger
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <textarea value={this.state.body}
                        onChange={this.updateBody}></textarea>
                    <br />
                    <button type="submit">Post</button>
                </form>
            </div>

        )

    }

}

export default CommentForm