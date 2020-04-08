import { UPDATE_CITY_VALUE, UPDATE_PERIOD_VALUE, SET_WEATHER, UPDATE_SUCCESS_FETCH, SET_TEMPERATURE } from '~d/actionTypes';

let initialState = {
    weather: [],
    temperature: [],
    successFetch: false,
    city: 'Kyiv',
    period: '1'
};

function reducers(state = initialState, action) {
    switch(action.type) {
        case UPDATE_CITY_VALUE:
            return Object.assign({}, state, {
                city: action.payload
            });
        case UPDATE_PERIOD_VALUE:
            return Object.assign({}, state, {
                period: action.payload
            });
        case SET_WEATHER:
            return Object.assign({}, state, {
                weather: action.payload
            });
        case UPDATE_SUCCESS_FETCH:
            return Object.assign({}, state, {
                successFetch: action.payload
            });
        case SET_TEMPERATURE:
            return Object.assign({}, state, {
                temperature: action.payload
            });
        default:
            return state;
    }
}

export default reducers;
