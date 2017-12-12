import { combineReducers } from 'redux';
import counter from './counter';
import ui from './ui';

const reduers = combineReducers({
    counter, ui
});

export default reduers;
