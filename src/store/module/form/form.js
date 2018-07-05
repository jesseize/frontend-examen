export const SET_OPLEIDING = 'setOpleiding';

export default {
  namespaced: true,
  state: {
    opleiding: '',
  },
  getters: {
    opleiding: state => `${state.opleiding}`,
  },
  mutations: {
    [SET_OPLEIDING]: (state, payload) => {
      state.opleiding = payload;
    },
  },
  actions: {},
};
