import { combineReducers } from 'redux';
import menu from './menu';
import category from './category';
import user from './user';
import transaction from './transaction';

const appReducer = combineReducers({
    menu,
    category,
    user,
    transaction
})

export default appReducer