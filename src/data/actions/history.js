import { ADD_ITEM } from '~d/actionTypes';

export const addItem = (data) => dispatch => {
    dispatch({ type: ADD_ITEM, payload: data});
};
