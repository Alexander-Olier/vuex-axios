import { createStore } from "vuex";
import axios from "axios";
import Vuex from "vuex";

const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "aplication/json",
  },
});

const state = {
    posts:[]
};
const getters = {
    allPosts: (state)=> state.posts
};
const actions = {
  getAllPosts({ commit }) {
    apiClient
      .get("/posts")
      .then((response) => {
        commit("SET_POSTS", response.data);
      })
      .catch((err) => console.log(err));
  },
};
const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts;
  },
};

export default createStore({
  state,
  getters,
  actions,
  mutations,
});
