import React from "react";

class ExpIndexItem extends React.Component{

    render(){
        const {exp, type} = this.props
        const start = new Date(exp.startDate)
        const start_year = start.getFullYear()
        const start_date = start.toLocaleString('default', { month: 'short' })
            .concat(" ").concat(start.getFullYear())
        const end = new Date(exp.endDate)
        const end_year = end.getFullYear()
        const end_date = end.toLocaleString('default', { month: 'short' })
            .concat(" ").concat(end.getFullYear())

        if(type==="work"){
            return (
                <li>
                    <h3>{exp.title}</h3>
                    <p>{exp.companyName}</p>
                    <p>{start_date} - {end_date} </p>
                    <p>{exp.location}</p>
                </li>
            )
        } else {
            return (
                <li>
                    <h3>{exp.companyName}</h3>
                    <p>{exp.title}</p>
                    <p>{start_year} - {end_year} </p>
                </li>
            )
            
        }

    }
}

export default ExpIndexItem;