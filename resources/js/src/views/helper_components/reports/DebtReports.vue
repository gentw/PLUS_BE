<template>
    <b-card
      class="card-transaction"
      no-body
    >
   
  
      <b-card-body class="d-flex">
        <div
          class="transaction-item"
        >
          <b-media no-body>
            <b-media-aside class="align-self-center">           
                <feather-icon
                    size="18"
                    :icon="'BarChart2Icon'"
                />
            </b-media-aside>
            <b-media-body>
              <h6 class="transaction-title">
                {{data.debt_count}}
              </h6>
              <small>Numri borxheve</small>
            </b-media-body>
          </b-media>
        </div>

        <div class="d-flex flex-column transaction-item">
            <div
            class="transaction-item"
            >
            <b-media no-body>            
                <b-media-body>
                <h6 class="transaction-title">
                    Borxh (Euro): <strong>{{data.debt_unpaid_eur.toFixed(2)}}</strong>
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
                    Borxh (CHF): <strong>{{data.debt_unpaid_chf.toFixed(2)}}</strong>
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
                    Borxh (USD): <strong>{{data.debt_unpaid_usd.toFixed(2)}}</strong>
                </h6>
                </b-media-body>
            </b-media>
            </div>
        </div>
      </b-card-body>
    </b-card>

    

    
  </template>
  
  <script>
  import {
    BCard, BCardHeader, BCardTitle, BCardBody, BMediaBody, BMedia, BMediaAside, BAvatar, BDropdown, BDropdownItem,
  } from 'bootstrap-vue'
  
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
      BDropdown,
      BDropdownItem,
    },
    props: {
    data: {
        type: Object,
        default: () => [],
      },
    },
  }
  </script>
  <style scoped>
    .card-transaction .transaction-item {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        margin-right: 45px;
    }
    .card-transaction {
        margin-bottom:0;
    }
  </style>