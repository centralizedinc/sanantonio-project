<template>
<div style="background: linear-gradient(to top, #283048, #859398); ">
    
  <a-row  type="flex" justify="center" :gutter="8" >
      <a-col :span="20" style="margin-top:15vh">
          <h1 style="color:#FFFFFF">Lucena News</h1>
          <a-divider></a-divider>
      </a-col>
      <a-col :span="20" style="margin-bottom: 10vh">
          <mayors-corner></mayors-corner>
      </a-col>
  </a-row>
</div>
</template>

<script>
import MayorsCorner from '@/components/MayorsCorner'
export default {
    components: {MayorsCorner}

}
</script>

<style>

</style>