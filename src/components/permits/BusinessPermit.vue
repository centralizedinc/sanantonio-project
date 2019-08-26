<template>
<a-card title="Business Permit">
  <a-row>
    
    <a-col :span="24">
        <a-steps size="small" :current="step_curr">
          <a-step title="Application Details" ></a-step>
          <a-step title="Business Details" ></a-step>
          <a-step title="Owner Information" ></a-step>
          <a-step title="Requirements" ></a-step>
        </a-steps>
        <a-divider></a-divider>
    </a-col>
    <a-col :span="24">
        <a-form>
            <template v-if="step_curr==0">
                <a-form-item label="Application" :label-col="{ span: 8}" :wrapper-col="{ span: 16 }">
                    <a-radio-group v-model="form.application_type">
                        <a-radio  :value="1">New</a-radio>
                        <a-radio  :value="2">Renewal</a-radio>
                    </a-radio-group>
                </a-form-item>
                <a-form-item label="Reference No./B.I.N." :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
                    <a-input placeholder="Reference No."></a-input>
                </a-form-item>
                    <a-form-item label="Date of Application in PBR" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
                    <a-date-picker placeholder="Select Date" style="width:100%" />
                </a-form-item>
                <a-form-item label="Date of Application in LGU" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
                    <a-date-picker placeholder="Select Date" style="width:100%" />
                </a-form-item>
                <a-form-item label="DTI/SEC/CDA Registration No." :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
                    <a-input placeholder="Registration Number"></a-input>
                </a-form-item>
            </template>

            <template v-if="step_curr==1">
                <a-form-item label="Kind of Onwership" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
                    <a-radio-group v-model="form.ownership_type">
                        <a-radio  :value="1">Sole Proprietorship</a-radio>
                        <a-radio  :value="2">Partnership</a-radio>
                        <a-radio  :value="3">Corporation</a-radio>
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
                    <a-form-item label="Contact Number" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
                        <a-input placeholder="Business Telephone Number"></a-input>
                    </a-form-item>
                    <a-form-item label="Email Address" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
                        <a-input placeholder="Business Email"></a-input>
                    </a-form-item>
                    <a-form-item label="Business Address" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
                        <a-textarea rows="3" placeholder="Full Business Address"></a-textarea>
                    </a-form-item>
                    <a-form-item label="Business Area" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
                        <a-input placeholder="Lot Area in square meters (sqm)"></a-input>
                    </a-form-item>
                    <a-form-item label="Rented/Owned" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
                        <a-radio-group v-model="form.address_ownership">
                            <a-radio  :value="1">Rented</a-radio>
                            <a-radio  :value="2">Owned</a-radio>
                        </a-radio-group>
                    </a-form-item>
                    <template v-if="form.address_ownership==1">
                        <a-form-item label="Lessor's Name" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
                            <a-input placeholder="Name of the Landowner"></a-input>
                        </a-form-item>
                        <a-form-item label="Monthly Rental" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
                            <a-input placeholder="Rent per Month in Peso(Php)"></a-input>
                        </a-form-item>
                        <a-form-item label="Lessor's Address" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
                            <a-textarea rows="3" placeholder="Full Address"></a-textarea>
                        </a-form-item>
                    </template>
                    <a-divider orientation="left">Business Activities</a-divider>
                    <a-table :columns="cols" :dataSource="activities"></a-table>
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
    data(){
        return{
            step_curr:0,
            form:{},
            activities:[],
            cols:[
                {
                    title:'Line of Business'
                },
                {
                    title:'Capitalization'
                },
                {
                    title:'Gross Sales/Receipts'
                }
            ]
        }
    }

}
</script>

<style>

</style>