import { ADD_ITEM} from '~d/actionTypes';

let initialState = {
    history: []
};

export default function (state = initialState, action) {
    switch(action.type) {
        case ADD_ITEM:
            if (state.history.length < 5) {
                return Object.assign({}, state, {
                    history: [...state.history, action.payload]
                });
            } else {
                state.history.shift();
                return Object.assign({}, state, {
                    history: [...state.history, action.payload]
                });
            }

        default:
            return state;
    }
}
