import React from "react";

class CommentForm extends React.Component{
    constructor(props){
        // debugger
        super(props);
        this.state = {
            body: this.props.formType,
            post_id: this.props.postId,
            commenter_id: this.props.currentUserId,
            parent_comment_id: this.props.parentCommentId,
        }
        this.updateBody = this.updateBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // componentDidMount(){
    //     this.setState({display: true})
    // }

    updateBody(e){
        this.setState({body: e.currentTarget.value })
    }

    handleSubmit(e){
        this.props.createComment(this.state)
        this.setState({ body: this.props.formType })
    }

    render(){
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <textarea value={this.state.body}
                            onChange={this.updateBody}></textarea>
                        <br />
                        {this.props.formType === "Add a comment..." ?
                            <button type="submit">Post</button> :
                            <button type="submit">Reply</button>
                        }
                    </form>
                </div>
            )
        }
    

}

export default CommentForm