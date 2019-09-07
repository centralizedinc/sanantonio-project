<template>
<div style="background: linear-gradient(to top, #283048, #859398); ">
    
  <a-row  type="flex" justify="center" :gutter="8" >
      <a-col :span="20" style="margin-top:15vh">
          <h1 style="color:#FFFFFF">Apply for Permits and Certificates</h1>
          <a-divider></a-divider>
      </a-col>
      <a-col :span="20" style="margin-bottom: 10vh">
          <permits></permits>
      </a-col>
  </a-row>
</div>
</template>

<script>
import Permits from '@/components/Permits'
export default {
    components: {Permits}

}
</script>

<style>

</style>