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
            return <ExpIndexItem exp={exp} key={idx} exp_type={exp_type} editState={this.state.editState} />
        })

            return (
                <div id="user-profile-experience" className="component">
                    <div className="component-title">
                        <div>
                            {this.state.editState ? <i class="fa-solid fa-arrow-left"
                            onClick={(e) => this.setState({ editState: false })}></i> : <div></div>}
                            {exp_type === "work" ? <h1>Experience</h1> : <h1>Education</h1> }  
                        </div>
                        
                            {user.id === currentUserId ?
                            <div>
                                <i className="fa-solid fa-plus"></i>
                                {this.state.editState ? <div></div> :
                                <i className="fa-solid fa-pen" onClick={(e) => this.setState({editState: true})}></i>}
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