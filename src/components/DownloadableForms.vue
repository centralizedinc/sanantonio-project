<template>
  <a-row type="flex" :gutter="24">
    <!-- <a-col :span="24">
          <h3>Downloadable Forms</h3>
          <p>Business Forms and Affidavit</p>
    </a-col>-->
    <a-col :span="24">
      <!-- <a-card v-for="i in 4" :key="i">
        <a-row>
          <a-col :span="22">
              Sample Form One
          </a-col>
          <a-col :span="2">
              <a-icon type="download" style="cursor:pointer;font-size:24px;color:#0F82E0"></a-icon>
          </a-col>
        </a-row>
      </a-card>-->
      <!-- downloads -->
      <a-collapse accordion>
        <a-collapse-panel header="Civil Registry Forms" key="1">
          <a-row>
            <a-col :span="24">
              <a-button
                a
                href="../assets/logo.png"
                download="applicationform.pdf"
                type="link"
              >Application for Birth Certificate</a-button>
            </a-col>
            <a-col :span="24">
              <a-button type="link">Application for Marriage Contract</a-button>
            </a-col>
            <a-col :span="24">
              <a-button type="link">Application for Marriage License</a-button>
            </a-col>
            <a-col :span="24">
              <a-button type="link">Application form for Death Certificate</a-button>
            </a-col>
          </a-row>
        </a-collapse-panel>
        <a-collapse-panel header="Other Forms" key="2">
          <a-row>
            <a-col :span="24">
              <a-button type="link">Office for the Senior Citizens Affairs Application Form</a-button>
            </a-col>
            <a-col :span="24">
              <a-button type="link">Community Tax Certificate</a-button>
            </a-col>
            <a-col :span="24">
              <a-button type="link">Occupational Permit Application Form</a-button>
            </a-col>
          </a-row>
        </a-collapse-panel>
        <a-collapse-panel header="Forms for City Government Use" key="3">
          <a-row>
            <a-col :span="24">
              <a-button type="link">Disbursement Voucher</a-button>
            </a-col>
            <a-col :span="24">
              <a-button type="link">Inventory Custodian Slip</a-button>
            </a-col>
            <a-col :span="24">
              <a-button type="link">Obligation Request</a-button>
            </a-col>
            <a-col :span="24">
              <a-button type="link">Personal Data Sheet</a-button>
            </a-col>
            <a-col :span="24">
              <a-button type="link">Property Gate Pass</a-button>
            </a-col>
            <a-col :span="24">
              <a-button type="link">Purchase Request</a-button>
            </a-col>
          </a-row>
        </a-collapse-panel>
      </a-collapse>
    </a-col>
  </a-row>
</template>

<script>
export default {};
</script>

<style>
</style>
