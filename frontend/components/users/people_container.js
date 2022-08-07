import {connect } from "react-redux";
import People from "./people";
import {fetchPeople} from "../../actions/user_action";
import { createConnection, addConnection } from "../../actions/connection_actions";
import { peopleSelector } from "../../selectors/people_selector";


const mstp = (state)=>{
    return{
        people: peopleSelector(state),
        currentUserId: state.session.id
    }
}

const mdtp = (dispatch)=>{
    return{
        fetchPeople: () => dispatch(fetchPeople()),
        createConnection: (connect) => dispatch(createConnection(connect)),
        addConnection: (currentUserId, otherUserId) => dispatch(addConnection(currentUserId, otherUserId))
    }

}

const PeopleContainer = connect(mstp, mdtp)(People)

export default PeopleContainer