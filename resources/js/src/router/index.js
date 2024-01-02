import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/web/home',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        pageTitle: 'Paneli',
        breadcrumb: [
          {
            text: 'Paneli',
            active: true,
          },
        ],
      },
    },
    {
      path: '/web/users',
      name: 'users',
      component: () => import('@/views/user/users-list/UsersList.vue'),
      meta: {
        pageTitle: 'Perdoruesit',
        breadcrumb: [
          {
            text: 'Perdoruesit',
            active: true,
          },
        ],
      },
    },

    {
      path: '/web/users/view/:id',
      name: 'apps-users-view',
      component: () => import('@/views/user/users-view/UsersView.vue'),
    },
    {
      path: '/web/users/edit/:id',
      name: 'apps-users-edit',
      component: () => import('@/views/user/users-edit/UsersEdit.vue'),
    },


    // Services

    {
      path: '/web/services',
      name: 'services',
      component: () => import('@/views/services/services-list/ServicesList.vue'),
      meta: {
        pageTitle: 'Sherbimet',
        breadcrumb: [
          {
            text: 'Sherbimet',
            active: true,
          },
        ],
      },
    },

    // {
    //   path: '/web/services/view/:id',
    //   name: 'apps-services-view',
    //   component: () => import('@/views/services/services-view/ServicesView.vue'),
    // },
    {
      path: '/web/services/edit/:id',
      name: 'apps-services-edit',
      component: () => import('@/views/services/services-edit/ServicesEdit.vue'),
    },

    // Sales
    {
      path: '/web/sales',
      name: 'sales',
      component: () => import('@/views/sales/sales-list/SalesList.vue'),
      meta: {
        pageTitle: 'Shitjet',
        breadcrumb: [
          {
            text: 'Shitjet',
            active: true,
          },
        ],
      },
    },

    // Expenses

    {
      path: '/web/expenses',
      name: 'expenses',
      component: () => import('@/views/expenses/expenses-list/ExpensesList.vue'),
      meta: {
        pageTitle: 'Shpenzime',
        breadcrumb: [
          {
            text: 'Shpenzime',
            active: true,
          },
        ],
      },
    },

    // {
    //   path: '/web/expenses/edit/:id',
    //   name: 'apps-expenses-edit',
    //   component: () => import('@/views/expenses/expenses-edit/ExpensesEdit.vue'),
    // },

    {
      path: '/web/stock_products',
      name: 'transactions',
      component: () => import('@/views/transactions/transactions-list/TransactionsList.vue'),
      meta: {
        pageTitle: 'Produktet ne stok',
        breadcrumb: [
          {
            text: 'Produktet ne stok',
            active: true,
          },
        ],
      },
    },

    {
      path: '/xweb',
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/Home.vue'),
          meta: {
            pageTitle: 'Home',
            breadcrumb: [
              {
                text: 'Home',
                active: true,
              },
            ],
          },
        },
        {
          path: 'users',
          name: 'users',
          component: () => import('@/views/user/users-list/UsersList.vue'),
          meta: {
            pageTitle: 'Users',
            breadcrumb: [
              {
                text: 'Users',
                active: true,
              },
            ],
          },
        },
        // {
        //   path: '/apps/users/view/:id',
        //   name: 'apps-users-view',
        //   component: () => import('@/views/apps/user/users-view/UsersView.vue'),
        // },
        // {
        //   path: '/apps/users/edit/:id',
        //   name: 'apps-users-edit',
        //   component: () => import('@/views/apps/user/users-edit/UsersEdit.vue'),
        // },
        
        {
          path: '/error-404',
          name: 'error-404',
          component: () => import('@/views/error/Error404.vue'),
          meta: {
            layout: 'full',
          },
        },
        {
          path: '*',
          redirect: 'error-404',
        },
      ]
    }
    
  ],
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
