import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

const feeling = (state=[], action) => {
    if (action.type === 'SET_FEELING') {
        let newFeeling = [action.payload]
        return newFeeling;
    }
    return state;
};
const support = (state=[], action) => {
    if (action.type === 'SET_SUPPORT') {
        let newSupport = [action.payload]
        return newSupport;
    }
    return state;
};
const understanding = (state=[], action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        let newUnderstanding = [action.payload]
        return newUnderstanding;
    }
    return state;
};
const comments = (state=[], action) => {
    if (action.type === 'SET_COMMENTS') {
        let newComments = [action.payload]
        return newComments;
    }
    return state;
};


const store = createStore(
    combineReducers({
        feeling,
        understanding,
        support,
        comments,
    }),
    applyMiddleware(logger),
);

export default store;