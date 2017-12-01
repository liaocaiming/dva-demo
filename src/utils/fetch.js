import request from './request'

const fetch = (method = 'GET', url, params) => {

  let requestObj = {
    method: method
  }

  if (method === 'GET') {
    let str = ''
    for (let k in params) {
      if (params[k]) {
        str += '&' + k + '=' + params[k]
      }
    }
    url = url + '?' + str.slice(1)
  } else if (method === 'POST') {
    Object.defineProperty(requestObj, 'body', {
      value: JSON.stringify(params)
    })
  }
  return request(url, requestObj).then(res => ({ res }))
}

export default fetch;