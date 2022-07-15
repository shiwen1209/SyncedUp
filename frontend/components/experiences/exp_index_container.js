import { connect } from "react-redux";
import ExpIndex from "./exp_index";
import { exp_selector } from "../../selectors/exp_selector"

const mstp = (state) => {
    return {
        experiences: exp_selector(state, "work"),
        exp_type: "work"
    }
}

const mdtp = (dispatch) => {
    return {

    }
}

export default connect(mstp, mdtp)(ExpIndex)