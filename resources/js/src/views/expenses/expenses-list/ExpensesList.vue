<<template>

  <div>


    <expense-list-add-new
      :is-add-new-expense-sidebar-active.sync="isAddNewExpenseSidebarActive"
      @refetch-data="refetchData"
    />

    <expense-list-close-month
      :is-close-month-expense-sidebar-active.sync="isCloseMonthExpenseSidebarActive"
      :sales-reports="salesReports"
      @refetch-data="refetchData"
    />

    <expense-list-withdraw-money
      :is-withdraw-money-expense-sidebar-active.sync="isWithdrawMoneyExpenseSidebarActive"
      :current-balance="currentBalance"
      @refetch-data="refetchData"
    />

    <!-- Filters
    <users-list-filters
      :role-filter.sync="roleFilter"
      :plan-filter.sync="planFilter"
      :status-filter.sync="statusFilter"
      :role-options="roleOptions"
      :plan-options="planOptions"
      :status-options="statusOptions"
    /> -->

    <!-- Table Container Card -->
    <b-card
      no-body
      class="mb-0"
    >

      <div class="m-2">

        <!-- Table Top -->
        <b-row>

          <!-- Per Page -->
          <b-col
            cols="12"
            md="2"
            class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
          >
            <label>Show</label>
            <v-select
              v-model="perPage"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="perPageOptions"
              :clearable="false"
              class="per-page-selector d-inline-block mx-50"
            />
            <label>entries</label>
          </b-col>

          <b-col
          cols="12"
            md="4"
            class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
          >
             <!-- datepicker -->
            <div class="d-flex align-items-center">
              <feather-icon
                icon="CalendarIcon"
                size="16"
              />
              <flat-pickr
                v-model="rangePicker"
                :config="{ mode: 'range'}"
                class="form-control flat-picker bg-transparent border-0 shadow-none"
                placeholder="YYYY-MM-DD"
                @input="filterExpensesByDate"
               
              />
            </div>
            <!-- datepicker -->
          </b-col>
          </b-row>
          <b-row class="mt-2">
          <!-- Search -->
          <b-col
            cols="12"
            md="6"
          >
            <div class="d-flex align-items-center justify-content-end">
              <b-form-input
                v-model="searchQuery"
                class="d-inline-block mr-1"
                placeholder="Search..."
              />
              <b-button
                variant="primary"
                @click="isAddNewExpenseSidebarActive = true"
              >
                <span class="text-nowrap">Shto shpenzimet</span>
              </b-button>


              <b-button
                variant="danger"
                class="mx-1"
                @click="confirmCloseExpenses"
                v-if="currentUserIsAdmin && today.getDate() <= 20"
              >
                <span class="text-nowrap">Mbylle muajin</span>
              </b-button>
              <b-button
                style="margin-right: 10px;"
                @click="resetCloseMonthExpenses"
                v-if="currentUserIsAdmin && today.getDate() <= 20"
              >
                <span class="text-nowrap">Reseto</span>
              </b-button>
              <b-button
                variant="warning"
                @click="openWithdrawForm"
                v-if="currentUserIsAdmin"
              >
                <span class="text-nowrap">Terheq</span>
              </b-button>
            </div>
          </b-col>
        </b-row>

      </div>

      <b-table
        ref="refExpenseListTable"
        class="position-relative"
        :items="fetchExpenses"
        responsive
        :fields="tableColumns"
        primary-key="id"
        :sort-by.sync="sortBy"
        show-empty
        empty-text="No matching records found"
        :sort-desc.sync="isSortDirDesc"
      >

        <!-- Column: User -->
        <template #cell(expense)="data">
          <b-media vertical-align="center">
            <template #aside>
              <b-avatar
                size="32"
                :src="'default'"
                :text="avatarText(data.item.name)"
                :variant="`light-primary`"
                :to="{ name: 'apps-expenses-view', params: { id: data.item.id } }"
              />
            </template>
            <b-link
              :to="{ name: 'apps-expenses-view', params: { id: data.item.id } }"
              class="font-weight-bold d-block text-nowrap"
            >
              {{ data.item.name }}
            </b-link>
            <small class="text-muted">@{{ data.item.name }}</small>
          </b-media>
        </template>

        <template #cell(payment_price)="data">
          <b-media vertical-align="center">
           <span>{{ data.item.payment_price }} Euro</span>           
          </b-media>
        </template>

        
      
        <!-- Column: Actions -->
        <template #cell(actions)="data">
          <b-dropdown
            variant="link"
            no-caret
            :right="$store.state.appConfig.isRTL"
          >

            <template #button-content>
              <feather-icon
                icon="MoreVerticalIcon"
                size="16"
                class="align-middle text-body"
              />
            </template>

            <!-- <b-dropdown-item :to="{ name: 'apps-expenses-edit', params: { id: data.item.id } }">
              <feather-icon icon="EditIcon" />
              <span class="align-middle ml-50">Ndrysho</span>
            </b-dropdown-item> -->

            <b-dropdown-item @click="deleteExpense(data.item.id)">
              <feather-icon icon="TrashIcon" />
              <span class="align-middle ml-50">Fshije</span>
            </b-dropdown-item>
          </b-dropdown>
        </template>

      </b-table>
      <div class="mx-2 mb-2">
        <b-row>

          <b-col
            cols="12"
            sm="6"
            class="d-flex align-items-center justify-content-center justify-content-sm-start"
          >
            <span class="text-muted">Showing {{ dataMeta.from }} to {{ dataMeta.to }} of {{ dataMeta.of }} entries</span>
          </b-col>
          <!-- Pagination -->
          <b-col
            cols="12"
            sm="6"
            class="d-flex align-items-center justify-content-center justify-content-sm-end"
          >

            <b-pagination
              v-model="currentPage"
              :total-rows="totalExpenses"
              :per-page="perPage"
              first-number
              last-number
              class="mb-0 mt-1 mt-sm-0"
              prev-class="prev-item"
              next-class="next-item"
            >
              <template #prev-text>
                <feather-icon
                  icon="ChevronLeftIcon"
                  size="18"
                />
              </template>
              <template #next-text>
                <feather-icon
                  icon="ChevronRightIcon"
                  size="18"
                />
              </template>
            </b-pagination>

          </b-col>

        </b-row>
      </div>
    </b-card>
  </div>
</template>

<script>
import {
  BCard,
  BRow,
  BCol,
  BFormInput,
  BButton,
  BTable,
  BMedia,
  BAvatar,
  BLink,
  BBadge,
  BDropdown,
  BDropdownItem,
  BPagination,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import store from '@/store'
import Swal from 'sweetalert2'
import { ref, onUnmounted, onMounted, computed } from '@vue/composition-api'
import { avatarText } from '@core/utils/filter'
import flatPickr from 'vue-flatpickr-component'
// import UsersListFilters from './UsersListFilters.vue'
import useExpensesList from './useExpensesList'
import expenseStoreModule from '../expenseStoreModule'
import saleStoreModule from '@/views/sales/saleStoreModule'
import ExpenseListAddNew from './ExpenseListAddNew.vue'
import ExpenseListCloseMonth from './ExpenseListCloseMonth.vue'
import ExpenseListWithdrawMoney from './ExpenseListWithdrawMoney.vue'
import useUsersList from '@/views/user/users-list/useUsersList'
import userStoreModule from '@/views/user/userStoreModule'
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'


export default {
  components: {
    // UsersListFilters,
    ExpenseListAddNew,
    ExpenseListCloseMonth,
    ExpenseListWithdrawMoney,

    BCard,
    BRow,
    BCol,
    BFormInput,
    BButton,
    BTable,
    BMedia,
    BAvatar,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,

    vSelect,
    flatPickr
  },
  setup() {
    const EXPENSE_APP_STORE_MODULE_NAME = 'app-expense'
    const SALE_APP_STORE_MODULE_NAME = 'app-sale'
    const USER_APP_STORE_MODULE_NAME = 'app-user'
    const isCloseMonthExpenseSidebarActive = ref(false)
    const salesReports = ref({});
    const currentBalance = ref(0);
    const today = new Date();
    const toast = useToast();
    // Register module
    if (!store.hasModule(EXPENSE_APP_STORE_MODULE_NAME)) store.registerModule(EXPENSE_APP_STORE_MODULE_NAME, expenseStoreModule)

    if (!store.hasModule(SALE_APP_STORE_MODULE_NAME)) store.registerModule(SALE_APP_STORE_MODULE_NAME, saleStoreModule)

    if (!store.hasModule(USER_APP_STORE_MODULE_NAME)) store.registerModule(USER_APP_STORE_MODULE_NAME, userStoreModule)
    

    const {
        userIsAdmin,
        isAdmin,
        
      } = useUsersList()

    const currentUserIsAdmin = computed(() => isAdmin.value);
    

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(EXPENSE_APP_STORE_MODULE_NAME)) store.unregisterModule(EXPENSE_APP_STORE_MODULE_NAME)
      if (store.hasModule(SALE_APP_STORE_MODULE_NAME)) store.unregisterModule(SALE_APP_STORE_MODULE_NAME)
      if (store.hasModule(USER_APP_STORE_MODULE_NAME)) store.unregisterModule(USER_APP_STORE_MODULE_NAME)
    })

    onMounted(() => {
      userIsAdmin(); 
    });

    const isAddNewExpenseSidebarActive = ref(false)
    const isWithdrawMoneyExpenseSidebarActive = ref(false)

    const openWithdrawForm = () => {      
      store.dispatch('app-expense/fetchCurrentBilance').then((response) => {
        currentBalance.value = response.data;
        isWithdrawMoneyExpenseSidebarActive.value = true;
      });  
    }

    const resetCloseMonthExpenses = () => {
      Swal.fire({
        title: 'A jeni te sigurt?',
        text: "Pas konfirmimit mund te beni mbylljen e muajit nga fillimi",
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Anulo',
        confirmButtonText: 'Po, vazhdo',
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-outline-danger ml-1',
        },
        buttonsStyling: false,
      }).then((result) => {
        if (result.value) {
          store.dispatch('app-expense/resetCloseMonthExpenses').then( () => {
            toast({
              component: ToastificationContent,
              props: {
                title: "Resetimi u realizua me sukses!",
                icon: 'AlertTriangleIcon',
                variant: 'success',
              },
            })
            refetchData()
          });
        }
      });
    }

    const confirmCloseExpenses = () => {
      Swal.fire({
        title: 'A jeni te sigurt?',
        text: "Pasi ta plotesoni formen ndryshimet nuk kthehen pas! (Kur kjo form konfirmohet: shpenzimet e muajit aktual mbyllen, totali i mbetur depozitohet dhe behet gjenerimi raporteve)",
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Anulo',
        confirmButtonText: 'Po, vazhdo',
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-outline-danger ml-1',
        },
        buttonsStyling: false,
      }).then((result) => {
        if (result.value) {
          store.dispatch('app-sale/fetchCurrentMonthSalesReport').then((response) => {  
            salesReports.value = response.data;  
            
            store.dispatch('app-expense/fetchCurrentMonthExpensesPriceReport').then((response) => {
              salesReports.value = {
                ...salesReports.value,
                total_expense_price: response.data
              };
              isCloseMonthExpenseSidebarActive.value = true
            });  
          });

                  

          
          
          // Swal.fire({
          //   icon: 'success',
          //   title: 'Deleted!',
          //   text: 'Your file has been deleted.',
          //   customClass: {
          //     confirmButton: 'btn btn-success',
          //   },
          // });
        }
      });
    }

    const filterExpensesByDate = () => {
      console.log(rangePicker.value)
      
    }

    
    const {
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
        
    } = useExpensesList()

    return {
      // Sidebar
      isAddNewExpenseSidebarActive,
      isWithdrawMoneyExpenseSidebarActive,

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

      // Filter
      avatarText,
      deleteExpense,
      confirmCloseExpenses,
      isCloseMonthExpenseSidebarActive,
      salesReports,
      currentBalance,
      openWithdrawForm,
      resetCloseMonthExpenses,
      userIsAdmin,
      isAdmin,      
      currentUserIsAdmin,
      today,
      rangePicker,
      filterExpensesByDate,
      
    }
  },
}
</script>

<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
}
</style>

<style lang="scss">
@import '~@resources/scss/vue/libs/vue-select.scss';
@import '~@resources/scss/vue/libs/vue-flatpicker.scss';
@import '~@resources/scss/vue/libs/vue-select.scss';
</style>
>
