import { connect } from "react-redux";
import ExpIndex from "./exp_index";
import { exp_selector } from "../../selectors/exp_selector";
import { openModalPayload } from '../../actions/modal_actions';

const mstp = (state) => {
    return {
        experiences: exp_selector(state, "work"),
        exp_type: "work"
    }
}

const mdtp = (dispatch) => {
    return {
        openModalPayload: (obj) => dispatch(openModalPayload(obj))
    }
}

export default connect(mstp, mdtp)(ExpIndex)