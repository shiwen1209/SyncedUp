import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';

class MyNetworkItem extends React.Component {
    constructor(props){
        super(props);
        this.handleClickDisconnect = this.handleClickDisconnect.bind(this);
        this.createRoom = this.createRoom.bind(this)
    }

    handleClickDisconnect(e) {
        const { connection, deleteConnection, minusConnection, currentUserId} = this.props;
        const conId1 = connection.connectionId;
        const conId2 = connection.mirrorConnectionId;
        deleteConnection(conId1).then(deleteConnection(conId2)).then(minusConnection(currentUserId, connection.id));
    }

    createRoom(e) {
        e.preventDefault();
        const { createRoom, currentUserId, connection, rooms } = this.props;
        const userRoom = rooms.filter((room) => {
            return this.arrayEqual(room.owners, [currentUserId.toString(), connection.id.toString()])
        })
        if (userRoom.length === 1) {
            this.props.history.push(`/messaging/${userRoom[0].id}`);
        } else if (userRoom.length === 0) {
            createRoom({ owners: [currentUserId, connection.id] })
                .then(() => (this.createRoom(e)))
        } else {
            alert("error, please contact developer")
        }
    }

    arrayEqual(arr1, arr2) {
        for (let i = 0; i < arr1.length; i++) {
            if (!arr2.includes(arr1[i])) {
                return false
            }
        }
        for (let i = 0; i < arr2.length; i++) {
            if (!arr1.includes(arr2[i])) {
                return false
            }
        }
        return true
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
                        <button onClick={this.createRoom}>Message</button>
                        <button onClick={this.handleClickDisconnect}>Disconnect</button>
                    </div>
                </div>
            </li>
        )
    }
}

export default withRouter(MyNetworkItem);