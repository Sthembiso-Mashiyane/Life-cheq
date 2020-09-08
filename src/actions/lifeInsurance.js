 export function addLifeInsurance(data) {
    return dispatch => {
        return dispatch({
            type: 'ADD',
            payload: data
        });
    }
};

export function editLifeInsurance(data) {
    return dispatch => {
        return dispatch({
            type: 'EDIT',
            payload: data
        });
    }
};

export function deleteLifeInsurance(data) {
    return dispatch => {
        return dispatch({
            type: 'DELETE',
            payload: data
        });
    }
};
