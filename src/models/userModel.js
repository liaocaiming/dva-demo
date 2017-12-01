import * as userServer from '../services/userServer'

const initState = {
  user: {},
}

export default {
  namespace: 'user',

  state: initState,

  subscriptions: {
    // setup({ dispatch, history }) {
    //   return history.listen(({ pathname, query }) => {
    //     console.log(pathname, 'pathname')
    //     if (pathname === 'user') {
    //       dispatch({ type: 'getUserData' })
    //     }
    //   })

    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        // if (pathname === '/') {
        //   dispatch({ type: 'getUserData' });
        // }
        dispatch({ type: 'getUserData'});
      });
    }

  },

  effects: {
    *getUserData(action, { call, put }) {
      let res = yield call(userServer.getUserData, action.payload);
      if (!res) return;
      yield put({ type: 'getUserDataReducer', data: res.res.data })
    }
  },

  reducers: {
    getUserDataReducer(state, action) {
      return Object.assign({}, state, { user: action.data })
    }
  }


}
