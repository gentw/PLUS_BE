import axios from '@axios'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchUsers(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios
          .get('/api/fetchUsers', { params: queryParams })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchUser(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/fetchUser/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    addUser(ctx, userData) {
      return new Promise((resolve, reject) => {
        axios
          .post('/api/addUser', { user: userData })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    userIsAdmin(ctx) {
      return new Promise((resolve, reject) => {
        axios
          .post('/api/userIsAdmin')
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchUserSales(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios
          .post(`/api/fetchSalesByUser/${queryParams.user_id}`, queryParams)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    }, 
    deleteUser(ctx, id) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/deleteUser/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },       
  },
  
}
