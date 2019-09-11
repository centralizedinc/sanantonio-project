<template>
  <a-row type="flex" :gutter="24">
      <!-- <a-col :span="24">
          <h3>Downloadable Forms</h3>
          <p>Business Forms and Affidavit</p>
      </a-col> -->
    <a-col :span="24">
      <a-card v-for="i in 4" :key="i">
        <a-row>
          <a-col :span="22">
              Sample Form One
          </a-col>
          <a-col :span="2">
              <a-icon type="download" style="cursor:pointer;font-size:24px;color:#0F82E0"></a-icon>
          </a-col>
        </a-row>
      </a-card>
    </a-col>
  </a-row>
</template>

<script>
export default {

}
</script>

<style>

</style>