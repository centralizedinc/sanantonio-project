<template>
  <component v-bind:is="currentView" @redirect="redirect"></component>
</template>

<script>
import mainView from "@/components/permits/main";
import fullView from "@/components/permits/fullView";
import BusinessPermit from "@/components/permits/BusinessPermit";
import Transactions from "@/components/permits/Transactions";
export default {
  props:['full'],
  components: {
    mainView,
    fullView,
    BusinessPermit,
    Transactions
  },
  data() {
    return {
      currentView: "mainView"
    };
  },
  created(){
    console.log("fullView:::", this.full)
    if(this.full){
      this.currentView = "fullView"
    }
  },
  methods: {
    redirect(nav) {
      console.log(nav);
      this.currentView = nav;
    }
  }
};
</script>

<style>
</style>