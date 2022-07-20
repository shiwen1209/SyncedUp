import React from "react";
import CommentIndexContainer from "../comments/comment_index_container";
import { Link } from "react-router-dom";


class PostIndexItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            displayComments: false,
            displayButtons: false
        }
        this.toggleComments = this.toggleComments.bind(this);
        this.toggleButtons = this.toggleButtons.bind(this);
        this.handleLike = this.handleLike.bind(this);

    }

    toggleComments(e){
        if(this.state.displayComments){
            this.setState({ displayComments: false })
        } else {
            this.setState({ displayComments: true })
        }
    }

    toggleButtons(e) {
        if (this.state.displayButtons) {
            this.setState({ displayButtons: false })
        } else {
            this.setState({ displayButtons: true })
        }
    }

    handleLike(e){
        const {post, likes, currentUserId, createLike, deleteLike} = this.props
        const currentLike = { userId: currentUserId, likableId: post.id, likableType: 'Post'}
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
                <div id ="post-title" className="component-title" >
                    <div>
                        <Link to={`/users/${post.authorId}`}>
                            <div className="img">
                                <img src={post.authorHeadshotUrl} alt="" />
                            </div>
                        </Link>
                        <div className="headline-tag">
                            <Link to={`/users/${post.authorId}`}>
                                <div>
                                    <span>{post.authorFirstname} {post.authorLastname}</span>&nbsp;<span>({post.authorPronouns})</span>
                                </div>
                                <div>
                                    <p>{post.authorHeadline}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    {currentUserId === post.authorId ?
                        <div className="dropdown-container">
                            <div className="icon" onClick={this.toggleButtons}>
                                <i className="fa-solid fa-ellipsis" ></i>
                            </div>
                            {this.state.displayButtons ? 
                                <div className="dropdown-buttons" onClick={(e) => { this.setState({ displayButtons: false }) }}>
                                <div onClick={(e) => openModalPayload({ modal: 'updatePost', payload: post })}>
                                    <i className="fa-solid fa-pen"></i>
                                    <p>Edit Post</p>
                                </div>
                                <div onClick={(e) => deletePost(post.id)}>
                                    <i className="fa-solid fa-trash-can"></i>
                                    <p>Delete Post</p>
                                </div>
                            </div> : <div></div>
                            }
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