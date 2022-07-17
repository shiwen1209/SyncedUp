import React from "react";
import CommentIndexContainer from "../comments/comment_index_container";
import { Link } from "react-router-dom";


class PostIndexItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            displayComments: false
        }
        this.toggleComments = this.toggleComments.bind(this)
        this.handleLike = this.handleLike.bind(this)
    }

    toggleComments(e){
        if(this.state.displayComments){
            this.setState({ displayComments: false })
        } else {
            this.setState({ displayComments: true })
        }
    }

    handleLike(e){
        const {post, likes, currentUserId, createLike, deleteLike} = this.props
        const currentLike = { userId: currentUserId, likableId: post.id, likableType: 'Post'}
        // debugger
        if (JSON.stringify(currentLike) in likes){
            const likeId = likes[JSON.stringify(currentLike)]
            deleteLike(likeId)
        } else {
            const likeForm = { user_id: currentUserId, likable_id: post.id, likable_type: 'Post' }
            createLike(likeForm)
        }
    }

    render(){
        const { post, currentUserId, deletePost, openModalPayload} = this.props
        return (
            <li className="component" id="post">
                <div className="component-title" >
                    <div>
                        <Link to={`/users/${post.authorId}`}>
                            <div className="img">
                                img
                            </div>
                        </Link>
                        <div className="headline-tag">
                            <Link to={`/users/${post.authorId}`}>
                                <div>
                                    <span>{post.authorFirstname} {post.authorLastname}</span><span>({post.authorPronouns})</span>
                                </div>
                                <div>
                                    <p>{post.authorHeadline}</p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {currentUserId === post.authorId ?
                        <div>
                            <button onClick={(e) => deletePost(post.id)}>
                                Delete Post</button>
                            <button onClick={(e) => openModalPayload({ modal: 'updatePost', payload: post })}>
                                Edit Post
                            </button>
                        </div> :
                        <div></div>
                    }
                </div>


                <div className="component-body">
                    <p>{post.body}</p>
                </div>

                {post.numLikes > 0 || post.numComments > 0 ?
                    < div className="post-like-comment">
                        {post.numLikes > 0 ?
                            < div >
                                <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                                <p>{post.numLikes}</p>
                            </div> : <div>{" "}</div>
                        }
                        {post.numComments > 0 ?
                            <p onClick={this.toggleComments}>
                                {post.numComments} comments
                            </p> : <div>{" "}</div>
                        }
                    </div> : <div></div>
                }

                <div className="like-comment-button">
                    <div onClick={this.handleLike}>
                        <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                        <p>Like</p>
                    </div>
                    <div onClick={this.toggleComments}>
                        <i className="fa fa-commenting-o" aria-hidden="true"></i>
                        <p>Comment</p>
                    </div>
                </div>


                {this.state.displayComments ?
                    <div>
                        <CommentIndexContainer post={post}/>
                    </div> :
                    <div></div>
                }

            </li>
        )
    }

}




export default PostIndexItem