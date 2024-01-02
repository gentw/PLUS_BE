import axios from '@axios'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchTransactions(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios
          .get('/api/fetchTransactions', { params: queryParams })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchAllTransactions() {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/fetchAllTransactions`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    deleteTransaction(ctx, id) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/deleteTransaction/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    },
}
