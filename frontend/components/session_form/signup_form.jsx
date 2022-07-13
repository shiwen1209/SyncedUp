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

        const errs = this.props.errors.map((err, idx)=>(
            <li key={idx}>{err}</li>
        ))

        return (
            <div>
                {this.props.formType === "signup" ?
                    <Link to="/login">Login</Link> :
                    <Link to="/signup">Sign Up</Link>
                }

                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/">Home</Link>

                <ul>{errs}</ul>

                <form onSubmit={this.handleSubmit}>
                    <label>Email:
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update("email")} />
                    </label>
                    <label>Password:
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update("password")} />
                    </label>
                    <label>First Name:
                        <input type="text"
                            value={this.state.first_name}
                            onChange={this.update("first_name")} />
                    </label>
                    <label>Last Name:
                        <input type="text"
                            value={this.state.last_name}
                            onChange={this.update("last_name")} />
                    </label>
                    <button>{this.props.formType}</button>
                </form>


            </div>
        )
    }
}

export default SignupForm