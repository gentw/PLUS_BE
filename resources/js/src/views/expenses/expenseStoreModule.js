import axios from '@axios'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchExpenses(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios
          .get('/api/fetchExpenses', { params: queryParams })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchExpense(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/fetchExpense/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchAllExpenses() {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/fetchAllExpenses`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    addExpense(ctx, expenseData) {
      return new Promise((resolve, reject) => {
        axios
          .post('/api/addExpense', { expense: expenseData })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    deleteExpense(ctx, id) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/deleteExpense/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

    fetchCurrentMonthExpensesPriceReport(ctx) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/fetchCurrentMonthExpensesPriceReport`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    closeThisMonth(ctx, expenseData) {
      return new Promise((resolve, reject) => {
        axios
          .post('/api/closeThisMonth', { expense: expenseData })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    resetCloseMonthExpenses(ctx) {
      return new Promise((resolve, reject) => {
        axios
          .get('/api/resetCloseMonthExpenses')
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchCurrentBilance(ctx) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/fetchCurrentBilance`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    withdrawMoney(ctx, amount) {
      return new Promise((resolve, reject) => {
        axios
          .post('/api/withdrawMoney', { withdraw: amount })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
  },
}
