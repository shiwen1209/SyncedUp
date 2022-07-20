import React from "react";

class ExpIndexItem extends React.Component{

    render(){
        const { exp, exp_type, editState, openModalPayload } = this.props
        const start = new Date(exp.startDate)
        const start_year = start.getFullYear()
        const start_date = start.toLocaleString('default', { month: 'short' })
            .concat(" ").concat(start.getFullYear())
        const end = new Date(exp.endDate)
        const end_year = end.getFullYear()
        const end_date = end.toLocaleString('default', { month: 'short' })
            .concat(" ").concat(end.getFullYear())

        if(exp_type==="work"){
            return (
                <li>
                    <div className="component-subtitle">
                        <h3>{exp.title}</h3>

                        {editState ? 
                        <div className="icon" onClick={(e) => openModalPayload({ modal: 'updateExp', payload: exp })}>
                            <i className="fa-solid fa-pen"></i>
                        </div> : <div></div>}
                    </div>
                    <div className="component-body">
                        <p>{exp.companyName}</p>
                        <p>{start_date} - {end_date} </p>
                        <p>{exp.location}</p>
                    </div>

                </li>
            )
        } else {
            return (
                <li>
                    <div className="component-subtitle">
                        <h3>{exp.companyName}</h3>
                        {editState ? 
                        <div className="icon" onClick={(e) => openModalPayload({ modal: 'updateExp', payload: exp })}>
                        <i className="fa-solid fa-pen"></i> 
                        </div>: <div></div>}
                    </div>
                    <div className="component-body">
                        <p>{exp.title}</p>
                        <p>{start_year} - {end_year} </p>
                    </div>

                </li>
            )
            
        }

    }
}

export default ExpIndexItem;