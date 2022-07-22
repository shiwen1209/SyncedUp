import { connect } from "react-redux";
import MessageIndex from "./message_index";
import { fetchSenders } from "../../actions/message_actions"

const mstp=(state)=>{
    return{
        currentUser: state.entities.users[state.session.id],
        senders: Object.values(state.entities.users).filter((user) => (user.id !== state.session.id))
    }
}

const mdtp = (dispatch) => {
    return {
        fetchSenders: () => dispatch(fetchSenders())
    }
}

export default connect(mstp, mdtp)(MessageIndex)