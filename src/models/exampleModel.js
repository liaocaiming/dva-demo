import * as service from '../services/exampleServer';

const initState = {
  example: {}
}
export default {

  namespace: 'example',

  state: initState,

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/users') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },

  effects: {
    *getCartData({ payload }, { call, put }) {
      const res = yield call(service.getCartData, payload);
      console.log(res, 464668)
      if (!res) {
        return
      }
      yield put({ type: 'getProductData', data: res.res.data });
    },
  },

  reducers: {
    getProductData(state, action) {
      return Object.assign({}, state, { example: action.data })
    },
  },

};
