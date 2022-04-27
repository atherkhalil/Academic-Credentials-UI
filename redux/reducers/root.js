import { combineReducers } from 'redux';
import Global from './global';
import User from './user';
import Course from './course';


export default combineReducers({
    Global,
    User,
    Course
});