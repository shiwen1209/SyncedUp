import React from "react";
import { Link } from "react-router-dom";

class SearchResultItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {person} = this.props
        return (
            <Link to={`/users/${person.id}`}>
            <li>
                <div>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <p>{person.firstName} {person.lastName}</p>
                </div>
                <div className="img">
                    img
                </div>
            </li>
            </Link>
        )

    }
}

export default SearchResultItem