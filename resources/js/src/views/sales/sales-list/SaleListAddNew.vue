<template>
  <b-sidebar
    id="add-new-sale-sidebar"
    :visible="isAddNewSaleSidebarActive"
    bg-variant="white"
    sidebar-class="sidebar-lg"
    shadow
    backdrop
    no-header
    right
    @hidden="resetForm"
    @change="(val) => $emit('update:is-add-new-sale-sidebar-active', val)"
  >
    <template #default="{ hide }">
      <!-- Header -->
      <div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
        <h5 class="mb-0">
          Shto shitje te re
        </h5>

        <feather-icon
          class="ml-1 cursor-pointer"
          icon="XIcon"
          size="16"
          @click="hide"
        />

      </div>

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

        <validation-provider
            #default="validationContext"
            name="Klienti"
            rules="required"
            v-if="registerNewClient"           
            :custom-messages="{ required: 'Emri eshte obligativ!'}"
          >
            <b-form-group
              label="Klienti"
              label-for="new_client"
            >
              <b-form-input
                id="new_client"
                v-model="saleData.new_client"
                autofocus
                :state="getValidationState(validationContext)"
                trim
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
        <validation-provider
            #default="validationContext"
            name="Klienti"
            rules="required"
            :custom-messages="{ required: 'Emri eshte obligativ!'}"
            v-else
          >
            <b-form-group
              label="Klienti"
              label-for="client_id"
              :state="getValidationState(validationContext)"
            >
              <v-select
                v-model="saleData.client_id"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="clientsList"
                :reduce="val => val.value"
                :clearable="false"
                input-id="client_id"
                @search="searchClients"
              >
              <template v-slot:no-options>
                <span @click="registerClientManually">Klienti nuk u gjet, kliko ketu qe ta regjistrosh manualisht</span>
              </template>
            </v-select>
              <b-form-invalid-feedback :state="getValidationState(validationContext)">
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <!--- Termin -->
          <b-form-group
              >
          <b-form-checkbox
            v-model="saleData.appointed"
            @change="onAppointSwitch"
            name="check-button"
            switch
            inline
          >
            Termin
          </b-form-checkbox>
            </b-form-group>

          <!-- valuta-->
          <validation-provider
              #default="validationContext"
              name="Valuta"
              rules="required"
              :custom-messages="{ required: 'Valuta eshte obligativ!'}"
            >
              <b-form-group
                label="Valuta"
                label-for="main_curency"
                :state="getValidationState(validationContext)"
              >
                <v-select
                  v-model="saleData.main_currency"
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


          <!-- Cmimi Shitjes -->
          <validation-provider
            #default="validationContext"
            name="Cmimi shitjes"
            rules="required|doublerequired"
            :custom-messages="{ required: 'Cmimi shitjes eshte obligativ!'}"
            v-if="saleData.appointed == 0"  
          >
            <b-form-group
              label="Cmimi shitjes"
              label-for="sold_price"                        
            >
              <b-form-input
                id="sold_price"
                v-model="saleData.sold_price"
                ref="sold_price"
                :state="getValidationState(validationContext)"
                trim
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <!-- Cmimi Blerjes -->
          <validation-provider
            #default="validationContext"
            name="Cmimi blerjes"
            rules="required|doublerequired"
            :custom-messages="{ required: 'Cmimi blerjes eshte obligativ!'}"   
            v-if="saleData.appointed == 0"                     
          >
            <b-form-group
              label="Cmimi blerjes"
              label-for="purchased_price"
            >
              <b-form-input
                id="purchased_price"
                ref="purchased_price"
                v-model="saleData.purchased_price"
                :state="getValidationState(validationContext)"
                trim
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>


          <!-- Fitimi -->
          <validation-provider
            #default="validationContext"
            name="Fitimi"
            rules="required|doublerequired"
            :custom-messages="{ required: 'Fitimi eshte obligativ!'}"
            v-if="saleData.appointed == 1"
          >
            <b-form-group
              label="Fitimi"
              label-for="profit"
            >
              <b-form-input
                id="profit"
                v-model="saleData.profit"
                autofocus
                :state="getValidationState(validationContext)"
                trim
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          
          <!-- Service -->
        <validation-provider
            #default="validationContext"
            name="Sherbimi"
            rules="required"
            :custom-messages="{ required: 'Sherbimi eshte obligativ!'}"
            
          >
            <b-form-group
              label="Sherbimi"
              label-for="service_id"
              :state="getValidationState(validationContext)"
            >
              <v-select
                v-model="saleData.service_id"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="servicesList"
                :reduce="val => val.value"
                :clearable="false"
                input-id="service_id"
              />
              <b-form-invalid-feedback :state="getValidationState(validationContext)">
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>


          <b-form-group
          v-if="saleData.appointed == 1"
            >
             <p style="color:red">Jeni duke caktuar termin, statusi = BORXH,<br> vazhdo me plotesimin e fushave:</p>
            </b-form-group>

          <validation-provider
            #default="validationContext"
            name="Statusi"
            rules="required"
            :custom-messages="{ required: 'Statusi eshte obligativ!'}"
            v-if="saleData.appointed == 0"
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
              name="Borxhi i mbetur"
              rules="required|doublerequired"
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
            <!--- Termin -->
            <b-form-group
                >
            <b-form-checkbox
              v-model="saleData.do_pay_debt"
              name="check-button"
              switch
              inline
              style="margin-top:20px;"
            >
              Do te paguaj
            </b-form-checkbox>
              </b-form-group>
            
          </b-col>

          <b-col
              cols="6"
              md="6"
              v-if="saleData.do_pay_debt"
            >
              <validation-provider
              #default="validationContext"
              name="Borxhi i paguar"
              rules="required|doublerequired"
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

            

          </b-row>

          <!-- Form Actions -->
          <div class="d-flex mt-2">
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="primary"
              class="mr-2"
              type="submit"
            >
              Shto
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
import { BSidebar, BRow, BCol, BForm, BFormGroup, BFormInput, BFormInvalidFeedback, BButton } from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { onMounted, ref, watch, nextTick } from '@vue/composition-api'
import { required, alphaNum, email } from '@validations'

// import { regex } from 'vee-validate/dist/rules';
import formValidation from '@core/comp-functions/forms/form-validation'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import { BFormCheckbox, BCardText } from 'bootstrap-vue'
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

    // Form Validation
    ValidationProvider,
    ValidationObserver,
    BFormCheckbox
  },
  directives: {
    Ripple,
  },
  model: {
    prop: 'isAddNewSaleSidebarActive',
    event: 'update:is-add-new-sale-sidebar-active',
  },
  props: {
    isAddNewSaleSidebarActive: {
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
      new_client: '',
      sold_price: '',
      purchased_price: '',
      main_currency: 'euro',
      profit: '',
      service_id: '',
      date: '',
      status: 1,
      debt_price: '',
      debt_currency: 'euro',
      debt_price_unpaid: '',
      payment_method: '',
      appointed: 0,
      do_pay_debt: 0

    }

    const saleData = ref(JSON.parse(JSON.stringify(blankSaleData)))
    const clientsList = ref([]);
    const servicesList = ref([]);

    extend('doublerequired', {
      validate: (value) => {
        const regex = /^\d+(\.\d{1,2})?$/;
        return regex.test(value);
      },
      message: 'Cmimi i shkruar nuk lejohet (shembujt e lejuar: 50 ose 50.25)!',
      
    });

   
    const resetSaleData = () => {
      saleData.value = JSON.parse(JSON.stringify(blankSaleData))
    }


    const onSubmit = () => {
      // const regexPattern = /^(\d+|\d+\.\d{1,2})$/;
      // const mainCurrency = saleData.value.main_currency;

      // // Perform the regex check
      // if (!regexPattern.test(mainCurrency)) {
      //   // Set the field as invalid
      //   refFormObserver.value.setErrors({
      //     main_currency: ['Invalid format']
      //   });

      //   // Exit the function early
      //   return;
      // }
      store.dispatch('app-sale/addSale', saleData.value).then(() => {
        emit('refetch-data')
        emit('update:is-add-new-sale-sidebar-active', false)
        registerNewClient.value = false;
      });   
      
    }

    const { refFormObserver, getValidationState, resetForm } = formValidation(resetSaleData)

    const searchClients = (keyword) => {
      saleData.value.new_client = keyword;
      setTimeout(()=> {
        store.dispatch('app-sale/searchUserByName', keyword).then((response) => {
          clientsList.value = response.data;

        });          
      },500 );    
    }

    const fetchServicesInDropDownList = () => {
      store.dispatch('app-service/fetchAllServices').then((response) => {
        servicesList.value = response.data;
      });
    }

    const registerClientManually = () => {
      registerNewClient.value = true;
    }

    watch(saleData.value, (newValue, oldValue) => {
      if (newValue.new_client === '' && registerNewClient.value) {
        registerNewClient.value = false;
      }
    })

    const onAppointSwitch = () => {
      if (saleData.value.appointed == 1) {
        saleData.value.status = 2;
      } else {
        saleData.value.status = 1;
      }
    }

   
    onMounted(() => {
      setTimeout(() => {
        fetchServicesInDropDownList();
      }, 1000);
      
    });

    return {
      saleData,
      onSubmit,

      refFormObserver,
      getValidationState,
      resetForm,
      searchClients,
      clientsList,
      registerNewClient,
      registerClientManually,
      fetchServicesInDropDownList,
      servicesList,
      onAppointSwitch
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
