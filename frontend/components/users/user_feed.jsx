import React from "react";
import PostIndexContainer from "../posts/post_index_container";
import { Link } from "react-router-dom";

class UserFeed extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchUser(this.props.user.id)
    }

    componentWillUnmount(){
        this.props.removeLikes();
        this.props.removeComments();
        this.props.removePosts();
    }

    render(){
        const {user, posts} = this.props
        return(
            <div id="user-feed">
                <div id="user-feed-profile">
                    <div id="user-feed-profile-summary" className="component">
                        <div id="user-profile-backgroundpic">
                            <img id="background-image" src={window.userbgUrl} alt="" />
                        </div>
                        <div>
                            <Link to={`/users/${user.id}`}>
                                <div className="img">
                                    <img src={user.headshotUrl} alt="headshot" />
                                </div>
                            </Link>
                            <Link to={`/users/${user.id}`}>
                                <h1 className="text-link">{user.firstName} {user.lastName}</h1>
                            </Link>
                                <h2>{user.headline}</h2>
                                <p>{user.locationCity}{user.locationCity && (user.locationState || user.locationCountry) ? ", " : ""}
                                    {user.locationState}{user.locationState && (user.locationCountry) ? ", " : ""}
                                    {user.locationCountry}
                                </p>
                                <br /> 
                                <Link to='/mynetwork' className="link"> 
                                    <h3>{user.numConnections} connections</h3>
                                </Link>
                        </div>
                       
                    </div>
                    <div id= "tags" className="component">
                        <h3>Followed hashtags</h3>
                        <p>&nbsp;#technology</p>
                        <p>&nbsp;#market</p>
                        <p>&nbsp;#futurism</p>
                    </div >
                </div>

                <div id="user-feed-posts">
                    <PostIndexContainer posts={posts} />
                </div>
         
                <div id="user-feed-other">
                    <div className="component">
                        <div className="header">
                            <h3>About the developer</h3>
                        </div>
                        <div className="img">
                            <img src={window.wendyUrl} alt="headshot" />
                        </div>
                        <p>
                            Wendy Shi is a full stack software engineer who's proficient in Javascript, Python, React.js, Redux.js, Ruby and Ruby on Rails. She's currently looking for  opportunities to work as a full-stack, front-end or back-end software engineer
                        </p>
                        <h3>Connect with the developer</h3>
                        <div className="icons">
                            <a href="https://www.linkedin.com/in/wendy-shi/" target="_blank">
                                <div className="icon">
                                    <i className="fa-brands fa-linkedin"></i>
                                
                                </div>
                            </a>
                            <a href="https://github.com/shiwen1209" target="_blank">
                                <div className="icon">    
                                    <i className="fa-brands fa-github"></i>
                                </div>
                            </a>
                            <a href="https://angel.co/u/wendy-shi" target="_blank">
                                <div className="icon">
                                    <i className="fa-brands fa-angellist"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="component">
                        <div className="header">
                            <h3>About the project</h3>
                        </div>

                        <p>
                           SyncedUp is a fullstack clone of a profesional social medial web platform LinkedIn
                        </p>
                        <div>
                            <h3>Technologies Used</h3>
                            <p>JavaScript, React, Redux, Python, Ruby, Rails, SQL, AWS S3, MongoDB, WebSockets, HTML, CSS3</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default UserFeed;