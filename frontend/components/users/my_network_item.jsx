import React from "react";
import { Link } from "react-router-dom";

class MyNetworkItem extends React.Component {
    constructor(props){
        super(props);
        this.handleClickDisconnect = this.handleClickDisconnect.bind(this)
    }

    handleClickDisconnect(e) {
        const {connection, deleteConnection } = this.props;
        const conId1 = connection.connectionId;
        const conId2 = connection.mirrorConnectionId;
        deleteConnection(conId1);
        deleteConnection(conId2);
    }

    render(){
        const {connection} = this.props
        const today=new Date()
        const condate = new Date(connection.connectedAt)
        const timeDiff = today - condate
        let time;
        if(timeDiff/1000/60/60 < 24){
            time = "less than 1 day"
        } else if (timeDiff / 1000 / 60 / 60 / 24){
            let days = Math.round(timeDiff / 1000 / 60 / 60 / 24);
            time = `${days} days`
        }
        return(
            <li>
                <Link to={`/users/${connection.id}`}>
                    <div className="img">
                        <img src={connection.headshotUrl} alt="" />
                    </div>
                </Link>
                <div className="connection-detail">
                    <div className="connection-title">
                        <Link to={`/users/${connection.id}`}>
                            <h3>{connection.firstName} {connection.lastName}</h3>
                        </Link>
                        <Link to={`/users/${connection.id}`}>
                            <h4>{connection.headline}</h4>
                        </Link>
                        <p>Connected {time} ago</p>
                    </div>
                    <div>
                        <button>Message</button>
                        <button onClick={this.handleClickDisconnect}>Disconnect</button>
                    </div>
                </div>
            </li>
        )
    }
}

export default MyNetworkItem