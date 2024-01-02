<<template>

  <div>


    <sale-list-add-new
      :is-add-new-sale-sidebar-active.sync="isAddNewSaleSidebarActive"
      :status-options="statusOptions"
      :currency-options="currencyOptions"
      :payment-options="paymentOptions"
      @refetch-data="refetchData"
    />

    <sale-list-pay-debt
      :is-pay-debt-sale-active.sync="isPayDebtSaleActive"
      :currency-options="currencyOptions"
      :status-options="statusOptions"
      :payment-options="paymentOptions"
      :user-id-to-pay-debt="userIdToPayDebt"
      :sale-id-to-pay-debt="saleIdToPayDebt"
      :pay-debt-info="payDebtInfo"
      @refetch-data="refetchData"
    />

    <!-- Filters -->
    <sales-list-filters
      :status-filter.sync="statusFilter"
      :_status-options="_statusOptions"
      :date-range="(rangePicker != null) ? rangePicker : ''"
      :sales-data="(salesReportData != null) ? salesReportData : {}"
      :debt-data="(salesReportData != null) ? salesReportData : {}"
    />

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
                @input="filterSalesByDate"
               
              />
            </div>
            <!-- datepicker -->
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
              <b-button
                variant="primary"
                @click="isAddNewSaleSidebarActive = true"
              >
                <span class="text-nowrap">Shto nje shitje</span>
              </b-button>
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

        <template #cell(sold_price)="data">
          <b-media vertical-align="center">
            <span v-if="data.item.sold_price">
              <span v-if="data.item.status == 0">
                  0 {{ data.item.main_currency }}
              </span>
              <span v-else>
              {{ data.item.sold_price }} {{ data.item.main_currency }}
              </span>
            </span>
            <span v-else>
            ---
            </span>
          </b-media>
        </template>

        <template #cell(purchased_price)="data">
          <b-media vertical-salez="center">              
              <span v-if="data.item.purchased_price">
                <span v-if="data.item.status == 0">
                  0 {{ data.item.main_currency }}
                </span>
                <span v-else>
                  {{ data.item.purchased_price }} {{ data.item.main_currency }}
                </span>
                
              </span>
              <span v-else>
              ---
              </span>
          </b-media>
        </template>

        <template #cell(profit)="data">
          <b-media vertical-salez="center">
              <span v-if="data.item.profit">
                <span v-if="data.item.status == 0">
                  0 {{ data.item.main_currency }}
                </span>
                <span v-else>
                  {{ data.item.profit }} {{ data.item.main_currency }}
                </span>
               
              </span>
              <span v-else>
              ---
              </span>
          </b-media>
        </template>

        <template #cell(debt_price)="data">
          <b-media vertical-align="center">           
              <span v-if="data.item.debt_price">
                <span v-if="data.item.status == 0">
                  <!-- 0 {{ data.item.debt_currency }} -->
                  {{ data.item.debt_price }} {{ data.item.debt_currency }}
                </span>
                <span v-else>
                  {{ data.item.debt_price }} {{ data.item.debt_currency }}
                </span>
              
              </span>
              <span v-else>
              ---
              </span>
          </b-media>
        </template>

        <template #cell(debt_price_unpaid)="data">
          <b-media vertical-align="center">
            <span v-if="data.item.debt_price_unpaid">
              <span v-if="data.item.status == 0">
                  <!-- 0 {{ data.item.main_currency }} -->
                  {{ data.item.debt_price_unpaid }} {{ data.item.main_currency }}
                </span>
                <span v-else>
                  {{ data.item.debt_price_unpaid }} {{ data.item.main_currency }}
                </span>
              
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
          <span v-else-if="data.item.status == 2">
            <span style="color:red;">BORXH</span>
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
            <!-- <b-dropdown-item :to="{ name: 'apps-sales-view', params: { id: data.item.id } }">
              <feather-icon icon="FileTextIcon" />
              <span class="align-middle ml-50">Detaje</span>
            </b-dropdown-item> -->

            <!-- <b-dropdown-item v-if="data.item.status == 0">
              <feather-icon icon="ShoppingCartIcon" />
              <span class="align-middle ml-50">Shite perseri</span>
            </b-dropdown-item> -->

            <b-dropdown-item v-if="data.item.status == 1" @click="print(data.item.id, data.item.client_id)">
              <feather-icon icon="FileTextIcon" />
              <span class="align-middle ml-50">Printo (shpejt)</span>
            </b-dropdown-item>

            <b-dropdown-item v-if="data.item.status == 1" :href="'/sale_invoice/'+data.item.id+'/'+data.item.client_id" target="_blank">
              <feather-icon icon="FileTextIcon" />
              <span class="align-middle ml-50">Printo (manualisht)</span>
            </b-dropdown-item>


            <b-dropdown-item v-if="data.item.status == 2" @click="payDebt(data.item.id, data.item.client_id)">
              <feather-icon icon="ShoppingCartIcon" />
              <span class="align-middle ml-50">Paguaj borxhin</span>
            </b-dropdown-item>

            <b-dropdown-item v-if="data.item.status == 1 || data.item.status == 2" @click="cancelSale(data.item.id, data.item.client_id)">
              <feather-icon icon="XIcon" />
              <span class="align-middle ml-50">Anulo</span>
            </b-dropdown-item>

            <b-dropdown-item v-if="currentUserIsAdmin" @click="deleteSale(data.item.id)">
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
import SalesListFilters from './SalesListFilters.vue'
import useSalesList from './useSalesList'
import saleStoreModule from '../saleStoreModule'
import serviceStoreModule from '@/views/services/serviceStoreModule'
import useUsersList from '@/views/user/users-list/useUsersList';
import userStoreModule from '@/views/user/userStoreModule'
import SaleListAddNew from './SaleListAddNew.vue'
import SaleListPayDebt from './SaleListPayDebt.vue'
import flatPickr from 'vue-flatpickr-component'

export default {
  components: {
    SalesListFilters,
    SaleListAddNew,
    SaleListPayDebt,

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
    const SALE_APP_STORE_MODULE_NAME = 'app-sale'
    const SERVICE_APP_STORE_MODULE_NAME = 'app-service';
    const USER_APP_STORE_MODULE_NAME = 'app-user'

    // Register module
    if (!store.hasModule(SALE_APP_STORE_MODULE_NAME)) store.registerModule(SALE_APP_STORE_MODULE_NAME, saleStoreModule)

    if (!store.hasModule(SERVICE_APP_STORE_MODULE_NAME)) store.registerModule(SERVICE_APP_STORE_MODULE_NAME, serviceStoreModule)

    if (!store.hasModule(USER_APP_STORE_MODULE_NAME)) store.registerModule(USER_APP_STORE_MODULE_NAME, userStoreModule)
    
    const {
        userIsAdmin,
        isAdmin,
        
      } = useUsersList()

      const currentUserIsAdmin = computed(() => isAdmin.value);
    
    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(SALE_APP_STORE_MODULE_NAME)) store.unregisterModule(SALE_APP_STORE_MODULE_NAME)
      if (store.hasModule(SERVICE_APP_STORE_MODULE_NAME)) store.unregisterModule(SERVICE_APP_STORE_MODULE_NAME)
      if (store.hasModule(USER_APP_STORE_MODULE_NAME)) store.unregisterModule(USER_APP_STORE_MODULE_NAME) 
    })

    const isAddNewSaleSidebarActive = ref(false)
    const isPayDebtSaleActive = ref(false)

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

    const payDebt = (sale_id, client_id) => {
      saleIdToPayDebt.value = sale_id;
      userIdToPayDebt.value = client_id;
      isPayDebtSaleActive.value = true;

      store.dispatch('app-sale/fetchDebtSale', {
        saleId: sale_id, 
        clientId: client_id
      }).then((response)=>{
        payDebtInfo.value = response.data;
      });
    }

    const cancelSale = (saleId, clientId) => {
      const saleData = {
        sale_id: saleId,
        client_id: clientId
      }
      store.dispatch('app-sale/cancelSale', saleData).then(() => {
          refetchData()
      });
    }

    const filterSalesByDate = () => {
      console.log(rangePicker.value)
      
    }

    const print = (sale_id, client_id) => {
      invoiceUrl.value = '/sale_invoice/' + sale_id + '/'+client_id;
      nextTick(() => {
        printInvoice();
      });
    }

    const printInvoice = () => {
      const printWindow = window.open('', '_blank');

      const invoiceRequest = new XMLHttpRequest();
      invoiceRequest.open('GET', invoiceUrl.value);
      invoiceRequest.onreadystatechange = function() {
        if (invoiceRequest.readyState === 4 && invoiceRequest.status === 200) {
          printWindow.document.write(invoiceRequest.responseText);

          // Hide links and print immediately
          printWindow.document.querySelectorAll('a').forEach(function(link) {
            link.style.display = 'none!important';
          });
          printWindow.print();
          printWindow.close();
        }
      };
      invoiceRequest.send();
        
      }

    const computedTableColumns = computed(() => {
      const newTableColumns = [...tableColumns]; // Create a new array to avoid modifying the original

      if (statusFilter.value === null) {
        newTableColumns.splice(6, 0, { key: 'debt_price', sortable: true, label: 'Borxhi paguar' });
        newTableColumns.splice(7, 0, { key: 'debt_price_unpaid', sortable: true, label: 'Borxhi mbetur' });
      } else {
        const removeColumns = ['debt_price', 'debt_price_unpaid'];
        return newTableColumns.filter(column => !removeColumns.includes(column.key));
      }

      return newTableColumns; // Return the modified or unmodified array
    });
    

    onMounted(() => {
      // setInterval(()=>{
      //   if(salesReportData != null) {
      //     console.log(salesReportData.value.salesReport)
      //   }
      // },20000);

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
      deleteSale,      
    

      // Extra Filters
      statusFilter,
      salesReportData,
      
    } = useSalesList()

    return {
      // Sidebar
      isAddNewSaleSidebarActive,
      isPayDebtSaleActive,

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
      payDebt,
      // Filter
      userIdToPayDebt,
      saleIdToPayDebt,

      
      currencyOptions,
      statusOptions,
      paymentOptions,
      cancelSale,
      statusFilter,
      _statusOptions,
      filterSalesByDate,
      rangePicker,
      salesReportData,
      print,
      payDebtInfo,
      
      userIsAdmin,
      isAdmin,
      currentUserIsAdmin,
      deleteSale,
      computedTableColumns
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