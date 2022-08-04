// import React from "react";
// import { Link } from "react-router-dom";
// import MessageViewContainer from "./message_view_container";
// import { Route } from 'react-router-dom';

// class MessageIndex extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             senderId: null
//         }
//     }

//     componentDidMount(){
//         this.props.fetchSenders()
//     }

//     render(){
//         const {currentUser, senders} = this.props
//         if (!senders){return}
//         const sendersList = senders.map((user, idx)=>(

//             <Link key={idx} to={`/messaging/${user.id}`}>
//                 <li key={idx} className="headline-tag">
//                     <div className="img">
//                         <img src={user.headshotUrl} alt="" />
//                     </div>
//                     <div className="connection-title">

//                         <h3>{user.firstName} {user.lastName}</h3>

//                         <h4>{user.headline}</h4>

//                     </div>
//                 </li>
//             </Link>


//         ))

//         return(
//             <div id="message-index" >
//                 <div id="sender-list" className="component" >
//                     <div>
//                         <h3>Messaging</h3>
//                     </div>
//                     <ul>
//                         {sendersList}
//                     </ul>
//                 </div>
//                 <Route path={`/messaging/:senderId`} component={MessageViewContainer} />
//             </div>
//         )
//     }
// }

// export default MessageIndex