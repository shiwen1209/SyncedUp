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
        return (
            <nav>
                <Link id="logo" to="/"><span className="logo">Synced</span><span className="logo" id="up">up</span></Link> 

                
                {this.props.currentUser ?
                    <div>
                        <h1>Welcome, {this.props.currentUser.firstName}</h1>
                        &nbsp;&nbsp;
                        <button class="session-button" onClick={this.handleClick}>logout</button>
                    </div> :

                    <div>
                        <Link to="/signup" id="join-now">Join now</Link>
                        &nbsp;&nbsp;
                        <Link to="/login" id="sign-in">Sign in</Link>
                    </div>
                }
            </nav>

        )
    }
}
export default Nav;