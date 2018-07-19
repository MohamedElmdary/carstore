import axios from 'axios';

export const LOGIN_USER = "LOGIN_USER";
export const loginUser = (data) => {
    return dispatch => {
        axios.post("/user/login", data)
            .then(response => {
                dispatch({
                    type: LOGIN_USER,
                    payload: response.data
                });
            })
            .catch(err => {
                if (err) throw err;
            })
    }
};