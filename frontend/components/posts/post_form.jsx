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
        e.preventDefault();
        this.props.processForm(this.state).then(this.props.closeModal)
    }

    render(){
        const {formType, closeModal, currentUser} = this.props
        return (
            <div id="post-form" className="component">
                <div className="component-title">
                    <h1>{formType}</h1>
                    <i className="fa-solid fa-xmark"
                        onClick={closeModal}></i>
                </div>
                <div className="component-title">
                    <div className="img">
                        <img src={currentUser.headshotUrl ? currentUser.headshotUrl
                                : "https://www.personality-insights.com/wp-content/uploads/2017/12/default-profile-pic-e1513291410505.jpg"} alt="" />
                    </div>
                    <div className="headline-tag">
                            <div>
                            <span>{currentUser.firstName} {currentUser.lastName}</span>&nbsp;<span>({currentUser.pronouns})</span>
                            </div>
                            <div>
                            <p>{currentUser.headline}</p>
                            </div>
                    </div>
                </div>


                <form onSubmit={this.handleSubmit}>
                    <textarea value={this.state.body} placeholder="What do you want to post today?"
                            onChange={this.handleUpdate("body")}></textarea>
                    <button type="submit" className="session-button">{formType === "Create a post" ? "Post" : "Save"}</button>
                </form>
            </div>

        )
    }
}

export default PostForm; 