import React from "react";
import { Link } from "react-router-dom";

class MessageView extends React.Component {

    componentDidMount() {
        const { fetchMessages , fetchUser} = this.props;
        fetchMessages(this.props.match.params.senderId)
        fetchUser(this.props.match.params.senderId)
    }

    componentDidUpdate(prevProp) {
        const { fetchMessages, fetchUser } = this.props;
        if (prevProp.match.params.senderId !== this.props.match.params.senderId){
            fetchMessages(this.props.match.params.senderId)
            fetchUser(this.props.match.params.senderId)
        }
    }

    render() {
        const { messages, sender, currentUserId } = this.props
        if(!messages || !sender){return}

        const msgList = messages.map((message, idx)=>{
            if (message.senderId === currentUserId){
                return(
                    <li key={idx} className="message-item-right">
                        <div>
                            <div className="connection-title">
                                <h3>{message.senderFirstname} {message.senderLastname}</h3>
                                <p>{message.content}</p>
                            </div>
                        </div>
                        <div className="img">
                            <img src={message.senderHeadshotUrl} alt="" />
                        </div>
                    </li>
                )
            } else {return(
                <li key={idx} className="message-item-left">
                    <div className="img">
                        <img src={message.senderHeadshotUrl} alt="" />
                    </div>
                    <div>
                        <div className="connection-title">
                            <h3>{message.senderFirstname} {message.senderLastname}</h3>
                            {/* <p>{message.content}</p> */}
                            <p>faskfjdsljfldskajfsjfklsdjflksdjflskjf asfjsldfjds afjlsdjfldksaj afjsdklj fajfdjslkfjs dafjskdljfsd afjsdkjfdas afdsklfj</p>
                        </div>
                    </div>
                </li>
            )}
        })

        return(
            <div id="message-view" className="component">
                <div className="headline-tag">
                    <div className="img">
                        <img src={sender.headshotUrl} alt="" />
                    </div>
                    <div className="connection-title">
                        <h3>{sender.firstName} {sender.lastName}</h3>
                        <h4>{sender.headline}</h4>
                    </div>
                </div>
                <div>
                    <ul>
                        {msgList}
                    </ul>
                </div>
                <div id="message-form">
                    message form
                </div>

            </div>

        )
    }

}

export default MessageView