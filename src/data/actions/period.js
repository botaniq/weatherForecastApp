import { UPDATE_PERIOD, UPDATE_SUCCESS_FETCH, SET_WEATHER, SET_TEMPERATURE } from '~d/actionTypes';

export const updatePeriod = (data) => dispatch => {
    dispatch({ type: UPDATE_PERIOD, payload: data});
};

export const setWeather = (data) => dispatch => {
    dispatch({ type: SET_WEATHER, payload: data});
};

export const setTemperature = (data) => dispatch => {
    dispatch({ type: SET_TEMPERATURE, payload: data});
};

export const updateSuccessFetch = (data) => dispatch => {
    dispatch({ type: UPDATE_SUCCESS_FETCH, payload: data});
};

