import React from "react";

class PostForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.post
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUpdate(field){
        return (e)=> this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e){
        this.props.processForm(this.state).then(this.props.closeModal)
    }

    render(){
        console.log("create or update post")
        console.log(this.props)
        return (
            <div>
                <h2>{this.props.formType}</h2>
                <div onClick={this.props.closeModal} className="close-x">X</div>
                <p>{this.props.currentUser.firstName}</p>
                <p>{this.props.currentUser.headline}</p>
                <form onSubmit={this.handleSubmit}>
                    <label>post body
                        <textarea value={this.state.body}
                            onChange={this.handleUpdate("body")}></textarea>
                    </label>
                    <button type="submit">{this.props.formType}</button>
                </form>
            </div>

        )
    }
}

export default PostForm; 