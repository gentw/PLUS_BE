import axios from '@axios'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchProduct(ctx, id) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/fetchStockProduct/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    updateStockProduct(ctx, stockProduct) {
      return new Promise((resolve, reject) => {
        axios
          .post('/api/updateStockProduct', { stock: stockProduct })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    
    fetchTotalOfVleraSum() {
      return new Promise((resolve, reject) => {
        axios
          .get('/api/fetchTotalOfVleraSum')
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
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
