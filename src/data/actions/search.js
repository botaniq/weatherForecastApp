import { UPDATE_CITY } from '~d/actionTypes';

export const updateCity = (data) => dispatch => {
    dispatch({ type: UPDATE_CITY, payload: data});
};
