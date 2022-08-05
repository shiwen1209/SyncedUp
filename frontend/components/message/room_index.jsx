import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { createRoom, destroyRoom, fetchRooms } from '../../actions/room_actions';

class RoomsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '' };
        this.createRoom = this.createRoom.bind(this);
    }

    componentDidMount() {
        this.props.fetchRooms();
    }

    createRoom(e) {
        e.preventDefault();
        const { createRoom, currentUserId: ownerId } = this.props;
        createRoom({ owner_id: ownerId, name: this.state.name });
        this.setState({ name: '' });
    }

    render() {
        const { rooms, currentUserId, destroyRoom, users } = this.props;
        const msgList =  rooms.map(({id, owners}, idx) => {
            const otherOwners = owners.filter((ownerId) => (parseInt(ownerId) !== currentUserId))
            let user;

            const otherUsers = otherOwners.map((owner_id) =>{
                if (users[parseInt(owner_id)]){
                    return users[parseInt(owner_id)].firstName;
                } else {
                    return "";
                }
            }).join(", ");

            if (otherOwners.length === 1 && users[parseInt(otherOwners[0])]){
                user = users[parseInt(otherOwners[0])]
            } else {
                user = {
                    headshotUrl: "https://thumbs.dreamstime.com/b/teamwork-group-friends-logo-image-holding-each-other-39918563.jpg",
                    firstName: `Group chat with ${otherUsers}`,
                    headline: `You're in a group chart with ${otherUsers}`
                }
            }
            return(
                <NavLink key={idx} to={currentUserId ? `/messaging/${id}` : '/login'}>
                    <li key={idx} className="headline-tag">
                        <div className="img">
                            <img src={user.headshotUrl} alt="" />
                        </div>
                        <div className="connection-title">

                            <h3>{user.firstName} {user.lastName}</h3>

                            <h4>{user.headline}</h4>

                        </div>
                    </li>
                </NavLink>
                    
                )})

        return (

                <div id="sender-list" className="component" >
                    <div>
                        <h3>Messaging</h3>
                    </div>
                    <ul>
                        {msgList}
                    </ul>
                </div>
    

            // <section className='rooms-index-home-section'>
            //     <h1>Messaging</h1>
            //     <ul>
            //         {msgList}
            //     </ul>
            //     {!!currentUserId &&
            //         <form onSubmit={this.createRoom}>
            //             <input
            //                 type="text"
            //                 value={this.state.name}
            //                 onChange={e => this.setState({ name: e.target.value })}
            //             />
            //             <button className='btn-primary' disabled={!this.state.name}>
            //                 Create Room
            //             </button>
            //         </form>
            //     }
            // </section >
        );
    }
}

const mapState = state => {
    return {
        currentUserId: state.session.id,
        rooms: Object.values(state.entities.rooms),
        users: state.entities.users
    };
};


export default connect(mapState, {
    createRoom,
    destroyRoom,
    fetchRooms
})(RoomsIndex);