import { connect } from "react-redux";
import MyNetwork from "./my_network";
import {fetchConnections, createConnection, deleteConnection } from "../../actions/connection_actions";
import { createRoom, fetchRoomsNoUsers } from '../../actions/room_actions';


const mstp = (state)=>{
    return{
        connections: Object.values(state.entities.connections).sort(((b, a) => a.connectionId - b.connectionId))
            .filter((obj)=>obj.id !== state.session.id), 
            // temporary solution, need to figure out how to remove session user 
            //self from connection state when creating a pair of connections
        user: state.session.user // need to get current user
    }
}

const mdtp = (dispatch)=>{
    return{
        fetchConnections: (userId) => dispatch(fetchConnections(userId)),
        createConnection: (connect) => dispatch(createConnection(connect)),
        deleteConnection: (connectId) => dispatch(deleteConnection(connectId)),
        createRoom: (room) => dispatch(createRoom(room)),
        fetchRoomsNoUsers: () => dispatch(fetchRoomsNoUsers()),
    }

}

const MyNetworkContainer = connect(mstp, mdtp)(MyNetwork)

export default MyNetworkContainer