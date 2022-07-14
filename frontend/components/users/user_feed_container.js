import { connect} from "react-redux";
import UserFeed from "./user_feed";
import {fetchUser} from "../../actions/session_actions";



const mstp = (state, ownProps)=>{
    return {
        user: state.entities.users[state.session.id],
        posts: Object.values(state.entities.posts).sort(((b, a) => a.id - b.id))
    }
}

const mdtp = (dispatch)=>{
    return {
        fetchUser: (id)=>dispatch(fetchUser(id))
    }
}

const UserFeedContainer = connect(mstp, mdtp)(UserFeed);

export default UserFeedContainer;