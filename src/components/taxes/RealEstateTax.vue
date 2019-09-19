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
              <a-input placeholder="Enter Number"></a-input>
            </a-form-item>
            <a-form-item
              label="Property Location"
              :label-col="{ span: 8}"
              :wrapper-col="{ span: 16 }"
            >
              <a-textarea :rows="3" placeholder="Enter Address"></a-textarea>
            </a-form-item>
            <a-form-item label="Property Owner" :label-col="{ span: 8}" :wrapper-col="{ span: 16 }">
              <a-input :rows="3" placeholder="Lastname, Firstname Middlename"></a-input>
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
          <template v-else-if="curr_step == 2">
            <payment></payment>
          </template>
        </a-form>
      </a-col>
    </a-row>
    <template>
      <a-divider></a-divider>
      <a-row type="flex" justify="end" :gutter="16">
        <a-col :span="4">
          <a-button block>
            <a-icon type="left" @click="curr_step--"></a-icon>Back
          </a-button>
        </a-col>
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
  data() {
    return {
      curr_step: 0
    };
  }
};
</script>

<style>
</style>