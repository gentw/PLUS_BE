<template>
    <div>
      <b-row class="align-items-end">
        <b-col
          cols="12"
          :md="(Object.keys(salesData).length === 0 || Object.keys(debtData).length === 0) ? '12': '6'"
          class="mb-md-0 mb-2"
        >
        <b-card no-body>
            <b-card-header class="pb-50">
              <h5>
                Filtro tabelen
              </h5>
            </b-card-header>
            <b-card-body>
                  <label>Statusi</label>
                  <v-select
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    :value="statusFilter"
                    :options="_statusOptions"
                    class="w-100"
                    :reduce="val => val.value"
                    @input="(val) => $emit('update:statusFilter', val)"
                  />
            </b-card-body>
          </b-card>      

        </b-col>
       
        <b-col
          cols="12"
          :md="(Object.keys(salesData).length === 0 || Object.keys(debtData).length === 0) ? '12': '6'"
          class="mb-md-0 mb-2"
          v-if="statusFilter && dateRange != '' && currentUserIsAdmin"
        >

        <b-card no-body v-if="Object.keys(salesData).length !== 0 || Object.keys(debtData).length !== 0">
            <b-card-header class="pb-50">
              <h5 v-if="statusFilter == 1">
                Pasqyra e <span>shitjeve sipas dates: </span> {{ dateRange }}
              </h5>
              <h5 v-if="statusFilter == 2">
                Pasqyra e <span>borxheve sipas dates: </span> {{ dateRange }}
              </h5>
              <p style="color: red; font-size: 11px;">Informacionet ne pasqyre nuk jane te nderlidhura me rezultatin e listes se meposhtme.</p>
              <!-- <h5 v-if="statusFilter == 0">
                Pasqyra e <span>shitjeve te anuluara sipas dates: </span> {{ dateRange }}
              </h5> -->
            </b-card-header>
            <b-card-body>
              <!-- sales report -->
              <sales-reports :data="salesData" v-if="statusFilter == 1"  />
              <debt-reports :data="debtData" v-if="statusFilter == 2"  />
            </b-card-body>
          </b-card>

        </b-col>
      </b-row>
      
    </div>
    
  </template>
  
  <script>
  import { BCard, BCardHeader, BCardBody, BRow, BCol } from 'bootstrap-vue'
  import vSelect from 'vue-select'
  import StatisticCardVertical from '@core/components/statistics-cards/StatisticCardVertical.vue'
  import SalesReports from '@/views/helper_components/reports/SalesReports.vue'
  import DebtReports from '@/views/helper_components/reports/DebtReports.vue'
  import useUsersList from '@/views/user/users-list/useUsersList';
  import userStoreModule from '@/views/user/userStoreModule'
  import { onMounted, onUnmounted, ref, computed } from '@vue/composition-api'
  import store from '@/store'

  export default {
    components: {
      BRow,
      BCol,
      BCard,
      BCardHeader,
      BCardBody,
      vSelect,
      StatisticCardVertical,
      SalesReports,
      DebtReports
    },
    props: {
      statusFilter: {
        type: [String, null],
        default: null,
      },
      _statusOptions: {
        type: Array,
        required: true,
      },
      dateRange: {
        type: [String, null],
        required: true,
      },
      salesData: {
        type: Object,
        default: () => [],
      },
      debtData: {
        type: Object,
        default: () => [],
      },
    },

    

    setup(props) {
      const USER_APP_STORE_MODULE_NAME = 'app-user'

      // Register module
      if (!store.hasModule(USER_APP_STORE_MODULE_NAME)) store.registerModule(USER_APP_STORE_MODULE_NAME, userStoreModule)
      
      const {
        userIsAdmin,
        isAdmin,
        
      } = useUsersList()

      const currentUserIsAdmin = computed(() => isAdmin.value);

      // UnRegister on leave
      onUnmounted(() => { 
        if (store.hasModule(USER_APP_STORE_MODULE_NAME)) store.unregisterModule(USER_APP_STORE_MODULE_NAME)      
      })

      onMounted(() => {    
        userIsAdmin(); 
      });

      return {
        userIsAdmin,
        isAdmin,
        
        currentUserIsAdmin
      }
    }
  }
  </script>
  
  <style lang="scss">
  @import '~@resources/scss/vue/libs/vue-select.scss';
  </style>
  