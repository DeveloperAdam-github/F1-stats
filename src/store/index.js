import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    liveData: null,
  },
  mutations: {
    live_data(state, data) {
      state.liveData = data;
    },
  },
  actions: {
    getLiveData() {
      var options = {
        method: 'GET',
        url: 'https://f1-live-motorsport-data.p.rapidapi.com/session/2858',
        headers: {
          'x-rapidapi-host': 'f1-live-motorsport-data.p.rapidapi.com',
          'x-rapidapi-key':
            'c69655757emshbcbfee81712eaf4p1144bajsnbf04355c2f8e',
        },
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          this.sessionData = response.data.results.session;
          this.driverData = response.data.results.driver;
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },
  modules: {},
});
