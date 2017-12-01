import fetch from '../utils/fetch';

const url = 'http://localhost:3000'
export async function getCartData(params) {
  return fetch('GET', url + '/api/user-ajax', params)
}
