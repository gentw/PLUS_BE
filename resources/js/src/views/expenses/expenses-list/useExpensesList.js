import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'
import { title } from '@core/utils/filter'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default function useExpensesList() {
  // Use toast
  const toast = useToast()

  const refExpenseListTable = ref(null)

  // Table Handlers
  const tableColumns = [
    { key: 'payment_type', label: 'Pagesa' },
    { key: 'payment_price', label: 'Cmimi', sortable: true },
    { key: 'user.name', label: 'Perdoruesi'},
    { key: 'created_at', label: 'Data' },
    { key: 'actions' },
  ]
  const perPage = ref(10)
  const totalExpenses = ref(0)
  const currentPage = ref(1)
  const perPageOptions = [10, 25, 50, 100]
  const searchQuery = ref('')
  const sortBy = ref('id')
  const isSortDirDesc = ref(true)
  const roleFilter = ref(null)
  const planFilter = ref(null)
  const statusFilter = ref(null)
  const rangePicker = ref(null)

  const dataMeta = computed(() => {
    const localItemsCount = refExpenseListTable.value ? refExpenseListTable.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalExpenses.value,
    }
  })

  const refetchData = () => {
    refExpenseListTable.value.refresh()
  }

  watch([currentPage, perPage, searchQuery, roleFilter, planFilter, statusFilter, rangePicker], () => {
    refetchData()
  })

  const fetchExpenses = (ctx, callback) => {
    store
      .dispatch('app-expense/fetchExpenses', {
        q: searchQuery.value,
        perPage: perPage.value,
        page: currentPage.value,
        sortBy: sortBy.value,
        sortDesc: isSortDirDesc.value,
        role: roleFilter.value,
        plan: planFilter.value,
        status: statusFilter.value,
        rangePicker: rangePicker.value
      })
      .then(response => {
        const { expenses, total } = response.data

        callback(expenses)
        totalExpenses.value = total

        console.log(total);
      })
      .catch(() => {
        toast({
          component: ToastificationContent,
          props: {
            title: 'Error fetching expenses list',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
      })
  }

  const deleteExpense = (id) => {
    store.dispatch('app-expense/deleteExpense', id).then(() => {
      refetchData() 
    });
  }

  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*

  

  return {
    fetchExpenses,
    tableColumns,
    perPage,
    currentPage,
    totalExpenses,
    dataMeta,
    perPageOptions,
    searchQuery,
    sortBy,
    isSortDirDesc,
    refExpenseListTable,
    refetchData,
    deleteExpense,
    rangePicker

  }
}
