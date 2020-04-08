import { UPDATE_CITY_VALUE, UPDATE_PERIOD_VALUE, SET_WEATHER, UPDATE_SUCCESS_FETCH, SET_TEMPERATURE } from '~d/actionTypes';

export const updateCityValue = (data) => dispatch => {
    dispatch({ type: UPDATE_CITY_VALUE, payload: data});
}

export const updatePeriodValue = (data) => dispatch => {
    dispatch({ type: UPDATE_PERIOD_VALUE, payload: data});
}

export const setWeather = (data) => dispatch => {
    dispatch({ type: SET_WEATHER, payload: data});
}

export const setTemperature = (data) => dispatch => {
    dispatch({ type: SET_TEMPERATURE, payload: data});
}

export const updateSuccessFetch = (data) => dispatch => {
    dispatch({ type: UPDATE_SUCCESS_FETCH, payload: data});
}

