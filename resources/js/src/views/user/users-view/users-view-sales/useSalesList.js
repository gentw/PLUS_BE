import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'
import { title } from '@core/utils/filter'
import router from '@/router'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default function useUsersList() {
  // Use toast
  const toast = useToast()

  const refSaleListTable = ref(null)

  // Table Handlers
  const tableColumns = [
    { key: 'name', sortable: true, label: 'Klienti' },
    { key: 'service[0].name', sortable: true, label: 'Sherbimi' },
    { key: 'sale[0].sold_price', sortable: true, label: 'Cmimi shitjes' },
    { key: 'sale[0].profit', sortable: true, label: 'Fitimi' },
    { key: 'sale[0].purchased_price', sortable: true, label: 'Cmimi blerjes' },
    { key: 'status', sortable: true, label: 'Statusi' },
    { key: 'debt_price', sortable: true, label: 'Borxhi paguar' },
    { key: 'debt_price_unpaid', sortable: true, label: 'Borxhi mbetur' },
    { key: 'created_at', sortable: true, label: 'Data procesimit' },
  ]

  

  const perPage = ref(20)
  const totalSales = ref(0)
  const currentPage = ref(1)
  const perPageOptions = [10, 25, 50, 100]
  const searchQuery = ref('')
  const sortBy = ref('id')
  const isSortDirDesc = ref(true)
  const roleFilter = ref(null)
  const planFilter = ref(null)
  const statusFilter = ref(null)
  const rangePicker = ref(null);
  const salesReportData  =ref(null)
  const userRole = ref(null)

  const dataMeta = computed(() => {
    const localItemsCount = refSaleListTable.value ? refSaleListTable.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalSales.value,
    }
  })

  const refetchData = () => {
    refSaleListTable.value.refresh()
  }

  watch([currentPage, perPage, statusFilter, rangePicker, searchQuery], () => {
    refetchData() 
    if(statusFilter.value == 2 || statusFilter.value === null) {
      tableColumns.splice(6, 0, { key: 'debt_price', sortable: true, label: 'Borxhi paguar' });
      // tableColumns.splice(7, 0, { key: 'debt_currency', sortable: true, label: 'Borxhi paguar (Valuta)' });
      tableColumns.splice(7, 0, { key: 'debt_price_unpaid', sortable: true, label: 'Borxhi mbetur' });
    } else {
      if(tableColumns.length > 8) {
        tableColumns.splice(6, 2);
      }
    }
  })

  
  const fetchSales = (ctx, callback) => {
    

    store
      .dispatch('app-user/fetchUserSales', {
        q: searchQuery.value,
        perPage: perPage.value,
        page: currentPage.value,
        sortBy: sortBy.value,
        sortDesc: isSortDirDesc.value,
        status: statusFilter.value,
        rangePicker: rangePicker.value,
        user_id: router.currentRoute.params.id
        
      })
      .then(response => {
        if(response.data.role == 3) {
            tableColumns.splice(2, 0, { key: 'emp[0].name', sortable: true, label: 'Punetori' });
        }

        const { sales, total } = response.data

        callback(sales)
        totalSales.value = total

        if(statusFilter.value != null && rangePicker.value != null) {
          store
            .dispatch('app-sale/fetchSalesReport', {       
              status: statusFilter.value,
              rangePicker: rangePicker.value
              
            })
            .then(response => {
              salesReportData.value = response.data;

              
            })
            .catch(() => {
              console.log("error sales report data")
            })
        }
      })
      .catch(() => {
        toast({
          component: ToastificationContent,
          props: {
            title: 'Error fetching sales list',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
      })


      
  }

  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*
 
  const resolveStatus = status => {
    if(status == 1) return 'E shitur'
    if(status == 2) return 'Borxh'
    if(status == 0) return 'E anuluar'
  }

  return {
    fetchSales,
    tableColumns,
    perPage,
    currentPage,
    totalSales,
    dataMeta,
    perPageOptions,
    searchQuery,
    sortBy,
    isSortDirDesc,
    refSaleListTable,

    resolveStatus,
    refetchData,

    // Extra Filters
    roleFilter,
    planFilter,
    statusFilter,
    rangePicker,
    salesReportData,
    userRole
  }
}
