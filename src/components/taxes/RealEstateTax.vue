<template>
  <a-card title="Real Estate Tax">
    <a-row>
      <a-col :span="24">
        <a-steps size="small" :current="curr_step">
          <a-step title="Property Details"></a-step>
          <a-step title="Upload Documents"></a-step>
          <a-step title="Payment"></a-step>
        </a-steps>
        <a-divider></a-divider>
      </a-col>
      <a-col :span="24">
        <a-form>
          <template v-if="curr_step == 0">
            <a-form-item label="TCT/OCT No." :label-col="{ span: 8}" :wrapper-col="{ span: 16 }">
              <a-input placeholder="Enter Number" v-model="estate_tax.title_no"></a-input>
            </a-form-item>
            <a-form-item
              label="Property Location"
              :label-col="{ span: 8}"
              :wrapper-col="{ span: 16 }"
            >
              <a-textarea :rows="3" placeholder="Enter Address" v-model="estate_tax.address"></a-textarea>
            </a-form-item>
            <a-form-item label="Property Owner" :label-col="{ span: 8}" :wrapper-col="{ span: 16 }">
              <a-input
                :rows="3"
                placeholder="Lastname, Firstname Middlename"
                v-model="estate_tax.name"
              ></a-input>
            </a-form-item>
          </template>
          <template v-if="curr_step == 1">
            <a-upload-dragger name="file" :multiple="true" @change="upload">
              <p class="ant-upload-drag-icon">
                <a-icon type="inbox" />
              </p>
              <p class="ant-upload-text">Click or drag file to this area to upload</p>
              <p
                class="ant-upload-hint"
              >Upload a copy of your previous RPT Official Reciept or Tax Declaration</p>
            </a-upload-dragger>
          </template>
          <template v-if="curr_step == 2">
            <payment mode="taxes" :details="estate_tax"></payment>
          </template>
        </a-form>
      </a-col>
    </a-row>
    <template v-if="curr_step < 2">
      <a-divider></a-divider>
      <a-row type="flex" justify="end" :gutter="16">
        <a-col :span="4">
          <a-button block type="primary" @click="curr_step++">
            Next
            <a-icon type="right"></a-icon>
          </a-button>
        </a-col>
      </a-row>
    </template>
  </a-card>
</template>

<script>
import Payment from "@/components/Payment";
export default {
  components: {
    Payment
  },
  created() {
    this.$store.commit("SET_PAYMENT", {
      application_fee: "5,500.00",
      insurance: "0.00",
      convenience_fee: "50.00",
      total: "5,550.00"
    });
  },
  data() {
    return {
      curr_step: 0,
      estate_tax: {
        tax_type: "Real Estate Tax",
        amount: "5,550.00"
      }
    };
  }
};
</script>

<style>
</style>