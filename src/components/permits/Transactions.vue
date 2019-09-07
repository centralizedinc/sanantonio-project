<template>
  <a-card title="hello">
    <a-table :columns="cols" :dataSource="transac">
      <template slot="permit" slot-scope="text">
        <a href="javascript:;">{{text}}</a>
        <a slot="action" slot-scope="text" href="javascript:;" @click="view_data">View</a>
      </template>
      <template slot="action" slot-scope="text, record, index">
        <div>
          <a @click="() => view_data(record)">View</a>
        </div>
      </template>
      <template slot="title">All Permit Transaction</template>
    </a-table>
    <a-drawer width="75%" placement="right" :closable="false">
      <p>Permit Details</p>
      <p>{{form.permit}}</p>
      <a-row>
        <a-col :span="12">
          <description-item title="Application Type: ">{{form.app_type}}</description-item>
        </a-col>
        <a-col :span="12">
          <description-item title="Reference No./B.I.N.: ">{{form.ref_no}}</description-item>
        </a-col>
        <a-col :span="12">
          <description-item title="Application Date in PBR: ">{{form.pbr_date}}</description-item>
        </a-col>
        <a-col :span="12">
          <description-item title="Application Date in LGU: ">{{form.lgu_date}}</description-item>
        </a-col>
        <a-col :span="12">
          <description-item title="DTI/SEC/CDA Registration No.: ">{{form.reg_no}}</description-item>
        </a-col>
        <!-- business details -->
        <a-col :span="12">
          <description-item title="Kind of Ownership: ">{{form.ownership}}</description-item>
        </a-col>
        <a-col :span="12">
          <description-item title="TIN: ">{{form.tin}}</description-item>
        </a-col>
        <a-col :span="12">
          <description-item title="SSS: ">{{form.sss}}</description-item>
        </a-col>
        <a-col :span="12">
          <description-item title="Business Name: ">{{form.business_name}}</description-item>
        </a-col>
        <a-col :span="12">
          <description-item title="Contact Number:">{{form.contact_num}}</description-item>
        </a-col>
        <a-col :span="12">
          <description-item title="Email Address: ">{{form.email}}</description-item>
        </a-col>
        <a-col :span="12">
          <description-item title="Business Address">{{form.business_address}}</description-item>
        </a-col>
        <!-- <a-col :span="12">
            <description-item title="">{{}}</description-item>
        </a-col>-->
      </a-row>
    </a-drawer>
  </a-card>
</template>

<script>
import { stringify } from "querystring";
export default {
  data() {
    return {
      form: {
        permit: "",
        type: "",
        ref_no: "",
        pbr_date: "",
        lgu_date: "",
        reg_no: "",
        ownership: "",
        tin: 0,
        sss: 0,
        business_name: "",
        contact_num: 0,
        email: "",
        business_address: ""
      },
      transac: [
        {
          ref_no: 1,
          permit: "Business Permit",
          type: "Initial",
          status: "On Process",
          current_task: "Payment",
          pbr_date: "09/05/2019",
          lgu_date: "09/05/2019",
          reg_no: "01",
          ownership: "owned",
          tin: 123456789,
          sss: 123456789,
          business_name: "negosyo",
          contact_num: 321,
          email: "email@email.email",
          business_address: "location"
        },
        {
          reference_no: 2,
          permit: "Business Permit",
          type: "Initial",
          status: "On Process",
          current_task: "Payment",
          pbr_date: "09/05/2019",
          lgu_date: "09/05/2019",
          reg_no: "01",
          ownership: "owned",
          tin: 123456789,
          sss: 123456789,
          business_name: "negosyo",
          contact_num: 321,
          email: "email@email.email",
          business_address: "location"
        }
      ],
      cols: [
        {
          title: "Permit",
          dataIndex: "permit"
        },
        {
          title: "Type",
          dataIndex: "type"
        },
        {
          title: "Status",
          dataIndex: "status"
        },
        {
          title: "Current Task",
          dataIndex: "current_task"
        },
        {
          title: "Action",
          dataIndex: "action",
          scopedSlots: { customRender: "action" }
        }
      ]
    };
  },
  methods: {
    view_data(data) {
      this.form.console.log("viewed item: " + JSON.stringify(data));
    }
  }
};
</script>