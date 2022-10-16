import axios from "axios";

const state = {
  user: null,
  register: 0,
  token: {
    token: null,
    type: null,
  },
};

const getters = {
  isAuthenticated: (state) => !!state.user,
  stateUser: (state) => state.user,
};

const actions = {
  async Register({ commit }, User) {
    let response = await axios.post("/users", User);
    commit("setRegister");
    return response.status;
  },
  async LogIn({ commit }, User) {
    let response = await axios.post("/auth", User);
    if (response.status === 200) {
      await commit("setUser", User.email);
      await commit("setToken", response.data);
    }
    return response.status;
  },
  async LogOut({ commit }) {
    let user = null;
    commit("logout", user);
  },
};

const mutations = {
  setUser(state, email) {
    state.user = email;
  },
  setRegister(state) {
    state.register = state.register + 1;
  },
  setToken(state, data) {
    state.token.token = data.token;
    state.token.type = data.type;
  },
  logout(state) {
    state.user = null;
    state.token.token = null;
    state.token.type = null;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
