export const selectPostComments = (state, post_id) => {
   const allComments = Object.values(state.entities.comments)
   const filteredComments = allComments.filter((comment)=>comment.postId === post_id)
   return filteredComments
}

window.selectPostComments = selectPostComments