<template>
    <b-sidebar
      id="close-month-expense-sidebar"
      :visible="isCloseMonthExpenseSidebarActive"
      bg-variant="white"
      sidebar-class="sidebar-lg"
      shadow
      backdrop
      no-header
      right
      @hidden="resetForm"
      @change="(val) => $emit('update:is-close-month-expense-sidebar-active', val)"
    >
      <template #default="{ hide }">
        <!-- Header -->
        <div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
          <h5 class="mb-0">
            Mbylle kete muaj
          </h5>
  
          <feather-icon
            class="ml-1 cursor-pointer"
            icon="XIcon"
            size="16"
            @click="hide"
          />
  
        </div>

        <b-card
      class="card-transaction"
      no-body
      v-if="Object.keys(salesReports).length"
    >
  
      <b-card-body class="d-flex">
        
        <div class="d-flex flex-column transaction-item">
          <div
            class="transaction-item"
            >
            <h5 style="color: red">Gjithsejt per muajin aktual:</h5>
            </div>
            <div
            class="transaction-item"
            >
            <b-media no-body>           
                <b-media-body>
                <h6 class="transaction-title">
                    Shitjet (EURO): <strong>{{salesReports.total_sales_euro.toFixed(2)}}</strong>
                </h6>
                </b-media-body>
            </b-media>
            </div>
            <div
            class="transaction-item"
            >
            <b-media no-body>           
                <b-media-body>
                <h6 class="transaction-title">
                    Shitjet (USD): <strong>{{salesReports.total_sales_usd.toFixed(2)}}</strong>
                </h6>
                </b-media-body>
            </b-media>
            </div>

            <div
            class="transaction-item"           
            >
            <b-media no-body>           
                <b-media-body>
                <h6 class="transaction-title">
                    Shitjet (CHF): <strong>{{salesReports.total_sales_chf.toFixed(2)}}</strong>
                </h6>
                </b-media-body>
            </b-media>
            </div>
            <br>
            <div
            class="transaction-item"
            style="padding-top: 10px; border-top: 1px solid #000;"
            >
            <b-media no-body>           
                <b-media-body>
                <h6 class="transaction-title">
                    Fitimi (EURO): <strong>{{salesReports.total_profit_euro.toFixed(2)}}</strong>
                </h6>
                </b-media-body>
            </b-media>
            </div>
            <div
            class="transaction-item"
            >
            <b-media no-body>           
                <b-media-body>
                <h6 class="transaction-title">
                    Fitimi (USD): <strong>{{salesReports.total_profit_usd.toFixed(2)}}</strong>
                </h6>
                </b-media-body>
            </b-media>
            </div>

            <div
            class="transaction-item"
            >
            <b-media no-body>           
                <b-media-body>
                <h6 class="transaction-title">
                    Fitimi (CHF): <strong>{{salesReports.total_profit_chf.toFixed(2)}}</strong>
                </h6>
                </b-media-body>
            </b-media>
            </div>

            <div
            class="transaction-item"
            v-if="salesReports.hasOwnProperty('total_expense_price')"
            style="padding-top: 10px; border-top: 1px solid #000;"
            >
            <b-media no-body>           
                <b-media-body>
                <h6 class="transaction-title">
                    Shpenzimet (EURO): <strong>{{salesReports.total_expense_price.toFixed(2)}}</strong>
                </h6>
                </b-media-body>
            </b-media>
            </div>

            
        </div>

        

      </b-card-body>
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

          <!-- Cmimi -->
        <validation-provider
            #default="validationContext"
            name="total_sales_euro"
            rules="required|doublerequired"
            :custom-messages="{ required: 'Totali eshte obligative!'}"
          >
            <b-form-group
              label="Totali shitjeve ne Euro"
              label-for="total_sales_euro"                        
            >
              <b-form-input
                id="total_sales_euro"
                v-model="expenseData.total_sales_euro"
                ref="total_sales_euro"
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
            name="Total_fitimi"
            rules="required|doublerequired"
            :custom-messages="{ required: 'Fitimi eshte obligative!'}"
          >
            <b-form-group
              label="Totali fitimit ne Euro"
              label-for="total_profit_euro"                        
            >
              <b-form-input
                id="total_sales_euro"
                v-model="expenseData.total_profit_euro"
                ref="total_profit_euro"
                :state="getValidationState(validationContext)"
                trim
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
  
  
            <!-- Form Actions -->
            <div class="d-flex mt-2">
              <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                variant="primary"
                class="mr-2"
                type="submit"
              >
                Perfundo
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
  import { BCard, BCardHeader, BCardTitle, BCardBody, BMediaBody, BMedia, BMediaAside, BAvatar, BSidebar, BForm, BFormGroup, BFormInput, BFormInvalidFeedback, BButton } from 'bootstrap-vue'
  import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
  import { ref } from '@vue/composition-api'
  import { required, alphaNum, email } from '@validations'
  import formValidation from '@core/comp-functions/forms/form-validation'
  import Ripple from 'vue-ripple-directive'
  import vSelect from 'vue-select'
  import store from '@/store'
  import { useToast } from 'vue-toastification/composition'
  import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

  
  export default {
    components: {
      BCard,
      BCardHeader,
      BCardTitle,
      BCardBody,
      BMediaBody,
      BMedia,
      BMediaAside,
      BAvatar,
      BSidebar,
      BForm,
      BFormGroup,
      BFormInput,
      BFormInvalidFeedback,
      BButton,
      vSelect,
  
      // Form Validation
      ValidationProvider,
      ValidationObserver,
    },
    directives: {
      Ripple,
    },
    model: {
      prop: 'isCloseMonthExpenseSidebarActive',
      event: 'update:is-close-month-expense-sidebar-active',
    },
    props: {
      isCloseMonthExpenseSidebarActive: {
        type: Boolean,
        required: true,
      },
      salesReports: {
        type: Object,
        default: () => {},
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
      const blankExpenseData = {
        total_sales_euro: '',
        total_profit_euro: ''
      }

      extend('doublerequired', {
        validate: (value) => {
          const regex = /^\d+(\.\d{1,2})?$/;
          return regex.test(value);
        },
        message: 'Cmimi i shkruar nuk lejohet (shembujt e lejuar: 50 ose 50.25)!',
        
      });
  
      const expenseData = ref(JSON.parse(JSON.stringify(blankExpenseData)))
      const resetExpenseData = () => {
        expenseData.value = JSON.parse(JSON.stringify(blankExpenseData))
      }
      const toast = useToast();
  
      const onSubmit = () => {
      store.dispatch('app-expense/closeThisMonth', expenseData.value).then((response) => {
        if(response.data == 'success') {
          emit('refetch-data')
          emit('update:is-close-month-expense-sidebar-active', false)
        } else {
          toast({
            component: ToastificationContent,
            props: {
              title: response.data,
              icon: 'AlertTriangleIcon',
              variant: 'danger',
            },
          })
        }
        
      })
    }
      const { refFormObserver, getValidationState, resetForm } = formValidation(resetExpenseData)
  
      return {
        expenseData,
        onSubmit,
  
        refFormObserver,
        getValidationState,
        resetForm
      }
    },
  }
  </script>
  
  <style lang="scss">
  @import '~@resources/scss/vue/libs/vue-select.scss';
  
  #close-month-expense-sidebar {
    .vs__dropdown-menu {
      max-height: 200px !important;
    }
  }

  .card-transaction .transaction-item{
    align-items: flex-start;
  }
  </style>
  