<template>
  <a-card title="Business Permit">
    <a-row>
      <a-col :span="24">
        <a-steps size="small" :current="step_curr">
          <a-step title="Application Details"></a-step>
          <a-step title="Business Details"></a-step>
          <a-step title="Owner Information"></a-step>
          <a-step title="Requirements"></a-step>
        </a-steps>
        <a-divider></a-divider>
      </a-col>
      <a-col :span="24">
        <a-form>
          <template v-if="step_curr==0">
            <a-form-item label="Application" :label-col="{ span: 8}" :wrapper-col="{ span: 16 }">
              <a-radio-group v-model="form.application_type">
                <a-radio :value="1">New</a-radio>
                <a-radio :value="2">Renewal</a-radio>
              </a-radio-group>
            </a-form-item>
            <a-form-item
              label="Reference No./B.I.N."
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }"
            >
              <a-input placeholder="Reference No."></a-input>
            </a-form-item>
            <a-form-item
              label="Date of Application in PBR"
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }"
            >
              <a-date-picker placeholder="Select Date" style="width:100%" />
            </a-form-item>
            <a-form-item
              label="Date of Application in LGU"
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }"
            >
              <a-date-picker placeholder="Select Date" style="width:100%" />
            </a-form-item>
            <a-form-item
              label="DTI/SEC/CDA Registration No."
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }"
            >
              <a-input placeholder="Registration Number"></a-input>
            </a-form-item>
          </template>

          <template v-if="step_curr==1">
            <a-form-item
              label="Kind of Onwership"
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }"
            >
              <a-radio-group v-model="form.ownership_type">
                <a-radio :value="1">Sole Proprietorship</a-radio>
                <a-radio :value="2">Partnership</a-radio>
                <a-radio :value="3">Corporation</a-radio>
              </a-radio-group>
            </a-form-item>
            <a-form-item label="TIN" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
              <a-input placeholder="Tax Identification Number"></a-input>
            </a-form-item>
            <a-form-item label="SSS No" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
              <a-input placeholder="Social Security Number"></a-input>
            </a-form-item>
            <a-form-item label="Business Name" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
              <a-input placeholder="Name of Business"></a-input>
            </a-form-item>
            <a-form-item
              label="Contact Number"
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }"
            >
              <a-input placeholder="Business Telephone Number"></a-input>
            </a-form-item>
            <a-form-item label="Email Address" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
              <a-input placeholder="Business Email"></a-input>
            </a-form-item>
            <a-form-item
              label="Business Address"
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }"
            >
              <a-textarea rows="3" placeholder="Full Business Address"></a-textarea>
            </a-form-item>
            <a-form-item label="Business Area" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
              <a-input placeholder="Lot Area in square meters (sqm)"></a-input>
            </a-form-item>
            <a-form-item label="Rented/Owned" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
              <a-radio-group v-model="form.address_ownership">
                <a-radio :value="1">Rented</a-radio>
                <a-radio :value="2">Owned</a-radio>
              </a-radio-group>
            </a-form-item>
            <template v-if="form.address_ownership==1">
              <a-form-item
                label="Lessor's Name"
                :label-col="{ span: 8 }"
                :wrapper-col="{ span: 16 }"
              >
                <a-input placeholder="Name of the Landowner"></a-input>
              </a-form-item>
              <a-form-item
                label="Monthly Rental"
                :label-col="{ span: 8 }"
                :wrapper-col="{ span: 16 }"
              >
                <a-input placeholder="Rent per Month in Peso(Php)"></a-input>
              </a-form-item>
              <a-form-item
                label="Lessor's Address"
                :label-col="{ span: 8 }"
                :wrapper-col="{ span: 16 }"
              >
                <a-textarea rows="3" placeholder="Full Address"></a-textarea>
              </a-form-item>
            </template>
            <a-divider orientation="left">Business Activities</a-divider>
            <!-- <a-table :columns="cols" :dataSource="activities"></a-table> -->
            <a-button class="editable-add-btn" @click="handleAdd">Add</a-button>
            <a-table :columns="columns" :dataSource="dataSource">
              <!-- <template slot="name" slot-scope="text, record">
                <editable-cell :text="text" @change="onCellChange(record.key, 'name', $event)" />
              </template>-->
              <template
                v-for="col in ['line_business', 'capital', 'receipts']"
                :slot="col"
                slot-scope="text, record, index"
              >
                <div :key="col">
                  <a-input
                    v-if="record.editable"
                    style="margin: -5px 0"
                    :value="text"
                    @change="e => handleChange(e.target.value, record.key, col)"
                  />
                  <template v-else>{{text}}</template>
                </div>
              </template>
              <template slot="operation" slot-scope="text, record, index">
                <div class="editable-row-operations">
                  <a-popconfirm
                    v-if="dataSource.length"
                    title="Sure to delete?"
                    @confirm="() => onDelete(record.key)"
                  >
                    <a href="javascript:;">Delete</a>
                  </a-popconfirm>
                </div>
                <div class="editable-row-operations">
                  <span v-if="record.editable">
                    <a @click="() => save(record.key)">Save</a>
                    <p>&nbsp;</p>
                    <a-popconfirm title="Sure to cancel?" @confirm="() => cancel(record.key)">
                      <a>Cancel</a>
                    </a-popconfirm>
                  </span>
                  <span v-else>
                    <a @click="() => edit(record.key)">Edit</a>
                  </span>
                </div>
              </template>
            </a-table>
            <a-form-item
              label="Mode of Pyament"
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }"
            >
              <a-radio-group v-model="form.mode_payment">
                <a-radio :value="1">Annual/Full</a-radio>
                <a-radio :value="2">Quarterly</a-radio>
              </a-radio-group>
              <a-input v-if="form.mode_payment == 2" placeholder="No. of Quarters"></a-input>
            </a-form-item>
          </template>

          <template v-if="step_curr==2">
            <a-row :gutter="8">
              <a-col :span="12">
                <a-button block>AIG</a-button>
                <a-button block>AXA Philippines</a-button>
                <a-button block>Malayan</a-button>
                <a-button block>MAPRE Philippines</a-button>
                <a-card title="Card Title" :style="{ marginTop: '16px' }">
                  <a-card-grid style="width:50%;textAlign:left">
                    <p>
                      Lorem ipsum
                      Dolor sit amet
                      Consetetur sadipscing elitr
                      Sed diam n voluptua
                      At vero eos et accusam
                    </p>
                  </a-card-grid>
                  <a-card-grid style="width:50%;textAlign:'center'">
                    <p>
                      Lorem ipsum
                      Dolor sit amet
                      Consetetur sadipscing elitr
                      Sed diam n voluptua
                      At vero eos et accusam
                    </p>
                  </a-card-grid>
                </a-card>
              </a-col>
              <a-col :span="11">
                <a-card title="Payment Details">
                  <a-card-grid style="width:50%;textAlign:left">Application Fee</a-card-grid>
                  <a-card-grid style="width:50%;textAlign:'center'">₱15,000.00</a-card-grid>
                  <a-card-grid style="width:50%;textAlign:'center'">LRF(Legal Research Fee)</a-card-grid>
                  <a-card-grid style="width:50%;textAlign:'center'">₱150.00</a-card-grid>
                  <a-card-grid style="width:50%;textAlign:'center'">Interest</a-card-grid>
                  <a-card-grid style="width:50%;textAlign:'center'">₱0.00</a-card-grid>
                  <a-card-grid style="width:50%;textAlign:'center'">Surcharge</a-card-grid>
                  <a-card-grid style="width:50%;textAlign:'center'">₱0.00</a-card-grid>
                  <a-card-grid style="width:50%;textAlign:'center'">Total</a-card-grid>
                  <a-card-grid style="width:50%;textAlign:'center'">₱15,150.00</a-card-grid>
                </a-card>
              </a-col>
            </a-row>
          </template>

          <template v-if="step_curr==3">
            <a-row>
              <a-col :span="6">
                <a-steps direction="vertical" size="small" :current="step_pay">
                  <a-step title="Payment Information" />
                  <a-step title="Billing Details " />
                  <a-step title="Review" />
                  <a-step title="Pay" />
                </a-steps>
              </a-col>
              <a-col :span="18">
                <a-card style="textAlign:'center'">
                  <a-card v-if="step_pay==0">
                    <div align="center">
                      <h1>Business Clearance</h1>
                      <h1>₱1500.00</h1>
                      <h1>PAYMENT METHOD</h1>
                      <a-row :gutter="8">
                        <a-col :span="9">
                          <div align="right">
                            <img
                              src="https://i.ibb.co/h127LnF/1055px-7-eleven-logo-tile.jpg"
                              alt="1055px-7-eleven-logo-tile"
                              border="0"
                              width="60"
                              height="60"
                            />
                          </div>
                        </a-col>
                        <a-col :span="15">
                          <h2 align="left" type="bold">OVER THE COUNTER</h2>
                          <h5 align="left">
                            Cebuana Lhullier, M Lhuillier,
                            7-11 or Coins.ph
                          </h5>
                        </a-col>
                      </a-row>
                    </div>
                  </a-card>
                  <a-card v-if="step_pay==1">
                    <h4>Customer Information</h4>
                    <a-input placeholder="E-mail Address" v-model="form.email"></a-input>
                    <a-input placeholder="Phone/Mobile" v-model="form.phone"></a-input>
                    <a-input placeholder="Name" v-model="form.name"></a-input>
                  </a-card>
                  <a-card v-if="step_pay==2">
                    <a-card title="Payment Information">
                      <a-card-grid style="width:50%;textAlign:left">Description</a-card-grid>
                      <a-card-grid style="width:50%;textAlign:'center'">Business Clearance</a-card-grid>
                      <a-card-grid style="width:50%;textAlign:'center'">Amount</a-card-grid>
                      <a-card-grid style="width:50%;textAlign:'center'">₱1500.00</a-card-grid>
                      <a-card-grid style="width:50%;textAlign:'center'">Payment Method</a-card-grid>
                      <a-card-grid style="width:50%;textAlign:'center'">Over the Counter</a-card-grid>
                    </a-card>
                    <a-card title="Billing Details">
                      <a-card-grid style="width:50%;textAlign:left">Name</a-card-grid>
                      <a-card-grid style="width:50%;textAlign:'center'">{{form.name}}</a-card-grid>
                      <a-card-grid style="width:50%;textAlign:'center'">E-mail</a-card-grid>
                      <a-card-grid style="width:50%;textAlign:'center'">{{form.email}}</a-card-grid>
                      <a-card-grid style="width:50%;textAlign:'center'">Phone/Mobile</a-card-grid>
                      <a-card-grid style="width:50%;textAlign:'center'">{{form.phone}}</a-card-grid>
                    </a-card>
                  </a-card>
                </a-card>
              </a-col>
            </a-row>
          </template>
        </a-form>
      </a-col>
    </a-row>
    <a-row type="flex" justify="end" :gutter="16">
      <a-col :span="3">
        <a-button block ghost type="primary" @click="step_curr--">Back</a-button>
      </a-col>
      <a-col :span="3">
        <a-button block type="primary" @click="step_curr++">Next</a-button>
      </a-col>
    </a-row>
  </a-card>
</template>

<script>
export default {
  data() {
    return {
      step_curr: 0,
      step_pay: 0,
      pay: false,
      form: {},
      activities: [],
      value: 1,
      dataSource: [
        {
          key: "0",
          line_business: "Edward King 0",
          capital: "32",
          receipts: "London, Park Lane no. 0"
        },
        {
          key: "1",
          line_business: "Edward King 1",
          capital: "32",
          receipts: "London, Park Lane no. 1"
        }
      ],
      count: 2,
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
        },
        {
          title: "operation",
          dataIndex: "operation",
          scopedSlots: { customRender: "operation" }
        }
      ],
      cols: [
        {
          title: "Line of Business"
        },
        {
          title: "Capitalization"
        },
        {
          title: "Gross Sales/Receipts"
        }
      ]
    };
  },
  watch: {
    step_curr() {
      console.log("step curr data: " + JSON.stringify(this.step_curr));
      console.log("step pay data: " + JSON.stringify(this.step_pay));
      if (this.step_curr > 3) {
        this.pay = true;
        this.step_pay++;
        this.step_curr = 3;
      } else if (this.pay && this.step_pay != 0 && this.step_curr == 2) {
        this.step_pay--;
        this.step_curr = 3;
        if (this.step_pay == 0) {
          this.pay = false;
          this.step_curr = 2;
        }
      }
    }
  },
  methods: {
    onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    },
    onCellChange(key, dataIndex, value) {
      const dataSource = [...this.dataSource];
      const target = dataSource.find(item => item.key === key);
      if (target) {
        target[dataIndex] = value;
        this.dataSource = dataSource;
      }
    },
    handleChange(value, key, column) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        target[column] = value;
        this.data = newData;
      }
    },
    edit(key) {
      const newData = [...this.dataSource];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        target.editable = true;
        this.dataSource = newData;
      }
    },
    save(key) {
      const newData = [...this.dataSource];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        delete target.editable;
        this.dataSource = newData;
        // this.cacheData = newData.map(item => ({ ...item }));
      }
    },
    cancel(key) {
      const newData = [...this.dataSource];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        // Object.assign(
        //   target,
        //   this.cacheData.filter(item => key === item.key)[0]
        // );
        delete target.editable;
        this.dataSource = newData;
      }
    },
    onDelete(key) {
      const dataSource = [...this.dataSource];
      this.dataSource = dataSource.filter(item => item.key !== key);
    },
    handleAdd() {
      const { count, dataSource } = this;
      const newData = {
        key: count,
        line_business: `Click here`,
        capital: "Click here",
        receipts: `Click here`
      };
      this.dataSource = [...dataSource, newData];
      this.count = count + 1;
    }
  }
};
</script>

<style>
</style>