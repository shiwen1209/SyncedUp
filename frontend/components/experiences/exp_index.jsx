import React from "react";
import ExpIndexItem from "./exp_index_item";

class ExpIndex extends React.Component {

    render(){
        const { experiences, exp_type} = this.props

        const exp_list = experiences.map((exp, idx)=>(
            <ExpIndexItem exp={exp} key={idx} type={exp_type} />
        ))

        if(exp_type === "work"){
            return (
                <div id="user-profile-experience" className="component">
                    <h1>Experience</h1>
                    <ul>
                        {exp_list}
                    </ul>
                </div>
            )
        } else {
            return (
                <div id="user-profile-education" className="component">
                    <h1>Education</h1>
                    <ul>
                        {exp_list}
                    </ul>
                </div>
            )
        }
    }
}

export default ExpIndex;