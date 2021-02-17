import { Reducer } from "redux";
import { Repository, ActionTypes } from "./types";

const reducer: Reducer<Repository[]> = (state = [], actions) => {
    switch (actions.type) {
        case ActionTypes.ADD_REPOSITORY:
            return [ ...state, actions.payload ];

        default:
            return state;
    }
}

export default reducer;