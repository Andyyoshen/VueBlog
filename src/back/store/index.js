import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    BlogEditState:null
  },
  mutations: {
    EditArticle(state,data){
      state.BlogEditState = data
      sessionStorage.setItem('BlogEditState_id',state.BlogEditState)
    }
  },
  actions: {},
  modules: {},
});
