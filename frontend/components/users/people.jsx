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
        const { people, currentUserId, createConnection, addConnection } = this.props
        const peopleList = people.map((person, idx) => (<PeopleItem 
            key={idx} 
            person={person} 
            currentUserId={currentUserId}
            createConnection={createConnection}
            addConnection={addConnection}
            type="profile-page"
            />))

        if (!people) {return}
        return(
            <div id="my-network">
                <div className="component">
                    <div className="component-title">
                        <h3>Manage your network</h3>
                    </div>
                    <div className="component-subtitle">
                        <Link className="link" to="/mynetwork">
                            <i className="fa-solid fa-user-group"></i>
                            <h3>Your connections</h3>
                        </Link>
                    </div>
                    <div id="highlight" className="component-subtitle">
                        <Link className="link" to="/mynetwork/people">
                            <i className="fa-solid fa-user-pen"></i>
                            <h3>People you may know</h3>
                        </Link>
                    </div>
                    <div className="component-subtitle">
                        <div className="link">
                            <i className="fa-solid fa-user-pen"></i>
                            <h3>Contacts</h3>
                        </div>
                    </div>
                    <div className="component-subtitle">
                        <div className="link">
                            <i className="fa-solid fa-user-pen"></i>
                            <h3>Groups</h3>
                        </div>
                    </div>
                    <div className="component-subtitle">
                        <div className="link">
                            <i className="fa-solid fa-user-pen"></i>
                            <h3>News</h3>
                        </div>
                    </div>
                </div>
                <div className="component">
                    <div>
                        <div className="component-title">
                            <h3>People to follow</h3>
                        </div>
                        <div className="component-subtitle">
                            <p>Recommended for you</p>
                        </div>
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