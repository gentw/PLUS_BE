<template>
 
  <b-sidebar
    id="add-new-expense-sidebar"
    :visible="isTransactionsListEditSidebarActive"
    bg-variant="white"
    sidebar-class="sidebar-lg"
    shadow
    backdrop
    no-header
    right
    @hidden="resetForm"
    @change="(val) => $emit('update:is-transactions-list-edit-sidebar-active', val)"
  >
    <template #default="{ hide }">
      <!-- Header -->
      <div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
        <h5 class="mb-0">
         Ndrysho
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
            name="Barcode"
            rules="required"
          >
            <b-form-group
              label="Barkodi"
              label-for="name"
            >
              <b-form-input
                id="name"
                v-model="expenseDatas.barcode"
                autofocus
                :state="getValidationState(validationContext)"
                trim
                placeholder="Barkodi"
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <validation-provider
            #default="validationContext"
            name="Emri"
            rules="required"
          >
            <b-form-group
              label="Emri"
              label-for="name"
            >
              <b-form-input
                id="name"
                v-model="expenseDatas.emri"
                autofocus
                :state="getValidationState(validationContext)"
                trim
                placeholder="Emri"
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>


          <validation-provider
            #default="validationContext"
            name="Njesia"
            rules="required"
          >
            <b-form-group
              label="Njesia"
              label-for="name"
            >
              <b-form-input
                id="name"
                v-model="expenseDatas.njesia"
                autofocus
                :state="getValidationState(validationContext)"
                trim
                placeholder="Njesia"
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

        
          <validation-provider
            #default="validationContext"
            name="Sasia"
            rules="required"
          >
            <b-form-group
              label="Sasia"
              label-for="name"
            >
              <b-form-input
                id="name"
                v-model="expenseDatas.sasia"
                autofocus
                :state="getValidationState(validationContext)"
                trim
                placeholder="Sasia"
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <validation-provider
            #default="validationContext"
            name="Cmimi"
            rules="required"
          >
            <b-form-group
              label="Cmimi"
              label-for="name"
            >
              <b-form-input
                id="name"
                v-model="expenseDatas.cmimi"
                autofocus
                :state="getValidationState(validationContext)"
                trim
                placeholder="Cmimi"
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
              Ndrysho
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
import { BSidebar, BForm, BFormGroup, BFormInput, BFormInvalidFeedback, BButton } from 'bootstrap-vue'
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
    prop: 'isTransactionsListEditSidebarActive',
    event: 'update:is-transactions-list-edit-sidebar-active',
  },
  props: {
    isTransactionsListEditSidebarActive: {
      type: Boolean,
      required: true,
    },

    expenseDatas: {
      type: Object,
      required: true
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
    const blankExpenseData = {
      barcode: '',
      emri: '',
      njesia: '',
      sasia: '',
      cmimi: ''
    }

    const expenseDatas = ref(JSON.parse(JSON.stringify(props.expenseDatas)));

    extend('doublerequired', {
      validate: (value) => {
        const regex = /^\d+(\.\d{1,2})?$/;
        return regex.test(value);
      },
      message: 'Cmimi i shkruar nuk lejohet (shembujt e lejuar: 50 ose 50.25)!',
      
    });
    const toast = useToast()
   
    const resetExpenseData = () => {
      props.expenseDatas = JSON.parse(JSON.stringify(blankExpenseData))
    }

    const onSubmit = () => {
      store.dispatch('app-transaction/updateStockProduct', props.expenseDatas).then((response) => {
        if(response.data == 'success') {
          emit('refetch-data')
          emit('update:is-transactions-list-edit-sidebar-active', false)
          emit('fetch-total-of-vlera-sum')
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
      expenseDatas,
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

#add-new-expense-sidebar {
  .vs__dropdown-menu {
    max-height: 200px !important;
  }
}
</style>
