<template>
  <a-row type="flex" :gutter="8">
    <h4>Pay Local Taxes</h4>
    <a-divider style="margin-top:-1vh"></a-divider>

    <a-col :span="6">
      <a-card data-aos="fade-up">
        <a-row type="flex" align="middle" justify="center">
          <a-col :span="8">
            <a-avatar
              shape="square"
              :size="40"
              class="card_btn"
              @click="redirect('real-estate-tax')"
            >
              <a-icon type="home" style="font-size:16px"></a-icon>
            </a-avatar>
          </a-col>
          <a-col :span="16">
            <span style="font-size:12px">Real Estate Tax</span>
          </a-col>
        </a-row>
      </a-card>
    </a-col>

    <a-col :span="6">
      <a-card data-aos="fade-up">
        <a-row type="flex" align="middle" justify="center">
          <a-col :span="8">
            <a-avatar
              shape="square"
              :size="40"
              class="card_btn"
              @click="redirect('business-permit')"
            >
              <a-icon type="user" style="font-size:16px"></a-icon>
            </a-avatar>
          </a-col>
          <a-col :span="16">
            <span style="font-size:12px">Community Tax</span>
          </a-col>
        </a-row>
      </a-card>
    </a-col>

    <a-col :span="6">
      <a-card data-aos="fade-up">
        <a-row type="flex" align="middle" justify="center">
          <a-col :span="8">
            <a-avatar
              shape="square"
              :size="40"
              class="card_btn"
              @click="redirect('business-permit')"
            >
              <a-icon type="snippets" style="font-size:16px"></a-icon>
            </a-avatar>
          </a-col>
          <a-col :span="16">
            <span style="font-size:12px">Occupancy Permit</span>
          </a-col>
        </a-row>
      </a-card>
    </a-col>

    <a-col :span="6">
      <a-card data-aos="fade-up">
        <a-row type="flex" align="middle" justify="center">
          <a-col :span="8">
            <a-avatar
              shape="square"
              :size="40"
              class="card_btn"
              @click="redirect('business-permit')"
            >
              <a-icon type="exception" style="font-size:16px"></a-icon>
            </a-avatar>
          </a-col>
          <a-col :span="16">
            <span style="font-size:12px">Barangay Clearance</span>
          </a-col>
        </a-row>
      </a-card>
    </a-col>

    <h4 style="margin-top:2vh">Payment History</h4>
    <a-divider style="margin-top:-1vh"></a-divider>
    <a-col :span="24">
      <transactions></transactions>
    </a-col>
  </a-row>
</template>

<script>
import Transactions from "@/components/taxes/Transactions";
export default {
  components: {
    Transactions
  },
  methods: {
    redirect(nav) {
      this.$emit("redirect", nav);
    }
  }
};
</script>

<style>
</style>