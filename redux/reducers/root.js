import { combineReducers } from 'redux';
import Global from './global';
import User from './user';
import Course from './course';
import Learner from './learner';


export default combineReducers({
    Global,
    User,
    Course,
    Learner
});