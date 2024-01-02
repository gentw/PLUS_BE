import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'
import { title } from '@core/utils/filter'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default function useUsersList() {
  // Use toast
  const toast = useToast()

  const refUserListTable = ref(null)

  // Table Handlers
  const tableColumns = [
    { key: 'name', sortable: true },
    { key: 'email', sortable: true },
    { key: 'role', sortable: true },
    { key: 'actions' },
  ]
  const perPage = ref(10)
  const totalUsers = ref(0)
  const currentPage = ref(1)
  const perPageOptions = [10, 25, 50, 100]
  const searchQuery = ref('')
  const sortBy = ref('id')
  const isSortDirDesc = ref(true)
  const roleFilter = ref(null)
  const planFilter = ref(null)
  const statusFilter = ref(null)
  const isAdmin = ref(null);

  const dataMeta = computed(() => {
    const localItemsCount = refUserListTable.value ? refUserListTable.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalUsers.value,
    }
  })

  const refetchData = () => {
    refUserListTable.value.refresh()
  }

  watch([currentPage, perPage, searchQuery, roleFilter, planFilter, statusFilter], () => {
    refetchData()
  })

  const fetchUsers = (ctx, callback) => {
    store
      .dispatch('app-user/fetchUsers', {
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
        const { users, total } = response.data

        callback(users)
        totalUsers.value = total

        console.log(total);
      })
      .catch(() => {
        toast({
          component: ToastificationContent,
          props: {
            title: 'Error fetching users list',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
      })
  }

  const deleteUser = (id) => {
    store.dispatch('app-user/deleteUser', id).then(() => {
      refetchData() 
    }).then(response => {
      toast({
        component: ToastificationContent,
        props: {
          title: 'Perdoruesi u fshi me sukses!',
          icon: 'AlertTriangleIcon',
          variant: 'success',
        },
      })
    })
    .catch(() => {
      toast({
        component: ToastificationContent,
        props: {
          title: 'Fshirja deshtoi!! Se pari duhet te fshihen shitjet e ketij perdoruesi ne sistem.',
          icon: 'AlertTriangleIcon',
          variant: 'danger',
        },
      })
    })
  }

  const userIsAdmin = (ctx) => {
    store
      .dispatch('app-user/userIsAdmin')
      .then(response => {
        isAdmin.value = response.data

      })
      .catch(() => {
        console.log("error")
      })
  }

  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*

  const resolveUserRoleVariant = role => {
    if (role === 1) return 'primary'
    if (role === 2) return 'warning'
    return 'primary'
  }

  const resolveUserRoleIcon = role => {
    if (role === 1) return 'UserIcon'
    if (role === 2) return 'Edit2Icon'
    return 'UserIcon'
  }

  const resolveUserStatusVariant = status => {
    if (status === 'pending') return 'warning'
    if (status === 'active') return 'success'
    if (status === 'inactive') return 'secondary'
    return 'primary'
  }

  return {
    fetchUsers,
    userIsAdmin,
    isAdmin,
    tableColumns,
    perPage,
    currentPage,
    totalUsers,
    dataMeta,
    perPageOptions,
    searchQuery,
    sortBy,
    isSortDirDesc,
    refUserListTable,

    resolveUserRoleVariant,
    resolveUserRoleIcon,
    resolveUserStatusVariant,
    refetchData,

    // Extra Filters
    roleFilter,
    planFilter,
    statusFilter,
    deleteUser
  }
}
