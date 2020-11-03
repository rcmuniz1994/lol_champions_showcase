import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  champions: []
};

const mutations = {
  setChampions(state, champions) {
    state.champions = champions;
  }
};

const actions = {
  retrieveChampions: ({ commit }) => {
    fetch(
      "http://ddragon.leagueoflegends.com/cdn/10.22.1/data/pt_BR/champion.json"
    )
      .then(response => response.json())
      .then(champions => commit("setChampions", Object.values(champions.data)));
  }
};

const getters = {
  champions: state => state.champions
};

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
});

export default store;
