import React from 'react';
import { createMessage, destroyMessage } from '../../util/message_api_util';

class Message extends React.Component {
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(messageId) {
        destroyMessage(messageId);
    }


    getFormattedTime(dateString) {
        const date = new Date(dateString);

        const now = new Date();
        const startOfDay = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate()
        ).getTime();

        const startOfYesterday = startOfDay - (1000 * 60 * 60 * 24);

        let formattedTime = date.toLocaleTimeString([], {
            timeStyle: 'short'
        });

        if (date.getTime() < startOfYesterday) {
            formattedTime = date.toDateString();
        } else if (date.getTime() < startOfDay) {
            formattedTime = `Yesterday at ${formattedTime}`;
        }

        return formattedTime;
    }

    render(){
        const { m, side } = this.props;

        const formattedTime = this.getFormattedTime(m.createdAt);
        if (side === "left") {
            return (
                <div className="message-item-left">
                    <div className="img">
                        <img src={m.senderHeadshotUrl} alt="" />
                    </div>
                    <div className="connection-title">
                        <div className="msg-title">
                            <div className="msg-sub-title">
                                <h3>{m.senderFirstName} {m.senderLastName}</h3>  &nbsp; <span className='message__timestamp'> | {formattedTime}</span>
                            </div>
                        </div>
                        <p className='msg-content'>{m.content}</p>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="message-item-right">
                    <div className="connection-title">
                        <div className="msg-title">
                            <div className="msg-sub-title">
                                <h3>{m.senderFirstName} {m.senderLastName}</h3>  &nbsp; <span className='message__timestamp'> | {formattedTime}</span>
                            </div>
                            <button
                                className='btn-delete'
                                onClick={() => this.handleDelete(m.id)}
                            >
                                <i className="fa-solid fa-trash-can"></i>
                            </button>
                        </div>
                        <p className='msg-content'>{m.content}</p>

                    </div>
                    <div className="img">
                        <img src={m.senderHeadshotUrl} alt="" />
                    </div>
                </div>
            );

        }

    }




}

    




export default Message;