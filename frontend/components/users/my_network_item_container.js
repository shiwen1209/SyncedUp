import { connect } from "react-redux";
import MyNetworkItem from "./my_network_item";
import { createRoom, fetchRoomsNoUsers } from '../../actions/room_actions';
import {deleteConnection } from "../../actions/connection_actions";


const mstp = (state) => {
    return {
        currentUserId: state.session.id,
        rooms: Object.values(state.entities.rooms)
    }
}

const mdtp = (dispatch) => {
    return {
        createRoom: (room) => dispatch(createRoom(room)),
        fetchRoomsNoUsers: () => dispatch(fetchRoomsNoUsers()),
        deleteConnection: (connectId) => dispatch(deleteConnection(connectId))
    }
}

const MyNetworkItemContainer = connect(mstp, mdtp)(MyNetworkItem)

export default MyNetworkItemContainer