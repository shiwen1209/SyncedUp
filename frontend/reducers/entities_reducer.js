import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import postsReducer from './post_reducer';
import commentsReducer from './comments_reducer';
import expReducer from './exp_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer,
    experiences: expReducer,
});

export default entitiesReducer;