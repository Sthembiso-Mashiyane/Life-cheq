import counter from "./counter";
import isLogged from "./isLogged";
import lifeInsuranceReducer from "./lifeInsuranceReducer"
import {combineReducers} from "redux";

const allReducers = combineReducers({
    countReducer: counter,
    isLoggedReducer: isLogged,
    lifeInsurances: lifeInsuranceReducer
})


export default allReducers
