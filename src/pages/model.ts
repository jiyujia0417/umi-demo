
const IndexModel = {
  namespace: 'index',
  state: {
    name: '1234',
  },
  effects: {
    *query({ payload }, { call, put }) {
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        name:action.username
      };
    },
  
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({
            type: 'query',
          })
        }
      });
    }
  }
};
export default IndexModel;