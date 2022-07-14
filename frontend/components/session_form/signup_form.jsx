import React from "react";
import { Link } from "react-router-dom";

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            first_name: "",
            last_name: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state).then(this.props.closeModal)
    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value })
    }


    render() {
        let errs;
        if (this.props.errors.length > 0) {
            errs = this.props.errors.map((err, idx) => (
                <li key={idx}>{err}</li>
            ))
        } else {
            errs = <div></div>
        }


        return (
            <div className="session-form">

                <h1>Sync up with all your coworkers</h1>
                
                {/* &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/">Home</Link> */}
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label className="session-label">Email
                            <input className="session-box" type="text"
                                value={this.state.email}
                                onChange={this.update("email")} />
                        </label>
                        <label className="session-label">Password
                            <input className="session-box" type="password"
                                value={this.state.password}
                                onChange={this.update("password")} />
                        </label>
                        <label className="session-label">First name
                            <input className="session-box" type="text"
                                value={this.state.first_name}
                                onChange={this.update("first_name")} />
                        </label >
                        <label className="session-label">Last name
                            <input className="session-box" type="text"
                                value={this.state.last_name}
                                onChange={this.update("last_name")} />
                        </label>
                        <p>By clicking Agree & Join, you agree to the Syncedup Agreement and Policy</p>
                        <button className="session-button">Agree and Join</button>
                    </form>

                    <ul>{errs}</ul>

                    


                    <div>
                        <span>Already on Syncedup?</span>&nbsp;<Link className="link" to="/login">Sign in</Link>
                    </div>

                </div>

            </div>
        )
    }
}

export default SignupForm