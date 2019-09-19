<template>
  <a-card data-aos="fade-up">
    <a-row style="margin-bottom: 2vh" type="flex" :gutter="8">
      <a-col :span="22">
         <a-input-search
            placeholder="Search"
            @search="onSearch"
          />
      </a-col>
      <a-col :span="2">
        <a-button type="primary" ><a-icon type="plus"></a-icon></a-button>
      </a-col>
    </a-row>
    <a-divider></a-divider> 
    <a-table :columns="cols" :dataSource="transactions" :loading="loading">
      <!-- <template slot="permit" slot-scope="text">
        <a href="javascript:;">{{text}}</a>
        <a slot="action" slot-scope="text" href="javascript:;" @click="view_data">View</a>
      </template> -->
      <!-- <template slot="application.app_type" slot-scope="text, record">
        <p v-if="text == 1">New</p>
        <p v-else>Renewal</p>
      </template>-->
      <template slot="action" slot-scope="text, record">
        <div>
          <a @click="() => view_data(record)">View</a>
        </div>
      </template> 
    </a-table>
  </a-card>
</template>

<script>
import { stringify } from "querystring";
import axios from "axios";

export default {
  data() {
    return {
      loading:false,
      transactions:[],
      cols: [
        {
          title: "Tax Type",
          dataIndex: "tax_type"
        },
        {
          title: "TCT/OCT",
          dataIndex: "title_no"
        },
        {
          title: "Amount Due",
          dataIndex: "amount"
        },
        {
          title: "Status",
          dataIndex: "status"
        },
        {
          title: "Payment Date",
          dataIndex: "date"
        },
        {
          title: "Action",
          dataIndex: "action",
          scopedSlots: { customRender: "action" }
        }
      ],
      draw_show: false
    };
  },
  created() {    
    this.loading = true;
    var _self = this;
    setTimeout(function(){
      _self.transactions = _self.$store.state.taxes.records;
      _self.loading = false;
    }, 1000);
  },
  methods: {
  }
};
</script>
<style>
</style>