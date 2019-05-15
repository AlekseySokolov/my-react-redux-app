import {createStore , combineReducers} from 'redux';
import loginReducer from '../reducers/loginReducer';
import newsReducer from '../reducers/newsReducer';
import {reducer as formReducer} from 'redux-form';

const reducers = {
    form: formReducer,
    loginState: loginReducer,
    newsState : newsReducer
};
const rootReducer = combineReducers(reducers);
let store = createStore(rootReducer);
store.subscribe(() => console.log(store.getState()));

export default store;