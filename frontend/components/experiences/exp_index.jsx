import React from "react";
import ExpIndexItem from "./exp_index_item";

class ExpIndex extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            editState: false
        }
        
    }

    render(){
        const { experiences, exp_type, user, currentUserId} = this.props

        const exp_list = experiences.map((exp, idx)=>{
            return <ExpIndexItem exp={exp} key={idx} exp_type={exp_type} 
            editState={this.state.editState}
            openModalPayload={this.props.openModalPayload} />
        })

            return (
                <div id="user-profile-experience" className="component">
                    <div className="component-title">
                        <div>
                            {this.state.editState ?
                                <div className="icon" onClick={(e) => this.setState({ editState: false })}>
                                    <i className="fa-solid fa-arrow-left"></i> 
                                </div>
                            : <div></div>}
                            {exp_type === "work" ? <h2>Experience</h2> : <h2>Education</h2> }  
                        </div>
                            {user.id === currentUserId ?
                            <div className="two-icons">
                                <div className="icon" onClick={(e) => this.props.openModalPayload({ modal: 'createExp', payload: exp_type })}>
                                    <i className="fa-solid fa-plus"></i>
                                </div>
                                {this.state.editState ? <div></div> :
                                    <div className="icon" onClick={(e) => this.setState({ editState: true })}>
                                    <i className="fa-solid fa-pen"></i>
                                </div>}
                            </div> : <div></div>}
                    </div>
                    <ul>
                        {exp_list}
                    </ul>
                </div>
            )
    }
}

export default ExpIndex;