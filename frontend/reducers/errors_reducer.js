import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import expErrorsReducer from "./exp_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    experience: expErrorsReducer
});

export default errorsReducer;