import { combineReducers } from 'redux';
import menu from './menu';
import category from './category';

const appReducer = combineReducers({
    menu,
    category
})

export default appReducer