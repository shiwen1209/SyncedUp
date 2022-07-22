import { connect } from "react-redux";
import MessageView from "./message_view";
import { fetchMessages } from "../../actions/message_actions";
import {fetchUser} from "../../actions/user_action";

const mstp = (state, ownProps) => {
    return {
        currentUserId: state.session.id,
        sender: state.entities.users[ownProps.match.params.senderId],
        messages: Object.values(state.entities.messages).sort(((a, b) => a.id - b.id))
    }
}

const mdtp = (dispatch) => {
    return {
        fetchMessages: (senderId) => dispatch(fetchMessages(senderId)),
        fetchUser: (userId) => dispatch(fetchUser(userId))
    }
}

export default connect(mstp, mdtp)(MessageView)