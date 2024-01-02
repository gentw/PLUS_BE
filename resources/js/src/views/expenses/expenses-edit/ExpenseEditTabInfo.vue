<template>
    <div>
  
      <!-- Media -->
      <b-media class="mb-2">
      
        <h4 class="mb-1">
          {{ serviceData.name }}
        </h4>
        <div class="d-flex flex-wrap">
          
          <b-button
            variant="outline-secondary"
            class="ml-1" style="margin-left:0 !important;"
          >
            <span class="d-none d-sm-inline">Remove</span>
            <feather-icon
              icon="TrashIcon"
              class="d-inline d-sm-none"
            />
          </b-button>
        </div>
      </b-media>
  
      <!-- User Info: Input Fields -->
      <b-form>
        <b-row>
  
          <!-- Field: Username -->
          <b-col
            cols="12"
            md="6"
          >
            <b-form-group
              label="Emri"
              label-for="name"
            >
              <b-form-input
                id="name"
                v-model="serviceData.name"
              />
            </b-form-group>
          </b-col>  
        </b-row>
      </b-form>
  
      <!-- Action Buttons -->
      <b-button
        variant="primary"
        class="mb-1 mb-sm-0 mr-0 mr-sm-1"
        :block="$store.getters['app/currentBreakPoint'] === 'xs'"
      >
        Ruaj Ndryshimet
      </b-button>
      <b-button
        variant="outline-secondary"
        type="reset"
        :block="$store.getters['app/currentBreakPoint'] === 'xs'"
      >
        Reseto
      </b-button>
    </div>
  </template>
  
  <script>
  import {
    BButton,
    BMedia,
    BAvatar,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BForm,
    BTable,
    BCard,
    BCardHeader,
    BCardTitle,
    BFormCheckbox,
  } from 'bootstrap-vue'
  import { avatarText } from '@core/utils/filter'
  import vSelect from 'vue-select'
  import { useInputImageRenderer } from '@core/comp-functions/forms/form-utils'
  import { ref } from '@vue/composition-api'
  import { onMounted } from '@vue/composition-api'
import useServicesList from '../services-list/useServicesList'
  
  export default {
    components: {
      BButton,
      BMedia,
      BAvatar,
      BRow,
      BCol,
      BFormGroup,
      BFormInput,
      BForm,
      BTable,
      BCard,
      BCardHeader,
      BCardTitle,
      BFormCheckbox,
      vSelect,
    },
    props: {
      serviceData: {
        type: Object,
        required: true,
      },
    },
    
    setup(props) {  
  
     
  
      onMounted(() => {
  
      })
  
  
      return {
        
  
       
      }
    },
  }
  </script>
  
  <style lang="scss">
  @import '~@resources/scss/vue/libs/vue-select.scss';
  </style>
  