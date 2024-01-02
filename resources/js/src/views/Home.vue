<template>
<h2>DPT PLUS</h2>
</template>
<script>
import { BCard, BCardText, BLink, BFormSelect, BRow, BCol, BButton, BCardHeader, BCardBody, BMediaBody, BMedia  } from 'bootstrap-vue'
import SalesChart from '@/views/helper_components/charts/SalesChart.vue'
import { ref, onUnmounted, onMounted, nextTick, computed } from '@vue/composition-api'
import saleStoreModule from '@/views/sales/saleStoreModule'
import useUsersList from '@/views/user/users-list/useUsersList';
import userStoreModule from '@/views/user/userStoreModule'
import store from '@/store'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BCardText,
    BLink,
    SalesChart,
    BFormSelect,
    BButton,
    BCardHeader,
    BCardBody,
    BMediaBody,
    BMedia
    
  },

  setup() {
    const SALE_APP_STORE_MODULE_NAME = 'app-sale'
    const USER_APP_STORE_MODULE_NAME = 'app-user'

    // Register module
    if (!store.hasModule(SALE_APP_STORE_MODULE_NAME)) store.registerModule(SALE_APP_STORE_MODULE_NAME, saleStoreModule)

    if (!store.hasModule(USER_APP_STORE_MODULE_NAME)) store.registerModule(USER_APP_STORE_MODULE_NAME, userStoreModule)

    const {
      userIsAdmin,
      isAdmin,
      
    } = useUsersList()

    const currentUserIsAdmin = computed(() => isAdmin.value);

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(SALE_APP_STORE_MODULE_NAME)) store.unregisterModule(SALE_APP_STORE_MODULE_NAME)
      if (store.hasModule(USER_APP_STORE_MODULE_NAME)) store.unregisterModule(USER_APP_STORE_MODULE_NAME) 
    })


    const data = ref({});
    
    data.value.sale_report = null;
    data.value.company_balance = null;
    data.value.employees = null;
    
    const selectMonthYear = {
      year: '',
      month: ''
    };
    const months = [
      { value: '01', text: 'Janar ' },
      { value: '02', text: 'Shkurt' },
      { value: '03', text: 'Mars' },
      { value: '04', text: 'Prill' },
      { value: '05', text: 'Maj' },
      { value: '06', text: 'Qershor' },
      { value: '07', text: 'Korrik ' },
      { value: '08', text: 'Gusht' },
      { value: '09', text: 'Shtator ' },
      { value: '10', text: 'Tetor' },
      { value: '11', text: 'Nentor' },
      { value: '12', text: 'Dhjetor' },
   
  ];
  const years = [];

  const currentYear = new Date().getFullYear();
  const olderYears = 20; 

  for (let i = 0; i < olderYears; i++) {
    const year = currentYear - i;
    years.push({ value: year.toString(), text: year.toString() });
  }

  const generateReports = () => {
    store.dispatch('app-sale/fetchReportsByYearAndMonth', selectMonthYear).then((response) => {
      data.value = response.data;
      console.log(data)
    });
  }
    onMounted(() => {
      userIsAdmin();       
    });

    return {years, months, selectMonthYear, generateReports, data, userIsAdmin,
      isAdmin,
      currentUserIsAdmin};
  }
}
</script>

<style scoped>
  .home-item {
    width: 30%;
    margin-right: 10px;
  }
  button {
    margin-top: 20px;
  }
  .card-transaction .transaction-item{
    align-items: flex-start;
  }
</style>
