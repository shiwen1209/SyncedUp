import React from "react";

class UpdateUser extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const dupState = Object.assign({}, this.state)
        dupState.first_name = this.state.firstName;
        dupState.last_name = this.state.lastName;
        dupState.location_city = this.state.locationCity;
        dupState.location_state = this.state.locationState;
        dupState.location_country = this.state.locationCountry;

        this.props.updateUser(dupState).then(this.props.closeModal())
    }

    handleUpdate(field){
        return (e)=>this.setState({[field]: e.currentTarget.value})
    }

    render(){
        const {formType, closeModal} = this.props
        return(
            <div className="component">
                <div className="component-title">
                    <h1>Edit {formType}</h1>
                    <i className="fa-solid fa-xmark"
                        onClick={closeModal}></i>
                </div>
                
                {formType === "intro" ? 
                <form id={formType} onSubmit={this.handleSubmit}>
                    <div>
                    <label className="session-label">First name
                        <input type="text" value={this.state.firstName}
                            className="session-box"
                            onChange={this.handleUpdate("firstName")} />
                    </label>
                    <label className="session-label">Last name
                        <input type="text" value={this.state.lastName}
                            className="session-box"
                            onChange={this.handleUpdate("lastName")} />
                    </label>
                    <label className="session-label">Pronouns
                        <select id="pronouns"
                            className="session-box"
                            defaultValue={this.state.pronouns ? this.state.pronouns : "default"}
                            onChange={this.handleUpdate("pronouns")}>
                            <option value="default" disabled >-- Please Select --</option>
                            <option value="She/her" >She/her</option>
                            <option value="He/him" >He/him</option>
                            <option value="They/they">They/they</option>
                            <option value="Other">Other</option>
                        </select>
                    </label>
                    <label className="session-label">Headline
                        <input type="text" value={this.state.headline}
                            className="session-box"
                            onChange={this.handleUpdate("headline")} />
                    </label>
                    </div>
                    
                    <div>
                    <h3>Location </h3>
                    <label className="session-label">City
                        <input type="text" value={this.state.locationCity}
                            className="session-box"
                            onChange={this.handleUpdate("locationCity")} />
                    </label >
                    <label className="session-label">State/Province
                        <input type="text" value={this.state.locationState}
                            className="session-box"
                            onChange={this.handleUpdate("locationState")} />
                    </label>
                    <label className="session-label">Country/Region
                        <input type="text" value={this.state.locationCountry}
                            className="session-box"
                            onChange={this.handleUpdate("locationCountry")} />
                    </label>
                    </div>
                </form> :

                    <form id={formType} onSubmit={this.handleSubmit}>
                        
                            <p>You can write about your years of experience, industry, or skills. People also talk about their achievements or previous job experiences.</p>
                            <textarea type="text" value={this.state.about}
                                    className="session-box"
                                    onChange={this.handleUpdate("about")}>
                            </textarea>
                    </form>   
                }

                <div className="button-container">
                    <button type="submit" form={formType} className="session-button">Save</button>
                </div>

            </div>

        )
    }
}

export default UpdateUser;