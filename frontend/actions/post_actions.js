import * as PostApiUtil from '../util/post_api_util';

export const RECEIVE_POST = "RECEIVE_POST";
export const DELETE_POST = "DELETE_POST";


export const receivePost = (post)=>{
    return {
    type: RECEIVE_POST,
    post
}}

export const removePost = (postId)=>{
    return {
    type: DELETE_POST,
    postId
}}

export const createPost = (postForm)=> dispatch => (
    PostApiUtil.createPost(postForm).then((payload)=>dispatch(receivePost(payload.post)))
)

export const updatePost = (postForm, postId) => dispatch=>(
    PostApiUtil.updatePost(postForm, postId)
        .then((payload) => {
            return dispatch(receivePost(payload.post))})
)

export const deletePost = (postId)=>dispatch=>(
    PostApiUtil.deletePost(postId)
        .then((payload) => {
            return dispatch(removePost(payload.post.id))})
)