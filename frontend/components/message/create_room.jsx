import React from 'react';


class CreateRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.fetchConnections(this.props.currentUserId)
    }

    handleSubmit(){

    }

    render() {

        return (
            <div id="message-view" className="component">
                <div className="headline-tag">
                    <h3>New message</h3>
                    <div className="connection-title">
                        <input type="text" />
                    </div>
                </div>
                <div>
                    <div className="img">
                        <p>headshot</p>
                    </div>
                    <div className="connection-title">
                        <h3>first and last name</h3>
                        <h4>headline</h4>
                    </div>
                </div>
                <div id="message-form">
                    <textarea
                        rows={this.state.content.split('\n').length}
                        onChange={e => this.setState({ content: e.target.value })}
                        onKeyDown={e => {
                            if (e.code === 'Enter' && !e.shiftKey) {
                                this.handleSubmit(e);
                            }
                        }}
                        value={this.state.content}
                    />
                    <div className='message-controls'>
                        <button className='btn-primary' disabled={!this.state.content}
                            onClick={this.handleSubmit}>
                            Send
                        </button>
                    </div>
                </div>

            </div>

        );
    }
};

export default CreateRoom;
