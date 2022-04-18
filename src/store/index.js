import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users:null,
    posts:null,
  },
  getters: {
    users:(state)=> state.users,
    posts:(state)=> state.posts,
  },
  mutations: {
    STATE_USERS(state,payload) {
      state.users=payload
    },
    STATE_POSTS(state,payload) {
      state.posts=payload
    },

  },
  actions: {
    async fetchUsers({commit}){
      let users = await axios.get('https://jsonplaceholder.typicode.com/users')
      commit('STATE_USERS', users.data)
    },
    async fetchPosts({commit},payload){
      let posts
      if (payload) {
         posts = await axios.get('https://jsonplaceholder.typicode.com/posts?userId='+payload)
      } else {
         posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
      }
      commit('STATE_POSTS', posts.data)
    },
    
  },
})
