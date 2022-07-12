import React from "react";

class CreatePost extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            body: "",
            author_id: this.props.author.id
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUpdate(field){
        return (e)=> this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e){
        console.log("submit")
        console.log(this.props.creatPost)
        this.props.createPost(this.state)
    }

    render(){
        return (
            <div>
                <h2>Create a post</h2>
                <p>{this.props.author.firstName}</p>
                <p>{this.props.author.headline}</p>
                <form onSubmit={this.handleSubmit}>
                    <label>post body
                        <textarea value={this.state.body}
                            onChange={this.handleUpdate("body")}></textarea>
                    </label>
                    <button type="submit">Post</button>
                </form>
            </div>

        )
    }
}

export default CreatePost