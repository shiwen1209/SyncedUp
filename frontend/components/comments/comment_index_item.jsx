import React from "react";

class CommentIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            displayReply: false
        }
        this.toggleReply = this.toggleReply.bind(this);
    }

    toggleReply(){
        if(this.state.displayReply){
            this.setState({displayReply: false})
        } else {
            this.setState({ displayReply: true })
        }
    }


    render(){
        return(
            <div>
                <p>{this.props.comment.commenterName}</p>
                <p>{this.props.comment.commenterHeadline}</p>
                <p>{this.props.comment.body}</p>
                <button>Like</button>
                <button onClick = {this.toggleReply}>Reply</button>
                {this.state.displayReply ? 
                    <div>reply here</div> : <div></div> }
            </div>
        )
    }
    


}

export default CommentIndexItem