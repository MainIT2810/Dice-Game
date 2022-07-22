import {combineReducers} from "redux";
import DiceGameReducer from "./DiceGameReducer"
const rootReducer = combineReducers({ //store tổng của ứng dụng
    DiceGameReducer
});

export default rootReducer;