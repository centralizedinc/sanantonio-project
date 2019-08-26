<template>
    <component v-bind:is="currentView" @redirect="redirect">
    </component>
</template>

<script>
import mainView from '@/components/permits/main'
import BusinessPermit from '@/components/permits/BusinessPermit'
export default {
  components:{
    mainView,
    BusinessPermit
  },
  data(){
    return {
      currentView:'mainView'
    }
  },
  methods:{
    redirect(nav){
      console.log(nav)
      this.currentView=nav
    }
  }

}
</script>

<style>

</style>