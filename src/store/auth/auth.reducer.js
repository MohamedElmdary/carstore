import * as actions from './auth.actions';

const initState = {
    email: null,
    expiresIn: null,
    id: null,
    token: null,
    username: null
};

export default (state = initState, action) => {

    switch(action.type) {
        case (actions.LOGIN_USER): return {...state, ...action.payload};
        default: return state;
    }

};