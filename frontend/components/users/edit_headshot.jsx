import React from "react";

class EditHeadshot extends React.Component{
    constructor(props){
        super(props);
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            photoFile: null,
            photoUrl: null
        }
    }

    handleFile(e){
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = ()=>{
            this.setState({photoFile: file, photoUrl: fileReader.result})
        }
        if(file){
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const { user, closeModal } = this.props
        const formData = new FormData();
        formData.append('user[headshot]', this.state.photoFile);
        this.props.updateUserPhoto(user.id, formData).then(closeModal())
    }

    render(){
        const {user, closeModal} = this.props
        return(
            <div id="edit-headshot" className="component">
                <div id="headshot-title">
                    <h3>Profile photo</h3>
                    <div className="icon" onClick={closeModal}>
                        <i className="fa-solid fa-xmark" ></i>
                    </div>
                </div>
                <div className="img">
                    <img src={this.state.photoUrl ? this.state.photoUrl : user.headshotUrl} 
                    alt="" />
                </div>
                <div id="headshot-buttons">
                    <div>
                        <input type="file" onChange={this.handleFile}/>
                    </div>
                    <div>
                        <button onClick={this.handleSubmit}>Save</button>
                    </div>
                    {/* <div>
                        <i className="fa-solid fa-trash-can"></i>
                        <p>Delete</p>
                    </div> */}
                </div>
                
            </div>
        )

    }
}

export default EditHeadshot;