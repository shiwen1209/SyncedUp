import React from "react";

class ExpIndex extends React.Component {


    render(){
        const { experiences } = this.props
            console.log("exp")
            console.log(this.props)
            console.log(experiences)

    

        const exp_list = experiences.map((exp, idx)=>(
            <li key={idx}>
                <p>{exp.companyName}</p>
            </li>
        )) 

        return(
            <div id="user-profile-experience" className="component">
                <h1>Experience</h1>

                <ul>
                    {exp_list}
                </ul>

            </div>
        )
    }


}

export default ExpIndex;