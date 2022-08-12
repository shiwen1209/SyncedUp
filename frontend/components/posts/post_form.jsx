import React from "react";

class PostForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.post
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleUpdate(field){
        return (e)=> this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e){
        e.preventDefault();
        const {processForm, closeModal, post} = this.props
        const formData = new FormData();
        if (this.state.photoFile){
            formData.append('post[image]', this.state.photoFile);
        }
        formData.append('post[body]', this.state.body);
        formData.append('post[author_id]', this.state.authorId);
        processForm(formData, post.id)
        closeModal();
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, imageUrl: fileReader.result })
        }
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    render(){
        const {formType, closeModal, currentUser} = this.props
        return (
            <div id="post-form" className="component">
                <div className="component-title">
                    <h3>{formType}</h3>
                    <i className="fa-solid fa-xmark"
                        onClick={closeModal}></i>
                </div>
                <div className="component-title">
                    <div className="img">
                        <img src={currentUser.headshotUrl} alt="" />
                    </div>
                    <div className="headline-tag">
                            <div>
                            <span>{currentUser.firstName} {currentUser.lastName}</span>
                            {currentUser.pronouns ? <span>&nbsp;({currentUser.pronouns})</span> : <span></span>}
                            </div>
                            <div>
                            <p>{currentUser.headline}</p>
                            </div>
                    </div>
                </div>


                <form onSubmit={this.handleSubmit} id="post-submit-form" >
                    <textarea value={this.state.body} placeholder="What do you want to post today?"
                            onChange={this.handleUpdate("body")}></textarea>
                    
                    {this.state.imageUrl ?
                        <div className="post-image">
                            <h3>Post image</h3>
                            <img src={this.state.imageUrl} alt="" />
                        </div>
                        : <div></div>
                    }
                </form>
                
                <div>
                    <input type="file" onChange={this.handleFile}/>
                    <button type="submit" form="post-submit-form" 
                    className="session-button">{formType === "Create a post" ? "Post" : "Save"}</button>
                </div>

            </div>

        )
    }
}

export default PostForm; 