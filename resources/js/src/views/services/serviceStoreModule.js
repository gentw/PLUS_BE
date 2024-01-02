import axios from '@axios'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchServices(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios
          .get('/api/fetchServices', { params: queryParams })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchService(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/fetchService/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchAllServices() {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/fetchAllServices`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    addService(ctx, serviceData) {
      return new Promise((resolve, reject) => {
        axios
          .post('/api/addService', { service: serviceData })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
  },
}
