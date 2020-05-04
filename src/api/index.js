import axios from 'axios';
import fns from './fns';
function api(Vue) {
  if (api.installed) {
    return
  }
  api.installed = true

  Vue.axios = axios;

  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return axios
      }
    },

    $http: {
      get() {
        return axios
      }
    },

    $api:{
      get(){
        return fns;
      }
    }
  })
}

export default api;
