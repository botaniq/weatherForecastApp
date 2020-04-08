import { UPDATE_CITY} from '~d/actionTypes';

let initialState = {
    city: 'Kyiv'
};

export default function (state = initialState, action) {
    switch(action.type) {
        case UPDATE_CITY:
            return Object.assign({}, state, {
                city: action.payload
            });
        default:
            return state;
    }
}
