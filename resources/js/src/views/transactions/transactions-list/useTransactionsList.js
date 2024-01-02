import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'
import { title } from '@core/utils/filter'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default function useTransactionsList() {
  // Use toast
  const toast = useToast()

  const refTransactionListTable = ref(null)

  // Table Handlers
  const tableColumns = [
    { key: 'barcode', label: 'Barkodi'},
    { key: 'emri', label: 'Emri' },
    { key: 'njesia', label: 'Njesia', sortable: true },
    { key: 'sasia', label: 'Sasia'},
    { key: 'cmimi', label: 'Cmimmi'},
    { key: 'created_at', label: 'Data' },
    { key: 'actions', label: 'Actions' },
  ]
  const perPage = ref(10)
  const totalTransactions = ref(0)
  const currentPage = ref(1)
  const perPageOptions = [10, 25, 50, 100]
  const searchQuery = ref('')
  const sortBy = ref('id')
  const isSortDirDesc = ref(true)
  const roleFilter = ref(null)
  const planFilter = ref(null)
  const statusFilter = ref(null)

  const dataMeta = computed(() => {
    const localItemsCount = refTransactionListTable.value ? refTransactionListTable.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalTransactions.value,
    }
  })

  const refetchData = () => {
    refTransactionListTable.value.refresh()
  }

  watch([currentPage, perPage, searchQuery, roleFilter, planFilter, statusFilter], () => {
    refetchData()
  })

  const fetchTransactions = (ctx, callback) => {
    store
      .dispatch('app-transaction/fetchTransactions', {
        q: searchQuery.value,
        perPage: perPage.value,
        page: currentPage.value,
        sortBy: sortBy.value,
        sortDesc: isSortDirDesc.value,
        role: roleFilter.value,
        plan: planFilter.value,
        status: statusFilter.value,
      })
      .then(response => {
        const { transactions, total } = response.data

        callback(transactions)
        totalTransactions.value = total

        console.log(total);
      })
      .catch(() => {
        toast({
          component: ToastificationContent,
          props: {
            title: 'Error fetching transactions list',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
      })
  }

  const deleteTransaction = (id) => {
    store.dispatch('app-transaction/deleteTransaction', id).then(() => {
      refetchData() 
    });
  }

  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*

  

  return {
    fetchTransactions,
    tableColumns,
    perPage,
    currentPage,
    totalTransactions,
    dataMeta,
    perPageOptions,
    searchQuery,
    sortBy,
    isSortDirDesc,
    refTransactionListTable,
    refetchData,
    deleteTransaction
  }
}
