import React from "react";
import PeopleItem from "./people_item";
import { Link } from "react-router-dom";

class People extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchPeople()
    }

    render(){
        const { people, currentUserId, createConnection } = this.props
        const peopleList = people.map((person, idx) => (<PeopleItem 
            key={idx} person={person} currentUserId={currentUserId}
            createConnection={createConnection}/>))

        if (!people) {return}
        return(
            <div id="my-network">
                <div className="component">
                    <Link to="/mynetwork/people">
                        People you may know
                    </Link>
                    <br />
                    <Link to="/mynetwork">
                        Your connections
                    </Link>
                </div>
                <div className="component">
                    <div>
                        <p>Recommended for you</p>
                        <p>Search bar</p>
                    </div>
                    <ul>
                        {peopleList}
                    </ul>
                </div>
                
            </div>
        )
    }
}

export default People;