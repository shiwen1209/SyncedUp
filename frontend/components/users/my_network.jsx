import React from "react";
import MyNetworkItemContainer from "./my_network_item_container";
import { Link } from "react-router-dom";

class MyNetwork extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchConnections(this.props.user.id);
        this.props.fetchRoomsNoUsers();
    }

    render(){
        const {user, connections} = this.props
        const conList = connections.map((connection, idx) => (<MyNetworkItemContainer 
            key={idx} connection={connection}/>))

        if (!user) {return}
        return(
            <div id="my-network">
                <div className="component">
                    <div className="component-title">
                        <h3>Manage your network</h3>
                    </div>
                    <div id="highlight" className="component-subtitle">
                        <Link className="link" to="/mynetwork">
                            <i className="fa-solid fa-user-group"></i>
                            <h3>My connections</h3>
                        </Link>
                    </div>
                    <div className="component-subtitle">
                        <Link className="link" to="/mynetwork/people">
                            <i className="fa-solid fa-user-pen"></i>
                            <h3>People on Syncedup</h3>
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
                            <h3>{user.numConnections} Connections</h3>
                        </div>
                        <div className="component-subtitle">
                            <p>Sorted by: Recently added</p>
                        </div>
                    </div>
                    <ul>
                        {conList}
                    </ul>
                </div>
                
            </div>
        )
    }
}

export default MyNetwork;