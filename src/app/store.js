import { createStore } from 'vuex';

const state = {
  champions: []
}

const mutations = {
  setChampions (state, champions) {
    state.champions = champions
  }
};

const actions = {
  retrieveChampions: ({ commit }) => {
    fetch('http://ddragon.leagueoflegends.com/cdn/10.22.1/data/pt_BR/champion.json')
      .then(response => response.json())
      .then(champions => commit('setChampions', Object.keys(champions.data)));
  }
}

const store = createStore({
  state,
  actions,
  mutations
});

export default store;
