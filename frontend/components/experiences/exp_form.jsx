import React from "react";

class ExpForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.exp;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        debugger
        const { processForm, closeModal, errors, clearExpErrors} = this.props
        clearExpErrors(),
        processForm(this.state).then(()=>{
            if (errors.length === 0) { closeModal() }
        })
    }

    handleUpdate(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value })
    }

    handleDelete(e) {
        e.preventDefault();
        const { exp, deleteExp, closeModal} = this.props;
        deleteExp(exp.id).then(closeModal());
    }

    render(){
        const {formType , create_exp_type, closeModal, errors} = this.props

        let errs;
        if (errors.length > 0) {
            errs = errors.map((err, idx) => (<li key={idx}>{err}</li>))
        } else {
            errs = <div></div>
        }
        return(
            <div className="component">
                <div className="component-title">
                    <h2>{formType} {create_exp_type === "work" ? "experience" : "education"}</h2>
                    <div className="icon" onClick={(e) => closeModal()}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                </div>

                
                    
                <form id={formType} onSubmit={this.handleSubmit}>
                {create_exp_type === "work" ? 
                    <div>
                            <label className="session-label">Title
                                <input type="text" value={this.state.title}
                                    className="session-box"
                                    onChange={this.handleUpdate("title")} />
                            </label>
                            <label className="session-label">Employment type
                                <select id="pronouns"
                                    className="session-box"
                                    defaultValue={this.state.employment_type ? this.state.employment_type : "default"}
                                    onChange={this.handleUpdate("employment_type")}>
                                    <option value="default" disabled >-- Please Select --</option>
                                    <option value="Full-time" >Full-time</option>
                                    <option value="Part-time" >Part-time</option>
                                    <option value="Self-employed">Self-employed</option>
                                    <option value="Other">Other</option>
                                </select>
                            </label>
                            <label className="session-label">Company name
                                <input type="text" value={this.state.company_name}
                                    className="session-box"
                                    onChange={this.handleUpdate("company_name")} />
                            </label>
                            <label className="session-label">Location
                                <input type="text" value={this.state.location}
                                className="session-box"
                                onChange={this.handleUpdate("location")} />
                            </label>
                    </div> :
                    <div>
                        <label className="session-label">School
                                <input type="text" value={this.state.company_name}
                                    className="session-box"
                                    onChange={this.handleUpdate("company_name")} />
                        </label>
                        <label className="session-label">Degree
                            <input type="text" value={this.state.title}
                                    className="session-box"
                                    onChange={this.handleUpdate("title")} />
                         </label>
                    </div>
                    }

                    <div>
                        <h3>Timeline </h3>
                        <ul className="error-list">{errs}</ul>
                        <label className="session-label">Start date
                            <input type="date" value={this.state.start_date}
                                className="session-box"
                                onChange={this.handleUpdate("start_date")} />
                        </label >
                        <label className="session-label">End date
                            <input type="date" value={this.state.end_date}
                                className="session-box"
                                onChange={this.handleUpdate("end_date")} />
                        </label >
                    </div>
                </form> 
                <div className={formType === "Edit" ? "update-button-container":"button-container"}>
                    {formType === "Edit" ?
                    <button type="submit" className="session-button" onClick={this.handleDelete}>Delete</button>
                    : <div></div>
                    }
                    <button type="submit" form={formType} className="session-button">Save</button> 
                    
                </div>
            </div>  
        )
    }
}

export default ExpForm