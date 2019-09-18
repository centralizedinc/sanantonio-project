<template>
    <a-row>
        <a-col :span="6">
        <a-steps direction="vertical" size="small" :current="step_pay">
            <a-step title="Payment Information" />
            <a-step title="Billing Details " />
            <a-step title="Review" />
            <a-step title="Pay" />
        </a-steps>
        </a-col>
        <a-col :span="18" style="margin-bottom:25px">
        <a-card style="textAlign:'center'">
            <a-card v-if="step_pay==0">
            <a-card-grid style="width:50%;textAlign:'center'" v-show="pay_type == null">
                <a-row :gutter="8">
                <a-col :span="9">
                    <div align="right">
                    <img
                        src="https://i.ibb.co/Kq1BBwZ/1200px-Visa-tile.jpg"
                        alt="1055px-7-eleven-logo-tile"
                        border="0"
                        width="60"
                        height="60"
                    />
                    </div>
                </a-col>
                <a-col :span="15">
                    <h2 align="left" type="bold" style="margin-bottom:42px">Credit Card</h2>
                    <h5 align="left">Visa, Master, JCB or American Express</h5>
                </a-col>
                <a-button @click="payment_method(0)">Pay using credit card</a-button>
                </a-row>
            </a-card-grid>
            <a-card-grid style="width:50%;textAlign:'center'" v-show="pay_type == null">
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
                <a-button @click="payment_method(1)">Pay over the counter</a-button>
                </a-row>
            </a-card-grid>
            <!-- ***************************************************** -->
            <div align="center" v-if="pay_type != null">
                <h1>{{form.payment_info.desc}}</h1>
                <h1>₱{{form.payment_info.amount}}</h1>
                <h1>PAYMENT METHOD</h1>
                <a-row :gutter="8" v-if="pay_type == 1" style="margin-bottom:25px">
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
                <a-row :gutter="8" v-else style="margin-bottom:25px">
                <a-col :span="9">
                    <div align="right">
                    <img
                        src="https://i.ibb.co/Kq1BBwZ/1200px-Visa-tile.jpg"
                        alt="1055px-7-eleven-logo-tile"
                        border="0"
                        width="60"
                        height="60"
                    />
                    </div>
                </a-col>
                <a-col :span="15">
                    <h2 align="left" type="bold">Credit Card</h2>
                    <h5 align="left">Visa, Master, JCB or American Express</h5>
                </a-col>
                </a-row>
            </div>
            </a-card>
            <a-card v-if="step_pay==1">
            <h4>Customer Information</h4>
            <a-input placeholder="Name" v-model="form.billing_info.name"></a-input>
            <a-input
                v-if="pay_type == 0"
                placeholder="Credit Card Number"
                v-model="form.billing_info.credit_number"
            ></a-input>
            <a-input placeholder="E-mail Address" v-model="form.billing_info.email"></a-input>
            <a-input placeholder="Phone/Mobile" v-model="form.billing_info.contact"></a-input>
            </a-card>
            <a-card v-if="step_pay==2">
            <a-card title="Payment Information">
                <a-card-grid style="width:50%;textAlign:left">Description</a-card-grid>
                <a-card-grid style="width:50%;textAlign:'center'">{{form.payment_info.desc}}</a-card-grid>
                <a-card-grid style="width:50%;textAlign:'center'">Amount</a-card-grid>
                <a-card-grid
                style="width:50%;textAlign:'center'"
                >₱{{form.payment_info.amount}}</a-card-grid>
                <a-card-grid style="width:50%;textAlign:'center'">Payment Method</a-card-grid>
                <a-card-grid style="width:50%;textAlign:'center'">{{form.payment_info.method}}</a-card-grid>
            </a-card>
            <a-card title="Billing Details">
                <a-card-grid style="width:50%;textAlign:left">Name</a-card-grid>
                <a-card-grid style="width:50%;textAlign:'center'">{{form.billing_info.name}}</a-card-grid>
                <a-card-grid
                style="width:50%;textAlign:'center'"
                v-if="pay_type == 0"
                >Credit Card Number</a-card-grid>
                <a-card-grid
                style="width:50%;textAlign:'center'"
                v-if="pay_type == 0"
                >{{form.billing_info.credit_number}}</a-card-grid>
                <a-card-grid style="width:50%;textAlign:'center'">E-mail</a-card-grid>
                <a-card-grid style="width:50%;textAlign:'center'">{{form.billing_info.email}}</a-card-grid>
                <a-card-grid style="width:50%;textAlign:'center'">Phone/Mobile</a-card-grid>
                <a-card-grid
                style="width:50%;textAlign:'center'"
                >{{form.billing_info.contact}}</a-card-grid>
            </a-card>
            </a-card>
            <a-modal v-model="visible" data-backdrop="static" data-keyboard="false">
            <template slot="footer">
                <a-button>
                <a-icon type="download" />Download
                </a-button>
                <a-button @click="confirm()">Confirm</a-button>
            </template>
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
        </a-card>
        </a-col>
    </a-row>
</template>

<script>
export default {
    data(){
        return{
            step_pay:0
        }
        
    }
}
</script>

<style>

</style>