import axios from 'axios';
import * as constants from '../constants/Constants';

const ROOT_URL = `https://reqres.in/api/users?`;

export function fetchUsersDataResults(initialData) {
  return {
      type: constants.FETCH_USERS_DATA,
      payload: initialData
  };
}

export function addMorePearsonUsers() {
  const url = `${ROOT_URL}page=1&per_page=10`;
  const request = axios.get(url);

  return {
      type: constants.ADD_MORE_USERS,
      payload: request
  };
}

export function deletePearsonUser(userId) {
  return {
      type: constants.DELETE_USER,
      userId: userId
  };
}
