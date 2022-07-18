import { connect } from "react-redux";
import MyNetwork from "./my_network";
import {fetchConnections, createConnection, deleteConnection } from "../../actions/connection_actions";


const mstp = (state)=>{
    return{
        connections: Object.values(state.entities.connections)
            .filter((obj)=>obj.id !== state.session.id), 
            // temporary solution, need to figure out how to remove session user 
            //self from connection state when creating a pair of connections
        user: state.entities.users[state.session.id] // need to get current user
    }
}

const mdtp = (dispatch)=>{
    return{
        fetchConnections: (userId) => dispatch(fetchConnections(userId)),
        createConnection: (connect) => dispatch(createConnection(connect)),
        deleteConnection: (connectId) => dispatch(deleteConnection(connectId))
    }

}

const MyNetworkContainer = connect(mstp, mdtp)(MyNetwork)

export default MyNetworkContainer