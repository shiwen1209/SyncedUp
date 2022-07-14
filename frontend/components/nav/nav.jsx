import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        console.log("logout button clicked")
        this.props.logout()
    }

    render() {
        if(this.props.currentUser){
            return (
                <nav>
                    <div>
                        <Link id="logo" to="/"><span className="logo" id="up">up</span></Link>
                        <input className="comment-button" type="text" value="search" />
                    </div>
                    <div>
                        <div className="icon">
                            <i class="fa-solid fa-house"></i>
                            <span>Home</span>
                        </div>
                        <div className="icon">
                            <i class="fa-solid fa-circle-user"></i>
                            <span>My profile</span>
                        </div >
                        <div className="icon">
                            <i class="fa-solid fa-user-group"></i>
                            <span>My network</span>
                        </div>

                        <div className="icon">
                            <i class="fa-solid fa-comment-dots"></i>
                            <span>messaging</span>
                        </div>
                        <div className="icon" onClick={this.handleClick}>
                            <i class="fa-solid fa-right-from-bracket"></i>
                            <span>Logout</span>
                        </div>
                    </div>
                </nav>
            )
        } else {
            return(
                <nav>
                    <Link id="logo" to="/"><span className="logo">Synced</span><span className="logo" id="up">up</span></Link>
                    <div>
                        <Link to="/signup" id="join-now">Join now</Link>
                        &nbsp;&nbsp;
                        <Link to="/login" id="sign-in">Sign in</Link>
                    </div>
                </nav>
                
            )
        }

    }
}
export default Nav;