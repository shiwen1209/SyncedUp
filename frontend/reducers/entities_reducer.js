import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import postsReducer from './post_reducer';
import commentsReducer from './comments_reducer';
import expReducer from './exp_reducer';
import likesReducer from './likes_reducer';
import connectionsReducer from './connections_reducer';
import peopleReducer from './people_reducer';
import {messagesReducer} from './messages_reducer';
import { roomsReducer } from './room_reducer';
import profileUsersReducer from './profile_user_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer,
    experiences: expReducer,
    likes: likesReducer,
    connections: connectionsReducer,
    people: peopleReducer,
    messages: messagesReducer,
    rooms: roomsReducer,
    profileUser: profileUsersReducer
});

export default entitiesReducer;