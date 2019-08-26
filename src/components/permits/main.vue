<template>
  <a-row type="flex" :gutter="24">
    <a-col :span="8" style="margin-top:2vh">
      <a-card>
        <h4 style="color:#0F82E0">Business Permit</h4>
        <p>
          Business licenses are permits issued by government agencies that allow individuals or companies to conduct business within the government's geographical jurisdiction. 
        </p>
        <template slot="actions">
          <a-icon type="edit" @click="redirect('business-permit')"/>
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
  </a-row>
</template>

<script>
export default {
    methods:{
        redirect(nav){
            this.$emit('redirect',nav)
        }
    }
}
</script>

<style>

</style>