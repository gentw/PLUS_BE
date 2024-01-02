<<template>

  <div>
    

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
        ref="refSaleListTable"
        class="position-relative"
        :items="fetchSales"
        responsive
        :fields="tableColumns"
        primary-key="id"
        :sort-by.sync="sortBy"
        show-empty
        empty-text="No matching records found"
        :sort-desc.sync="isSortDirDesc"
      >

        <!-- Column: Sale -->
        <template #cell(sale)="data">
          <b-media vertical-align="center">
            <!-- <b-link
              :to="{ name: 'apps-sales-view', params: { id: data.item.id } }"
              class="font-weight-bold d-block text-nowrap"
            >
              {{ data.item.client_name }}
            </b-link> -->
            <small class="text-muted">@{{ data.item.client_name }}</small>
          </b-media>
        </template>

        <template #cell(sale[0].sold_price)="data">
          <b-media vertical-align="center">
            <span v-if="data.item.sale[0].sold_price">
              {{ data.item.sale[0].sold_price }} {{ data.item.sale[0].main_currency }}
            </span>
            <span v-else>
            ---
            </span>
          </b-media>
        </template>

        <template #cell(sale[0].purchased_price)="data">
          <b-media vertical-salez="center">              
              <span v-if="data.item.sale[0].purchased_price">
                {{ data.item.sale[0].purchased_price.toFixed(2) }} {{ data.item.sale[0].main_currency }}
              </span>
              <span v-else>
              ---
              </span>
          </b-media>
        </template>

        <template #cell(sale[0].profit)="data">
          <b-media vertical-salez="center">
              <span v-if="data.item.sale[0].profit">
                {{ data.item.sale[0].profit.toFixed(2) }} {{ data.item.sale[0].main_currency }}
              </span>
              <span v-else>
              ---
              </span>
          </b-media>
        </template>

        <template #cell(debt_price)="data">
          <b-media vertical-align="center">           
              <span v-if="data.item.debt_price">
              {{ data.item.debt_price.toFixed(2) }} {{ data.item.debt_currency }}
              </span>
              <span v-else>
              ---
              </span>
          </b-media>
        </template>

        <template #cell(debt_price_unpaid)="data">
          <b-media vertical-align="center">
            <span v-if="data.item.debt_price_unpaid">
              {{ data.item.debt_price_unpaid.toFixed(2) }} {{ data.item.main_currency }}
              </span>
              <span v-else>
              ---
              </span>
          </b-media>
        </template>

        <template #cell(status)="data">
          <b-media vertical-align="center">
           <span v-if="data.item.status == 2 && data.item.appointed == 1">
            <span style="color:red;">BORXH / TERMIN</span>
          </span>
           <span v-else>
            {{resolveStatus(data.item.status)}}
           </span>
           
          </b-media>
        </template>


       

        <!-- Column: Role -->
        <!-- { key: 'client_name', sortable: true },
    { key: 'service_name', sortable: true },
    { key: 'sold_price', sortable: true },
    { key: 'purchased_price', sortable: true },
    { key: 'status', sortable: true }, -->
        <!-- <template #cell(role)="data">
          <div class="text-nowrap">
          
            <span class="align-text-top text-capitalize">
              <span v-if="data.item.role == 1">Administrator</span>
              <span v-else-if="data.item.role == 2">Punetor</span>
              <span v-else>Klient</span>
            </span>
          </div>
        </template> -->

      
        

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
              :total-rows="totalSales"
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
import { ref, onUnmounted, onMounted, nextTick, computed } from '@vue/composition-api'
import { avatarText } from '@core/utils/filter'
import serviceStoreModule from '@/views/services/serviceStoreModule'
import useUsersList from '@/views/user/users-list/useUsersList';
import useSalesList from './useSalesList';
import userStoreModule from '@/views/user/userStoreModule'
import flatPickr from 'vue-flatpickr-component'

export default {
  components: {

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
    flatPickr,
    vSelect,
  
  },
    
  setup() {
    const SERVICE_APP_STORE_MODULE_NAME = 'app-service';
    const USER_APP_STORE_MODULE_NAME = 'app-user'

    // Register module
   if (!store.hasModule(SERVICE_APP_STORE_MODULE_NAME)) store.registerModule(SERVICE_APP_STORE_MODULE_NAME, serviceStoreModule)

    if (!store.hasModule(USER_APP_STORE_MODULE_NAME)) store.registerModule(USER_APP_STORE_MODULE_NAME, userStoreModule)
    
    const {
        userIsAdmin,
        isAdmin,
        
      } = useUsersList()

      const currentUserIsAdmin = computed(() => isAdmin.value);
    
    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(SERVICE_APP_STORE_MODULE_NAME)) store.unregisterModule(SERVICE_APP_STORE_MODULE_NAME)
      if (store.hasModule(USER_APP_STORE_MODULE_NAME)) store.unregisterModule(USER_APP_STORE_MODULE_NAME) 
    })

  
    const userIdToPayDebt = ref(0)
    const saleIdToPayDebt = ref(0)

    const invoiceUrl = ref(null);

    const payDebtInfo = ref(null);
    

    const currencyOptions = [
      { label: 'Euro', value: 'euro' },
      { label: 'USD', value: 'usd' },
      { label: 'CHF', value: 'chf'}
    ]

    const statusOptions = [
      { label: 'E shitur', value: 1 },
      { label: 'Borxh', value: 2 },
    ]
    
    const paymentOptions = [
      { label: 'CASH', value: 'cash' },
      { label: 'Permes bankes', value: 'bank' },     
    ]

    // for sales filter
    const _statusOptions = [
      { label: 'E shitur', value: '1' },
      { label: 'Borxh', value: '2' },
      { label: 'E Anuluar', value: '0' },
    ]

    const filterSalesByDate = () => {
      console.log(rangePicker.value)
      
    }

   


    onMounted(() => {
     
      userIsAdmin(); 
      
    });

  

    const {
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
      refetchData,
      resolveStatus,
      rangePicker,
           
    

      // Extra Filters
      statusFilter,
      salesReportData
    } = useSalesList()

    return {
      // Sidebar
      

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
      refetchData,
      resolveStatus,
      salesReportData,

      
      currencyOptions,
      statusOptions,
      paymentOptions,
      statusFilter,
      _statusOptions,
      filterSalesByDate,
      rangePicker,
      
      userIsAdmin,
      isAdmin,
      currentUserIsAdmin,
     
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
@import '~@resources/scss/vue/libs/vue-flatpicker.scss';
@import '~@resources/scss/vue/libs/vue-select.scss';
</style>
>