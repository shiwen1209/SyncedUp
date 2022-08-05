import React from 'react';

const Message = ({ content, senderFirstName, senderLastName, createdAt, senderHeadshotUrl}) => {
    const formattedTime = getFormattedTime(createdAt);
    return (
        <div className='message'>
            <div className="img">
                <img src={senderHeadshotUrl} alt="" />
            </div>
            <div className="connection-title">
                <h3>{senderFirstName} {senderLastName}</h3>
                <p>{content}</p>
                <span className='message__timestamp'>{formattedTime}</span>
            </div>
             

        </div>
    );
};



// function getFormattedBody(content) {
//     return content;
// }

function getFormattedTime(dateString) {
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

export default Message;