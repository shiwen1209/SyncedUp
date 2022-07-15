import { connect } from "react-redux";
import ExpIndex from "./exp_index";
import { exp_selector } from "../../selectors/exp_selector"

const mstp = (state) => {
    // debugger
    return {
        experiences: exp_selector(state, "work")
    }
}

const mdtp = (dispatch) => {
    return {

    }
}

export default connect(mstp, mdtp)(ExpIndex)