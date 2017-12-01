import fetch from '../utils/fetch';

const url = 'http://localhost:3000'
export async function getUserData(params) {
  return fetch('GET', url + '/api/user-info', params)
}
