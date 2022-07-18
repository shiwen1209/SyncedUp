import React from "react";
import MyNetworkItem from "./my_network_item";
import { Link } from "react-router-dom";

class MyNetwork extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchConnections(this.props.user.id)
    }

    render(){
        const {user, connections, deleteConnection} = this.props
        const conList = connections.map((connection, idx) => (<MyNetworkItem 
            key={idx} connection={connection} deleteConnection={deleteConnection}/>))

        if (!user) {return}
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
                        <h3>{user.numConnections} Connections</h3>
                        <p>Search bar</p>
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