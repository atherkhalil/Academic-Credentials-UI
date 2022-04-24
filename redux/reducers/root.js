import { combineReducers } from 'redux';
import EarningHistory from './earningHistory';
import TotalSales from './totalSales';


export default combineReducers({
    EarningHistory,
    TotalSales
});
