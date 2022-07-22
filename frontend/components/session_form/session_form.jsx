import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSubmitDemo = this.handleSubmitDemo.bind(this)
    }

    componentWillUnmount(){
        this.props.clearErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
    }

    handleSubmitDemo(e) {
        e.preventDefault();
        this.props.processForm({
            email: "banana",
            password: "123456"})
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
                <h1>Welcome back</h1>
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
                    <br />
                        <button className="session-button" >Sign in</button>
                        
                </form>
                    <button onClick={this.handleSubmitDemo}
                    className="session-button" >Demo Sign in</button>

                <ul className="error-list">{errs}</ul>

                <div>
                    <span>New to Syncedup?</span>&nbsp;<Link className="link" to="/signup">Join now</Link>
                </div>
                </div>

            </div>
        )
    }
}

export default SessionForm