import {connect } from "react-redux";
import People from "./people";
import {fetchPeople} from "../../actions/user_action";
import {createConnection} from "../../actions/connection_actions";


const mstp = (state)=>{
    // debugger
    return{
        people: Object.values(state.entities.people),
        currentUserId: state.session.id
    }
}

const mdtp = (dispatch)=>{
    // debugger
    return{
        fetchPeople: () => dispatch(fetchPeople()),
        createConnection: (connect) => dispatch(createConnection(connect))
    }

}

const PeopleContainer = connect(mstp, mdtp)(People)

export default PeopleContainer