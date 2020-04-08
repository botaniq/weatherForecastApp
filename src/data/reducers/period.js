import { UPDATE_PERIOD, UPDATE_SUCCESS_FETCH, SET_WEATHER, SET_TEMPERATURE } from '~d/actionTypes';

let initialState = {
    period: 1,
    successFetch: false,
    weather: [],
    temperature: []
};

export default function (state = initialState, action) {
    switch(action.type) {
        case UPDATE_PERIOD:
            return Object.assign({}, state, {
                period: action.payload
            });
        case UPDATE_SUCCESS_FETCH:
            return Object.assign({}, state, {
                successFetch: action.payload
            });
        case SET_WEATHER:
            return Object.assign({}, state, {
                weather: action.payload
            });
        case SET_TEMPERATURE:
            return Object.assign({}, state, {
                temperature: action.payload
            });
        default:
            return state;
    }
}
