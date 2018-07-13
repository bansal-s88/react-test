import { combineReducers } from 'redux';
import PearsonUsersListData from './PearsonUsersListData';

const rootReducer = combineReducers({
  userListData: PearsonUsersListData
});

export default rootReducer;
