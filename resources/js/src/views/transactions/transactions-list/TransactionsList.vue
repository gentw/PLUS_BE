<<template>

  <div>

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
            md="6"
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
             
            </div>
          </b-col>
        </b-row>

      </div>

      <b-table
        ref="refTransactionListTable"
        class="position-relative"
        :items="fetchTransactions"
        responsive
        :fields="tableColumns"
        primary-key="id"
        :sort-by.sync="sortBy"
        show-empty
        empty-text="No matching records found"
        :sort-desc.sync="isSortDirDesc"
      >

        <!-- Column: User -->
        <template #cell(transaction)="data">
          <b-media vertical-align="center">
            <template #aside>
              <b-avatar
                size="32"
                :src="'default'"
                :text="avatarText(data.item.name)"
                :variant="`light-primary`"
                :to="{ name: 'apps-transactions-view', params: { id: data.item.id } }"
              />
            </template>
            <b-link
              :to="{ name: 'apps-transactions-view', params: { id: data.item.id } }"
              class="font-weight-bold d-block text-nowrap"
            >
              {{ data.item.name }}
            </b-link>
            <small class="text-muted">@{{ data.item.name }}</small>
          </b-media>
        </template>

        <template #cell(type)="data">
          <b-media vertical-align="center">           
              <span v-if="data.item.type == 'terheqje'">
                <span style="color: red">
               Terheqje
                </span>
              </span>
              <span v-else>
              Depozit
              </span>
          </b-media>
        </template>

        <template #cell(amount)="data">
          <b-media vertical-align="center">           
              <span v-if="data.item.type == 'terheqje'">
                <span>
               -{{ data.item.amount }} Euro
                </span>
              </span>
              <span v-else>
                +{{ data.item.amount }} Euro
              </span>
          </b-media>
        </template>
        <template #cell(cmimi)="data">
          <b-media vertical-align="center">           
              <span v-if="data.item.cmimi">
                <span>
               {{ data.item.cmimi }} Euro
                </span>
              </span>
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

            <!-- <b-dropdown-item :to="{ name: 'apps-transactions-edit', params: { id: data.item.id } }">
              <feather-icon icon="EditIcon" />
              <span class="align-middle ml-50">Ndrysho</span>
            </b-dropdown-item> -->

            <b-dropdown-item @click="deleteTransaction(data.item.id)">
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
              :total-rows="totalTransactions"
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
import { ref, onUnmounted, onMounted } from '@vue/composition-api'
import { avatarText } from '@core/utils/filter'
// import UsersListFilters from './UsersListFilters.vue'
import useTransactionsList from './useTransactionsList'
import transactionStoreModule from '../transactionStoreModule'


export default {
  components: {
    // UsersListFilters,
    
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
  },
  setup() {
    const TRANSACTION_APP_STORE_MODULE_NAME = 'app-transaction'
    // Register module
    if (!store.hasModule(TRANSACTION_APP_STORE_MODULE_NAME)) store.registerModule(TRANSACTION_APP_STORE_MODULE_NAME, transactionStoreModule)

    
    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(TRANSACTION_APP_STORE_MODULE_NAME)) store.unregisterModule(TRANSACTION_APP_STORE_MODULE_NAME)
    })

       
    const {
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
      deleteTransaction,
      refetchData,
    

    
    } = useTransactionsList()

    return {
      // Sidebar
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
      deleteTransaction,
      refetchData,

      // Filter
      avatarText, 
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
</style>
>