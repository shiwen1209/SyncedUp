import { connect} from "react-redux";
import UserFeed from "./user_feed";
import {fetchUser} from "../../actions/session_actions";



const mstp = (state, ownProps)=>{
    console.log("mstp")
    console.log(state.entities.users)
    return {
        users: state.entities.users[state.session.id],
        posts: Object.values(state.entities.posts)
    }
}

const mdtp = (dispatch)=>{
    return {
        fetchUser: (id)=>dispatch(fetchUser(id))
    }
}

const UserFeedContainer = connect(mstp, mdtp)(UserFeed);

export default UserFeedContainer;