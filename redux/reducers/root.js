import { combineReducers } from 'redux';
import EarningHistory from './earningHistory';
import TotalSales from './totalSales';
import ProfileVisitor from './profileVisitor';
import MyBalance from './myBalance';


export default combineReducers({
    EarningHistory,
    TotalSales,
    ProfileVisitor,
    MyBalance
});
