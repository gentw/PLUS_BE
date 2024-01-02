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
                {{data.sales_count}}
              </h6>
              <small>Numri shitjeve</small>
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
                    Fitimi (EURO): <strong>{{data.profit_euro.toFixed(2)}}</strong>
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
                    Fitimi (USD): <strong>{{data.profit_usd.toFixed(2)}}</strong>
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
                    Fitimi (CHF): <strong>{{data.profit_chf.toFixed(2)}}</strong>
                </h6>
                </b-media-body>
            </b-media>
            </div>
        </div>

        <div class="d-flex flex-column transaction-item">
            <div
            class="transaction-item"
            >
            <b-media no-body>           
                <b-media-body>
                <h6 class="transaction-title">
                    Shitjet (EURO): <strong>{{data.total_sales_euro.toFixed(2)}}</strong>
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
                    Shitjet (USD): <strong>{{data.total_sales_usd.toFixed(2)}}</strong>
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
                    Shitjet (CHF): <strong>{{data.total_sales_chf.toFixed(2)}}</strong>
                </h6>
                </b-media-body>
            </b-media>
            </div>
        </div>

        

        <!-- <div class="d-flex flex-column transaction-item">
            <div
            class="transaction-item"
            >
            <b-media no-body>            
                <b-media-body>
                <h6 class="transaction-title">
                    Nr pagesave CASH: <strong>{{data.sales_cash}}</strong>
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
                    Nr pagesave BANK: <strong>{{data.sales_bank}}</strong>
                </h6>
                </b-media-body>
            </b-media>
            </div>

           
        </div> -->
      </b-card-body>
    </b-card>
  </template>
  
  <script>
  import {
    BCard, BCardHeader, BCardTitle, BCardBody, BMediaBody, BMedia, BMediaAside, BAvatar, BDropdown, BDropdownItem,
  } from 'bootstrap-vue'
  import { onMounted, ref } from '@vue/composition-api'

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

    setup(props) { 
        onMounted(() => {
        });

        return {
        }
    }
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