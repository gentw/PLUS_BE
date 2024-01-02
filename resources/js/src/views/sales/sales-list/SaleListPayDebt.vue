<template>
    <b-sidebar
      id="add-new-sale-sidebar"
      :visible="isPayDebtSaleActive"
      bg-variant="white"
      sidebar-class="sidebar-lg"
      shadow
      backdrop
      no-header
      right
      @hidden="resetForm"
      @change="(val) => $emit('update:is-pay-debt-sale-active', val)"
    >
      <template #default="{ hide }">
        <!-- Header -->
        <div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
          <h5 class="mb-0">
            Paguaj borxhin
          </h5>
  
          <feather-icon
            class="ml-1 cursor-pointer"
            icon="XIcon"
            size="16"
            @click="hide"
          />
  
        </div>

        <b-card>
          <div class="row" v-if="payDebtInfo != null">
            <div class="col-md-6">
              <h5 class="text-capitalize mb-75">
                Klienti:
              </h5>
              <b-card-text>
                {{payDebtInfo.client.name}}<br>
                ({{ payDebtInfo.service.name }})
              </b-card-text>
            </div>

            <div class="col-md-6">
              <h5 class="text-capitalize mb-75">
                Statusi:
              </h5>
              <b-card-text v-if="payDebtInfo.status == 2 && payDebtInfo.appointed == 1">
                Borxh / Termin
              </b-card-text>
              <b-card-text v-else>
                Borxh
              </b-card-text>
            </div>

            <div class="col-md-6 mt-2">
              <h5 class="text-capitalize mb-75">
                Paguar:
              </h5>
              <b-card-text>
                {{ payDebtInfo.debt_price }} {{ payDebtInfo.debt_currency }} 
              </b-card-text>
            </div>

            <div class="col-md-6 mt-2">
              <h5 class="text-capitalize mb-75">
                Borxhi mbetur:
              </h5>
              <b-card-text>
                <span v-if="payDebtInfo.appointed == 1">
                  {{ payDebtInfo.profit }} {{ payDebtInfo.main_currency }}
                </span>       
                <span v-else>
                  {{ payDebtInfo.debt_price_unpaid }} {{ payDebtInfo.debt_currency }}
                </span>               
              </b-card-text>
            </div>
          </div>
        </b-card>
  
        <!-- BODY -->
        <validation-observer
          #default="{ handleSubmit }"
          ref="refFormObserver"
        >

      

          <!-- Form -->
          <b-form
            class="p-2"
            @submit.prevent="handleSubmit(onSubmit)"
            @reset.prevent="resetForm"
          >
             
          <span style="color: red">Kujdes gjate plotesimit formes, procesi nuk kthehet pas!</span><br><br>
        <span>Nese klienti paguan borxhin komplet, perzgjedh statusin <b>'E Shitur'</b> dhe klienti do te largohet nga borxhi i mbetur me valuten e paracaktuar, ndersa nese paguan pjeserisht ose do ta percaktosh me valut tjeter zgjedh <b>'Borxh'</b> dhe vazhdo plotesimin e formes:</span><br><br>
  
            <validation-provider
              #default="validationContext"
              name="Statusi"
              rules="required"
              :custom-messages="{ required: 'Statusi eshte obligativ!'}"
            >
              <b-form-group
                label="Statusi"
                label-for="status"
                :state="getValidationState(validationContext)"
              >
                <v-select
                  v-model="saleData.status"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  :options="statusOptions"
                  :reduce="val => val.value"
                  :clearable="false"
                  input-id="status"
                />
                <b-form-invalid-feedback :state="getValidationState(validationContext)">
                  {{ validationContext.errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
  
           
            <validation-provider
                #default="validationContext"
                name="Menyra pageses"
                rules="required"
                :custom-messages="{ required: 'Menyra e pageses eshte obligativ!'}"
                v-if="saleData.status == 1"
              >
                <b-form-group
                  label="Menyra pageses"
                  label-for="payment_method"
                  :state="getValidationState(validationContext)"
                >
                  <v-select
                    v-model="saleData.payment_method"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    :options="paymentOptions"
                    :reduce="val => val.value"
                    :clearable="false"
                    input-id="status"
                  />
                  <b-form-invalid-feedback :state="getValidationState(validationContext)">
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
  
            <b-row v-if="saleData.status == 2">
              <!-- Per Page -->
              <b-col
                cols="6"
                md="6"
              >
                <validation-provider
                #default="validationContext"
                name="Borxhi i paguar"
                rules="required"
                :custom-messages="{ required: 'Borxhi eshte obligativ!'}"
              >
                <b-form-group
                  label="Borxhi i paguar"
                  label-for="debt_price"
                >
                  <b-form-input
                    id="debt_price"
                    v-model="saleData.debt_price"
                    :state="getValidationState(validationContext)"
                    trim
                  />
  
                  <b-form-invalid-feedback>
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
              </b-col>
  
              <!-- Search -->
              <!-- Per Page -->
              <b-col
                cols="6"
                md="6"
              >
                <validation-provider
                #default="validationContext"
                name="Valuta"
                rules="required"
                :custom-messages="{ required: 'Valuta borxhit eshte obligativ!'}"
              >
                <b-form-group
                  label="Valuta"
                  label-for="debt_currency"
                  :state="getValidationState(validationContext)"
                >
                  <v-select
                    v-model="saleData.debt_currency"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    :options="currencyOptions"
                    :reduce="val => val.value"
                    :clearable="false"
                    input-id="status"
                  />
                  <b-form-invalid-feedback :state="getValidationState(validationContext)">
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
              </b-col>
  
              <b-col
                cols="6"
                md="6"
              >
                <validation-provider
                #default="validationContext"
                name="Borxhi i mbetur"
                rules="required"
                :custom-messages="{ required: 'Borxhi i mbetur eshte obligativ!'}"
              >
                <b-form-group
                  label="Borxhi i mbetur"
                  label-for="debt_price_unpaid"
                >
                  <b-form-input
                    id="debt_price_unpaid"
                    v-model="saleData.debt_price_unpaid"
                    :state="getValidationState(validationContext)"
                    trim
                  />
  
                  <b-form-invalid-feedback>
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
              </b-col>
  
            </b-row>
  
            <!-- Form Actions -->
            <div class="d-flex mt-2">
              <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                variant="primary"
                class="mr-2"
                type="submit"
              >
                Paguaj
              </b-button>
              <b-button
                v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                type="button"
                variant="outline-secondary"
                @click="hide"
              >
                Hiqe
              </b-button>
            </div>
  
          </b-form>
        </validation-observer>
      </template>
    </b-sidebar>
  </template>
  
  <script>
  import { BSidebar, BRow, BCol, BForm, BFormGroup, BFormInput, BFormInvalidFeedback, BButton, BCard, BCardText } from 'bootstrap-vue'
  import { ValidationProvider, ValidationObserver } from 'vee-validate'
  import { onMounted, ref, watch } from '@vue/composition-api'
  import { required, alphaNum, email } from '@validations'
  import formValidation from '@core/comp-functions/forms/form-validation'
  import Ripple from 'vue-ripple-directive'
  import vSelect from 'vue-select'
  import store from '@/store'
  
  export default {
    components: {
      BSidebar,
      BForm,
      BFormGroup,
      BFormInput,
      BFormInvalidFeedback,
      BButton,
      vSelect,
      BRow,
      BCol,
      BCard, 
      BCardText,
  
      // Form Validation
      ValidationProvider,
      ValidationObserver,
    },
    directives: {
      Ripple,
    },
    model: {
      prop: 'isPayDebtSaleActive',
      event: 'update:is-pay-debt-sale-active',
    },
    props: {
        isPayDebtSaleActive: {
        type: Boolean,
        required: true,
      },
      currencyOptions: {
        type: Array,
        required: true,
      },
      statusOptions: {
        type: Array,
        required: true,
      },
  
      paymentOptions: {
        type: Array,
        require: true
      },
      userIdToPayDebt: {
        type: Number,
        require: true
      },
      saleIdToPayDebt: {
        type: Number,
        require: true
      },
      payDebtInfo: {
        type: Object,
        require: true
      }
    },
    data() {
      return {
        required,
        alphaNum,
        email,
      }
    },
    setup(props, { emit }) {
      const registerNewClient = ref(false);
      const blankSaleData = {
        client_id: '',
        sale_id: '',
        status: '',
        debt_price: '',
        debt_currency: 'euro',
        debt_price_unpaid: '',
        payment_method: ''
     }
  
      const saleData = ref(JSON.parse(JSON.stringify(blankSaleData)))
      
      const resetSaleData = () => {
        saleData.value = JSON.parse(JSON.stringify(blankSaleData))
      }
  
      const onSubmit = () => {
        saleData.value.client_id = props.userIdToPayDebt
        saleData.value.sale_id = props.saleIdToPayDebt
        
        store.dispatch('app-sale/payDebt', saleData.value).then(() => {
          emit('refetch-data')
          emit('update:is-pay-debt-sale-active', false)
        });   
        
      }
  
      const { refFormObserver, getValidationState, resetForm } = formValidation(resetSaleData)
  
   
  
      onMounted(() => {
      
        
      });
  
      return {
        saleData,
        onSubmit,
  
        refFormObserver,
        getValidationState,
        resetForm,
      
      }
    },
  }
  </script>
  
  <style lang="scss">
  @import '~@resources/scss/vue/libs/vue-select.scss';
  
  #add-new-sale-sidebar {
    .vs__dropdown-menu {
      max-height: 200px !important;
    }
  }
  </style>
  