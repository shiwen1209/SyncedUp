import { connect} from "react-redux";
import UserFeed from "./user_feed";
import {fetchUser} from "../../actions/session_actions";
import { removePosts } from "../../actions/post_actions";
import { removeLikes } from "../../actions/like_actions";
import { removeComments } from "../../actions/comment_actions";



const mstp = (state, ownProps)=>{
    return {
        user: state.session.user,
        posts: Object.values(state.entities.posts).sort(((b, a) => a.id - b.id))
    }
}

const mdtp = (dispatch)=>{
    return {
        fetchUser: (id)=>dispatch(fetchUser(id)),
        removePosts: () => dispatch(removePosts()),
        removeComments: () => dispatch(removeComments()),
        removeLikes: () => dispatch(removeLikes())
    }
}

const UserFeedContainer = connect(mstp, mdtp)(UserFeed);

export default UserFeedContainer;