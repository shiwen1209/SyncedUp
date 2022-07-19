import React from "react";
import { Link } from "react-router-dom";

class PeopleItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            connect: false
        }
        this.handleClickConnect = this.handleClickConnect.bind(this)
    }


    handleClickConnect(e) {
        this.setState({ connect: true })
        const { currentUserId, person, createConnection } = this.props;
        const con1 = {"user1_id": currentUserId, "user2_id": person.id};
        const con2 = {"user1_id": person.id, "user2_id": currentUserId};
        createConnection(con1);
        createConnection(con2);
    }

    render(){
        const {person} = this.props
        return(
            <li>
                <Link to={`/users/${person.id}`}>
                    <div className="img">
                        img
                    </div>
                </Link>
                <div className="connection-detail">
                    <div className="connection-title">
                        <Link to={`/users/${person.id}`}>
                            <h3>{person.firstName} {person.lastName}</h3>
                        </Link>
                        <Link to={`/users/${person.id}`}>
                            <h4>{person.headline}</h4>
                        </Link>
                    </div>
                    <div>
                        {this.state.connect ? 
                            <button disabled>Connected</button>:
                            <button onClick={this.handleClickConnect}>Connect</button>
                        }
                        
                    </div>
                </div>
            </li>
        )
    }
}

export default PeopleItem