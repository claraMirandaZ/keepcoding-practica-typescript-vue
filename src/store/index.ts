import { createStore } from 'vuex';

export interface IState {
  greeting: string;
}

export default createStore({
  state: {
    greeting:
      "Ah, Salaam and good evening to you worthy friend. In this store you'll find the finest merchandise this side of the river Jordan, on sale today...",
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
