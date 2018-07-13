import { FETCH_USERS_DATA, ADD_MORE_USERS, DELETE_USER } from '../constants/Constants';

export default function (state = [], action) {
  switch(action.type){
    case FETCH_USERS_DATA:
      return action.payload;
    case ADD_MORE_USERS:
      let initialArray = [...state, ...action.payload.data.data];
      let uniqueArrList = removeDuplicates(initialArray, 'id');
      return uniqueArrList;
    case DELETE_USER:
      let targetArray = [...state];
      var removeIndex = targetArray.map(function(item){
        return item.id;
      }).indexOf(action.userId);
      targetArray.splice(removeIndex, 1);
      return targetArray;
    default:
      return state;
  }
}

function removeDuplicates(myArr, prop) {
    return myArr.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
}
