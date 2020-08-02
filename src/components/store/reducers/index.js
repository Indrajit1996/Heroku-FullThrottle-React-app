import { combineReducers } from 'redux';
import user from './user.js';



const crudApp = combineReducers({
    user
});

export default crudApp;