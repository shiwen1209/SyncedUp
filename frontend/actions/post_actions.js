import * as PostApiUtil from '../util/post_api_util';

export const RECEIVE_POST = "RECEIVE_POST";
export const DELETE_POST = "DELETE_POST";


export const receivePost = (post)=>({
    type: RECEIVE_POST,
    post
})

export const removePost = (postId)=>({
    type: DELETE_POST,
    postId
})

export const createPost = (postForm)=> dispatch => (
    PostApiUtil.createPost(postForm)
        .then((post)=>dispatch(receivePost(post)))
) 

export const updatePost = (postForm) => dispatch=>(
    PostApiUtil.updatePost(postForm)
        .then((post) => dispatch(receivePost(post)))
)

export const deletePost = (postId)=>dispatch=>(
    PostApiUtil.deletePost(postId)
        .then((post)=>dispatch(removePost(post.id)))

)