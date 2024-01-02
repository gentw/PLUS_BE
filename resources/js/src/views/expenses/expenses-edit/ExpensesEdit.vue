<template>
  <component :is="serviceData === undefined ? 'div' : 'b-card'">

    <!-- Alert: No item found -->
    <b-alert
      variant="danger"
      :show="serviceData === undefined"
    >
      <h4 class="alert-heading">
        Error fetching services data
      </h4>
      <div class="alert-body">
        No service found with this service id. Check
        <b-link
          class="alert-link"
          :to="{ name: 'apps-services-list'}"
        >
          Service List
        </b-link>
        for other services.
      </div>
    </b-alert>

    <b-tabs
      v-if="serviceData"
      pills
    >

      <!-- Tab: Account -->
      <b-tab active>
        <template #title>
          <feather-icon
            icon="ListIcon"
            size="16"
            class="mr-0 mr-sm-50"
          />
          <span class="d-none d-sm-inline">Service info</span>
        </template>
        <service-edit-tab-info
          :service-data="serviceData"
          class="mt-2 pt-75"
        />
      </b-tab>



    </b-tabs>
  </component>
</template>

<script>
import {
  BTab, BTabs, BCard, BAlert, BLink,
} from 'bootstrap-vue'
import { ref, onUnmounted } from '@vue/composition-api'
import router from '@/router'
import store from '@/store'
import serviceStoreModule from '../serviceStoreModule'
import ServiceEditTabInfo from './ServiceEditTabInfo.vue'

export default {
  components: {
    BTab,
    BTabs,
    BCard,
    BAlert,
    BLink,

    ServiceEditTabInfo,
  },
  setup() {
    const serviceData = ref(null)

    const SERVICE_APP_STORE_MODULE_NAME = 'app-service'

    // Register module
    if (!store.hasModule(SERVICE_APP_STORE_MODULE_NAME)) store.registerModule(SERVICE_APP_STORE_MODULE_NAME, serviceStoreModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(SERVICE_APP_STORE_MODULE_NAME)) store.unregisterModule(SERVICE_APP_STORE_MODULE_NAME)
    })

    store.dispatch('app-service/fetchService', { id: router.currentRoute.params.id })
      .then(response => { serviceData.value = response.data })
      .catch(error => {
        if (error.response.status === 404) {
          serviceData.value = undefined
        }
      })

    return {
      serviceData,
    }
  },
}
</script>

<style>

</style>
