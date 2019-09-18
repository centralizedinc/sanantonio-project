<template>
  <a-row type="flex" :gutter="24" justify="center">
    <a-col :span="18">
      <a-card>
      <h3>Check the status of your application:</h3>
      <a-input-search size="large" placeholder="Enter Application Reference Number"></a-input-search>
      </a-card>
    </a-col>

    <a-col :span="18" style="margin-top:2vh">
      <a-card data-aos="fade-up">
        <a-row type="flex" align="middle" justify="center">
          <a-col :span="4">
            <a-avatar shape="square" :size=80 class="card_btn"  @click="redirect('business-permit')">
              <a-icon type="shop" style="font-size:36px"></a-icon>
            </a-avatar>
          </a-col>
          <a-col :span="18">
             <h3>Apply for Mayor's Permit (Business Permit)</h3>
             <a-divider style="margin-top:-1vh"></a-divider>
             <p>Business licenses are permits issued by government agencies that allow individuals or companies to conduct business within the government's geographical jurisdiction.</p>
          </a-col>
        </a-row>
      </a-card>
    </a-col>

    <a-col :span="18" style="margin-top:2vh">
      <a-card data-aos="fade-up">
        <a-row type="flex" align="middle" justify="center">
          <a-col :span="4">
            <a-avatar shape="square" :size=80 class="card_btn"  @click="redirect('business-permit')">
              <a-icon type="snippets" style="font-size:36px"></a-icon>
            </a-avatar>
          </a-col>
          <a-col :span="18">
             <h3>Apply for Occupancy Permit</h3>
             <a-divider style="margin-top:-1vh"></a-divider>
             <p>An Occupancy Permit is a document issued by Department of Building Official that serves as a proof that the structure built completed all the building work and suitable for occupation.</p>
          </a-col>
        </a-row>
      </a-card>
    </a-col>    

    <a-col :span="18" style="margin-top:2vh">
      <a-card data-aos="fade-up">
        <a-row type="flex" align="middle" justify="center">
          <a-col :span="4">
            <a-avatar shape="square" :size=80 class="card_btn"  @click="redirect('business-permit')">
              <a-icon type="tool" style="font-size:36px"></a-icon>
            </a-avatar>
          </a-col>
          <a-col :span="18">
             <h3>Apply for Building Permit</h3>
             <a-divider style="margin-top:-1vh"></a-divider>
             <p>A Building Permit is a document issued by the Building Official to an. owner/applicant to proceed with the construction, installation, addition, alteration, renovation, conversion, repair, moving, demolition or other work.</p>
          </a-col>
        </a-row>
      </a-card>
    </a-col>

    <a-col :span="18" style="margin-top:2vh">
      <a-card data-aos="fade-up">
        <a-row type="flex" align="middle" justify="center">
          <a-col :span="4">
            <a-avatar shape="square" :size=80 class="card_btn"  @click="redirect('business-permit')">
              <a-icon type="exception" style="font-size:36px"></a-icon>
            </a-avatar>
          </a-col>
          <a-col :span="18">
             <h3>Apply for Barangay Clearance</h3>
             <a-divider style="margin-top:-1vh"></a-divider>
             <p>An Occupancy Permit is a document issued by Department of Building Official that serves as a proof that the structure built completed all the building work and suitable for occupation.</p>
          </a-col>
        </a-row>
      </a-card>
    </a-col>

    <!-- <a-col :span="8" style="margin-top:2vh">
      <a-card>
        <h4 style="color:#0F82E0">Business Permit</h4>
        <p>Business licenses are permits issued by government agencies that allow individuals or companies to conduct business within the government's geographical jurisdiction.</p>
        <template slot="actions">
          <a-icon type="edit" @click="redirect('business-permit')" />
          <a-icon type="redo" />
        </template>
      </a-card>
    </a-col>
    <a-col :span="8" style="margin-top:2vh">
      <a-card>
        <h4>Sanity Permit</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <template slot="actions">
          <a-icon type="edit" />
          <a-icon type="redo" />
        </template>
      </a-card>
    </a-col>
    <a-col :span="8" style="margin-top:2vh">
      <a-card>
        <h4 style="color:#0F82E0">Mayor's Permit</h4>
        <p>How to get a Mayor’s Business Permit or license in the Philippines? A business permit or license from the Local Government Units (LGU) is one of the important requirements for every business or company to operate in the Philippines.</p>
        <template slot="actions">
          <a-icon type="edit" />
          <a-icon type="redo" />
        </template>
      </a-card>
    </a-col>
    <a-col :span="8" style="margin-top:2vh">
      <a-card>
        <h4>Barangay Clearance</h4>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <template slot="actions">
          <a-icon type="edit" />
          <a-icon type="redo" />
        </template>
      </a-card>
    </a-col>
    <a-col :span="8" style="margin-top:2vh">
      <a-card>
        <h4>Other Permits</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <template slot="actions">
          <a-icon type="edit" />
          <a-icon type="redo" />
        </template>
      </a-card>
    </a-col>
    <a-col :span="8" style="margin-top:2vh">
      <a-card>
        <h4>See All Permits Filed</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <template slot="actions">
          <a-icon type="edit" @click="redirect('Transactions')" />
          <a-icon type="redo" />
        </template>
      </a-card>
    </a-col> -->
  </a-row>
</template>

<script>
export default {
  methods: {
    redirect(nav) {
      this.$emit("redirect", nav);
    }
  }
};
</script>

<style>
</style>