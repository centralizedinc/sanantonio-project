<template>
    <a-row type="flex" justify="center" :gutter="16">
        <a-col :span="24">
            <h2>Here's your payment details:</h2>
        </a-col>
        <a-col :span="18">
            <a-card >
                <a-row type="flex" justify="end">
                  <a-col :span="8">
                      
                      <h3>Amount</h3>
                      <h3>Penalties</h3>
                      <h3>Charges</h3>
                      <h3>Total Amount</h3>
                  </a-col>
                  <a-col :span="12">
                      <h3>₱ 5,000.00</h3>
                      <h3>₱ 0.00</h3>
                      <h3>₱ 0.00</h3>
                      <h3>₱ 5,000.00</h3>
                  </a-col>
                </a-row>
            </a-card>
            
        </a-col>
        
        <a-col :span="24">
            <a-divider></a-divider>
            <h2>To continue, select one of the payment options:</h2>
        </a-col>
        <a-col :span="10">
            
            <a-card class="payment_card" @click="selectMethod('CC')">
                <a-row type="flex" :gutter="16">
                  <a-col :span="6">
                      <img
                        src="https://i.ibb.co/Kq1BBwZ/1200px-Visa-tile.jpg"
                        alt="1055px-7-eleven-logo-tile"
                        border="0"
                        width="100%"
                    />
                  </a-col>
                  <a-col :span="18">
                    <h2 align="left" type="bold" style="color:#FFFFFF">Credit Card</h2>
                    <h5 align="left" style="color:#FFFFFF">Visa, Master, JCB or American Express</h5>
                </a-col>
                </a-row>
            </a-card>
        </a-col>

        <a-col :span="10">
            <a-card class="payment_card" @click="selectMethod('EC')">
                <a-row type="flex" :gutter="16">
                  <a-col :span="6">
                      <img
                        src="https://i.ibb.co/h127LnF/1055px-7-eleven-logo-tile.jpg"
                        alt="1055px-7-eleven-logo-tile"
                        border="0"
                        width="80%"
                    />
                  </a-col>
                  <a-col :span="18">
                    <h2 align="left" type="bold" style="color:#FFFFFF">Over the Counter</h2>
                    <h5 align="left" style="color:#FFFFFF"> Cebuana Lhullier, M Lhuillier,7-11 or Coins.ph</h5>
                </a-col>
                </a-row>
            </a-card>
        </a-col>


        <a-modal v-model="show_modal" @ok="submit">
            <template slot="title">
                <a-row type="flex" :gutter="16" align="middle">
                  <a-col :span="4">
                      <img
                        :src="payment_method==='CC'?'https://i.ibb.co/Kq1BBwZ/1200px-Visa-tile.jpg':'https://i.ibb.co/h127LnF/1055px-7-eleven-logo-tile.jpg'"
                        alt="1055px-7-eleven-logo-tile"
                        border="0"
                        width="100%"
                    />
                    
                  </a-col>
                  <a-col :span="20"><h3>{{title}}</h3></a-col>
                </a-row>
            </template>
            <template v-if="payment_method ==='CC'">
                <a-form>
                  <a-form-item :labelCol="{span:8}" :wrapperCol="{span:16}" label="Credit Card Number">
                      <a-input placeholder="Enter Credit Card No.">
                          <a-icon type="credit-card" slot="prefix"></a-icon>
                      </a-input>
                  </a-form-item>
                  <a-form-item :labelCol="{span:8}" :wrapperCol="{span:16}" label="CVC">
                      <a-input placeholder="Card Verification Code">
                          <a-icon type="lock" slot="prefix"></a-icon>
                      </a-input>
                  </a-form-item>
                  <a-form-item :labelCol="{span:8}" :wrapperCol="{span:16}" label="Valid Until">
                      <a-month-picker placeholder="Card validity" style="width:100%"></a-month-picker>
                  </a-form-item>
                   <a-form-item :labelCol="{span:8}" :wrapperCol="{span:16}" label="Card Holder Name">
                      <a-input placeholder="Card Holder Name">
                          <a-icon type="user" slot="prefix"></a-icon>
                      </a-input>
                  </a-form-item>
                </a-form>               
            </template>
            <template v-if="payment_method ==='EC'">
                <a-form>
                  <a-form-item :labelCol="{span:8}" :wrapperCol="{span:16}" label="Customer Name">
                      <a-input placeholder="Lastname, Firstname Middlename">
                          <a-icon type="user" slot="prefix"></a-icon>
                      </a-input>
                  </a-form-item>
                  <a-form-item :labelCol="{span:8}" :wrapperCol="{span:16}" label="Email Address">
                      <a-input placeholder="Enter valid email address">
                          <a-icon type="mail" slot="prefix"></a-icon>
                      </a-input>
                  </a-form-item>
                  <a-form-item :labelCol="{span:8}" :wrapperCol="{span:16}" label="Contact Number">
                      <a-input placeholder="Enter Contact Number ">
                          <a-icon type="phone" slot="prefix"></a-icon>
                      </a-input>
                  </a-form-item>
                </a-form>
            </template>
        </a-modal>

        <a-modal v-model="barcode_modal" title="Confirmation" @ok="success">
            <div align="center">
                <h2>Amount Due (before fee)</h2>
                <h1 style="color:#0F82E0">₱1500</h1>
                <h3>Payment Instructions:</h3>
                <h5>1. Go to the nearest 7-Eleven store.</h5>
                <h5>
                2. Request for a 7-Connect payment at the cashier
                <br />
                with Reference Number: {{ref_num}}
                </h5>
                <h2>OR</h2>
                <h3>SCAN BARCODE</h3>
                <barcode v-bind:value="barcodeValue">Show this if the rendering fails.</barcode>
                <h5>3. Complete your payment and you have paid the payment request.</h5>
            </div>
        </a-modal>
    </a-row>
</template>

<script>
import VueBarcode from "vue-barcode";
export default {
    props:['mode'],
    components:{
        barcode: VueBarcode
    },
    data(){
        return{
            step_pay:0,
            show_modal:false,
            barcode_modal:false,
            payment_method:null,
            title:null,
            barcodeValue:"123-4567-890",
            ref_num:12212-1231231
        }
    },
    methods:{
        selectMethod(method){
            console.log('method', method)
            this.show_modal = true;
            this.payment_method=method
            this.title = method==='CC'?'Credit Card Payment': 'Over the Counter Payment'
        },
        submit(){
            if(this.payment_method === 'CC'){
                this.success()
            }else{
                this.barcode_modal = true;
                this.show_modal = false;
            }
        },
        success(){
            this.$router.push(`/app/${this.mode}`)
            this.barcode_modal = false;
            this.$notification.success({
                message: 'Success!',
                description: 'Your Application and payment were successful.'
            })
        }
    }
}
</script>

<style>

</style>