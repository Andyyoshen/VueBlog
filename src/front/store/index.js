import axios from 'axios'
import { data } from 'jquery'
import Vue from 'vue'
import Vuex from 'vuex'
//import mixin from '../components/Mixin.vue'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articleState:null,
    Tag_TreeViewDataVuex:null,
    ArticleTitleVuex:null
  },
  mutations: {
    ChangArticle(state,data){
      state.articleState = data
      sessionStorage.setItem('article_titlepage_id', state.articleState)
    },
    SaveTagData_Vuex(state,data){
      state.Tag_TreeViewDataVuex = data
    },
    SaveArticleTitleVuex(state,data){
      state.ArticleTitleVuex = data
    }
  },
  actions: {
  },
  modules: {
  }
})
