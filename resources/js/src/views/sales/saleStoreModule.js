import axios from '@axios'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchSales(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios
          .get('/api/fetchSales', { params: queryParams })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchSalesReport(ctx, saleData) {
      return new Promise((resolve, reject) => {
        axios
          .post('/api/fetchSalesReport', { sale: saleData })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchUser(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/fetchSale/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    searchUserByName(ctx, name) {
      return new Promise((resolve, reject) => {
        axios
          .post('/api/findUserByName', { user: name })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    addSale(ctx, saleData) {
      return new Promise((resolve, reject) => {
        axios
          .post('/api/addSale', { sale: saleData })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    payDebt(ctx, saleData) {
      return new Promise((resolve, reject) => {
        axios
          .post('/api/payDebt', { sale: saleData })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    cancelSale(ctx, saleData) {
      return new Promise((resolve, reject) => {
        axios
          .post('/api/cancelSale', { sale: saleData })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchDebtSale(ctx, saleData) {
      return new Promise((resolve, reject) => {
        axios
          .post('/api/fetchDebtSale', { saleData })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    deleteSale(ctx, id) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/deleteSale/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

    fetchCurrentMonthSalesReport(ctx) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/fetchCurrentMonthSalesReport`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

    //home Reports
    fetchReportsByYearAndMonth(ctx, reportData) {
      return new Promise((resolve, reject) => {
        axios
          .post(`/api/fetchReportsByYearAndMonth`, {reportData})
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    
  },
}
