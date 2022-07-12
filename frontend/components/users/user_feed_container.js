import { connect} from "react-redux";
import UserFeed from "./user_feed";
import {fetchUser} from "../../actions/session_actions";
import { createPost } from "../../actions/post_actions";


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
        fetchUser: (id)=>dispatch(fetchUser(id)),
        createPost: (postForm)=>dispatch(createPost(postForm))
    }
}

const UserFeedContainer = connect(mstp, mdtp)(UserFeed);

export default UserFeedContainer;