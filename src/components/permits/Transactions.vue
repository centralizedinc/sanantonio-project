<template>
  <a-card data-aos="fade-up">
    <a-row style="margin-bottom: 2vh" type="flex" :gutter="8">
      <a-col :span="22">
        <a-input-search placeholder="Search" @search="onSearch" />
      </a-col>
      <a-col :span="2">
        <a-button type="primary">
          <a-icon type="plus"></a-icon>
        </a-button>
      </a-col>
    </a-row>
    <a-divider></a-divider>
    <a-table :columns="cols" :dataSource="transac" :loading="loading">
      <template slot="permit" slot-scope="text">
        <a href="javascript:;">{{text}}</a>
        <a slot="action" href="javascript:;" @click="view_data">View</a>
      </template>
      <template slot="application.app_type" slot-scope="text">
        <p v-if="text == 1">New</p>
        <p v-else>Renewal</p>
      </template>
      <template slot="action" slot-scope="text, record">
        <div>
          <a @click="() => view_data(record)">View</a>
        </div>
      </template>
    </a-table>
    <a-drawer width="75%" placement="right" :closable="false" @close="onClose" :visible="draw_show">
      <a-menu v-model="current" mode="horizontal">
        <a-menu-item key="permit">Permit</a-menu-item>
        <a-menu-item key="insurance">Insurance</a-menu-item>
        <a-menu-item key="payment">Payment</a-menu-item>
      </a-menu>
      <a-card style="textAlign:'center'" v-show="current =='permit'">
        <a-row>
          <div align="center">
            <p>
              Republic of the Philippines
              <br />City of {{constant_helper.name_display}}
              <br />OFFICE OF THE CITY MAYOR
              <br />
              {{form.application.permit_type}} and Licensing Office
              <br />Telephone no. +63 42 710-8892
              <br />
              <br />Application:
              <u v-if="form.application.app_type == 1">New</u>
              <u v-else>Renewal</u>
            </p>
          </div>
        </a-row>
        <a-row>
          <a-col :span="12">
            <p class="inset">Date of Application in PBR: {{form.application.pbr_date}}</p>
          </a-col>
          <a-col :span="12">
            <p class="inset">Date of Application in LGU: {{form.application.lgu_date}}</p>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12" style="margin-top:-15px">
            <p class="inset">Reference No./B.I.N.: {{form.application.reference_no}}</p>
          </a-col>
          <a-col :span="12" style="margin-top:-15px">
            <p class="inset">DTI/SEC/CDA Registration No.: {{form.application.registration_no}}</p>
          </a-col>
        </a-row>
        <a-row>
          <!-- business -->
          <a-col :span="14" style="margin-top:-15px">
            <p class="inset">
              Kind of Ownership:
              <a-radio-group v-model="form.business.ownership" disabled="true">
                <a-radio :value="1">Sole Proprietorship</a-radio>
                <a-radio :value="2">Partnership</a-radio>
                <a-radio :value="3">Corporation</a-radio>
              </a-radio-group>
            </p>
          </a-col>
          <a-col :span="5" style="margin-top:-15px">
            <p class="inset">TIN: {{form.business.tin}}</p>
          </a-col>
          <a-col :span="5" style="margin-top:-15px">
            <p class="inset">SSS No.: {{form.business.sss}}</p>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12" style="margin-top:-15px">
            <p class="inset">Business Name: {{form.business.business_name}}</p>
          </a-col>
          <a-col :span="12" style="margin-top:-15px">
            <p class="inset">Name of Applicant/Owner/Manager: {{form.business.amo.name}}</p>
          </a-col>
        </a-row>
        <a-row type="flex">
          <a-col :span="12" style="margin-top:-15px">
            <p class="inset">Business Address: {{form.business.business_address}}</p>
          </a-col>
          <a-col :span="12" style="margin-top:-15px">
            <p class="inset">Applicant's/Owner's/Manager's Address: {{form.business.amo.address}}</p>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12" style="margin-top:-15px">
            <p class="inset">Business Contact No.: {{form.business.contact}}</p>
          </a-col>
          <a-col :span="12" style="margin-top:-15px">
            <p class="inset">Applicant's/Owner's/Manager's Contact: {{form.business.amo.contact}}</p>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12" style="margin-top:-15px">
            <p class="inset">Business E-mail: {{form.business.email}}</p>
          </a-col>
          <a-col :span="12" style="margin-top:-15px">
            <p class="inset">Applicant's/Owner's/Manager's E-mail: {{form.business.amo.email}}</p>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="6" style="margin-top:-15px">
            <p class="inset">Business Area (in sq m): {{form.business.business_area}}</p>
          </a-col>
          <a-col :span="6" style="margin-top:-15px">
            <p class="inset">No. of Owners: {{form.businessowner_no}}</p>
          </a-col>
          <a-col :span="12" style="margin-top:-15px">
            <p class="inset">
              No. of Employees:
              <u>{{form.business.employees_no.professional}}</u> Professional
              <u>{{form.business.employees_no.non_professional}}</u> Non-Professional
            </p>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="24" style="margin-top:-15px">
            <p class="inset">
              <a-radio-group v-model="form.business.business_type" disabled="true">
                <a-radio :value="1">Rented</a-radio>
                <a-radio :value="2">Owned</a-radio>
              </a-radio-group>If place of business is RENTED, please identify the following
            </p>
          </a-col>
        </a-row>
        <a-row>
          <!-- if rented -->
          <a-col :span="12" style="margin-top: -15px">
            <p class="inset">Lessor's Name: {{form.business.rented.lessor}}</p>
          </a-col>
          <a-col :span="12" style="margin-top: -15px">
            <p class="inset">Monthly Rental: {{form.business.rented.monthly_rental}}</p>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="24" style="margin-top: -15px">
            <p class="inset">Lessor's Address: {{form.business.rented.lessor_address}}</p>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12" style="margin-top: -15px">
            <p class="inset">Telephone No.: {{form.business.rented.lessor_contact}}</p>
          </a-col>
          <a-col :span="12" style="margin-top: -15px">
            <p class="inset">E-mail Address: {{form.business.rented.lessor_email}}</p>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="24" style="margin-top: -15px">
            <p class="inset">
              Property Index Number (P.I.N.) Real Property Information: Land
              <u>{{form.business.property_pin.land}}</u> Building
              <u>{{form.business.property_pin.building}}</u> Machinery
              <u>{{form.business.property_pin.machinery}}</u>
            </p>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="24" style="margin-top: -15px">
            <p class="inset">Business Activity(ies)</p>
          </a-col>
          <a-col :span="8" style="margin-top: -15px">
            <p class="inset">Line of Business</p>
          </a-col>
          <a-col :span="8" style="margin-top: -15px">
            <p class="inset">Capitalization</p>
          </a-col>
          <a-col :span="8" style="margin-top: -15px">
            <p class="inset">Gross Sales/Receipts</p>
          </a-col>
        </a-row>
        <a-row v-for="i in form.business.business_activities.length" :key="i=0">
          <a-col :span="8" style="margin-top: -15px">
            <p class="inset">{{form.business.business_activities[i].line_business}}</p>
          </a-col>
          <a-col :span="8" style="margin-top: -15px">
            <p class="inset">{{form.business.business_activities[i].capital}}</p>
          </a-col>
          <a-col :span="8" style="margin-top: -15px">
            <p class="inset">{{form.business.business_activities[i].receipts}}</p>
          </a-col>
        </a-row>
        <a-row>
          <!-- payment -->
          <a-col :span="24" style="margin-top: -15px">
            <p class="inset">
              Mode of Payment:
              <a-radio-group v-model="form.business.payment.mode" disabled="true">
                <a-radio :value="1">Annual/Full</a-radio>
                <a-radio :value="2">Quarterly</a-radio>
              </a-radio-group>No. of Quarters
              <u>{{form.business.payment.qrtly}}</u>
            </p>
          </a-col>
        </a-row>
        <a-row>
          <div align="right">
            <a-button>
              <a-icon type="download" />Download
            </a-button>
          </div>
        </a-row>
      </a-card>
      <a-card style="textAlign:'center'" v-show="current =='insurance'">
        <div align="center">
          <a-card hoverable style="width: 300px">
            <img
              v-if="form.business_insurance.provider == 'Malayan'"
              alt="example"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToEd_HUEVcw8aW1xYzakaludSmpdQyREP_JAxx5KFsRXqxQj8D"
              slot="cover"
            />
            <img
              v-if="form.business_insurance.provider == 'AIG'"
              alt="example"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/AIG_logo.svg/1200px-AIG_logo.svg.png"
              slot="cover"
            />
            <img
              v-if="form.business_insurance.provider == 'AXA Philippines'"
              alt="example"
              src="https://pbs.twimg.com/profile_images/1039861366918508544/AYFe5Ooj_400x400.jpg"
              slot="cover"
            />
            <img
              v-if="form.business_insurance.provider == 'MAPRE Philippines'"
              alt="example"
              src="https://www.mapfre.com.ph/insurance-ph/images/1200x630-logo-mapfre_tcm844-83355.jpg"
              slot="cover"
            />
            <div align="center">
              <h3>{{form.business_insurance.provider}}</h3>
            </div>

            <a-card-grid style="width:50%;textAlign:'center'">Fee:</a-card-grid>
            <a-card-grid style="width:50%;textAlign:'center'">₱{{form.business_insurance.app_fee}}</a-card-grid>
            <a-card-grid style="width:50%;textAlign:'center'">LRF:</a-card-grid>
            <a-card-grid style="width:50%;textAlign:'center'">₱{{form.business_insurance.lrf}}</a-card-grid>
            <a-card-grid style="width:50%;textAlign:'center'">Interest:</a-card-grid>
            <a-card-grid style="width:50%;textAlign:'center'">₱{{form.business_insurance.interest}}</a-card-grid>
            <a-card-grid style="width:50%;textAlign:'center'">Surcharge:</a-card-grid>
            <a-card-grid style="width:50%;textAlign:'center'">₱{{form.business_insurance.surcharge}}</a-card-grid>
            <a-card-grid style="width:50%;textAlign:'center'">Total:</a-card-grid>
            <a-card-grid style="width:50%;textAlign:'center'">₱{{form.business_insurance.total}}</a-card-grid>
          </a-card>
        </div>
      </a-card>
      <a-card style="textAlign:'center'" v-show="current =='payment'">
        <div align="center">
          <a-card title="Payment Details" style="width:50%">
            <a-card-grid style="width:50%;textAlign:'center'">Permit Type:</a-card-grid>
            <a-card-grid style="width:50%;textAlign:'center'">{{form.payment_info.desc}}</a-card-grid>
            <a-card-grid style="width:50%;textAlign:'center'">Fee:</a-card-grid>
            <a-card-grid style="width:50%;textAlign:'center'">{{form.payment_info.amount}}</a-card-grid>
            <a-card-grid style="width:50%;textAlign:'center'">Payment Method:</a-card-grid>
            <a-card-grid style="width:50%;textAlign:'center'">{{form.payment_info.method}}</a-card-grid>
            <a-card-grid style="width:50%;textAlign:'center'">Name:</a-card-grid>
            <a-card-grid style="width:50%;textAlign:'center'">{{form.billing_info.name}}</a-card-grid>
            <a-card-grid
              style="width:50%;textAlign:'center'"
              v-if="form.billing_info.credit_card != null"
            >Credit Card Number:</a-card-grid>
            <a-card-grid
              style="width:50%;textAlign:'center'"
              v-if="form.billing_info.credit_card
            !=null"
            >{{form.billing_info.credit_card}}</a-card-grid>
            <a-card-grid style="width:50%;textAlign:'center'">Email:</a-card-grid>
            <a-card-grid style="width:50%;textAlign:'center'">{{form.billing_info.email}}</a-card-grid>
            <a-card-grid style="width:50%;textAlign:'center'">Contact:</a-card-grid>
            <a-card-grid style="width:50%;textAlign:'center'">{{form.billing_info.contact}}</a-card-grid>
            <a-card-grid style="width:50%;textAlign:'center'">
              <p>Status:</p>
            </a-card-grid>
            <a-card-grid style="width:50%;textAlign:'center'">
              <p
                v-if="form.progress.current_task != 'FOR APPROVAL'"
                text-color="success"
              >FOR APPROVAL</p>
              <p v-else text-color="error">FOR PAYMENT</p>
            </a-card-grid>
          </a-card>
        </div>
      </a-card>
    </a-drawer>
  </a-card>
</template>

<script>
import { stringify } from "querystring";
import axios from "axios";

export default {
  data() {
    return {
      searching: null,
      loading: false,
      store_handler: [],
      current: ["permit"],
      form: {
        application: {
          permit_type: "",
          app_type: null,
          reference_no: null,
          pbr_date: null,
          lgu_date: null,
          registration_no: null
        },
        business: {
          ownership: null,
          tin: null,
          sss: null,
          business_name: "",
          contact: null,
          email: "",
          business_address: "",
          // AMO - Applicat/Manager/Owner
          amo: {
            name: "",
            address: "",
            contact: null,
            email: ""
          },
          business_area: "",
          owner_no: null,
          employees_no: {
            professional: null,
            non_professional: null
          },
          business_type: null,
          rented: {
            lessor: "",
            monthly_rental: null,
            lessor_address: "",
            lessor_conatct: null,
            lessor_email: ""
          },
          property_pin: {
            land: null,
            building: null,
            machinery: null
          },
          business_activities: [],
          payment: {
            mode: null,
            qrtly: null
          }
        },
        documents: [],
        business_insurance: {
          provider: "",
          app_fee: 0,
          lrf: 0,
          interest: 0,
          surcharge: 0,
          total: 0
        },
        payment_info: {
          desc: "Business Clearance",
          amount: 1500,
          method: "Over the Counter"
        },
        billing_info: {
          credit_number: null,
          name: "",
          email: "",
          contact: null
        },
        progress: {
          status: "",
          current_task: "",
          previous_task: ""
        }
      },
      columns: [
        {
          title: "Line of Business",
          dataIndex: "line_business",
          width: "30%",
          scopedSlots: { customRender: "line_business" }
        },
        {
          title: "Capitalization",
          dataIndex: "capital",
          scopedSlots: { customRender: "capital" }
        },
        {
          title: "Gross Sales/Receipts",
          dataIndex: "receipts",
          scopedSlots: { customRender: "receipts" }
        }
      ],
      transac: [],
      cols: [
        {
          title: "Permit",
          dataIndex: "application.permit_type"
        },
        {
          title: "Type",
          dataIndex: "application.app_type",
          scopedSlots: { customRender: "application.app_type" }
        },
        {
          title: "Status",
          dataIndex: "progress.status"
        },
        {
          title: "Current Task",
          dataIndex: "progress.current_task"
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
    console.log();
    // this.loading = true;
    // axios.get("permit/apply").then(results => {
    //   this.loading = false;
    //   this.transac = results.data;
    // });

    this.transac = JSON.parse(JSON.stringify(this.$store.state.permit.permit));
    this.store_handler = this.$store.state.permit.permit;
    console.log("transac data: " + JSON.stringify(this.transac));
  },
  methods: {
    onSearch(value) {
      console.log("on search data value: " + JSON.stringify(value));
      console.log("on search data transac: " + JSON.stringify(this.transac));
      this.transac.splice(0, this.transac.length);
      // if (this.searching === null && this.searching === "") {
      //   this.transac.pop(this.transac);
      // } else {
      this.store_handler.forEach(element => {
        console.log("element data: " + JSON.stringify(element));
        console.log("value data: " + JSON.stringify(value));
        if (element.reference_no === value) {
          console.log("element meron: " + JSON.stringify(element));
          this.transac.push(element);
        }
      });
      // }
    },
    view_data(data) {
      this.form = data;
      console.log("viewed item: " + JSON.stringify(data));
      this.draw_show = true;
    },
    onClose() {
      this.draw_show = false;
    }
  }
};
</script>
<style>
p.dotted {
  border-style: dotted;
}
p.dashed {
  border-style: dashed;
}
p.solid {
  border-style: solid;
}
p.double {
  border-style: double;
}
p.groove {
  border-style: groove;
}
p.ridge {
  border-style: ridge;
}
p.inset {
  border-style: inset;
}
p.outset {
  border-style: outset;
}
p.none {
  border-style: none;
}
p.hidden {
  border-style: hidden;
}
p.mix {
  border-style: dotted dashed solid double;
}
</style>