<template>
  <component v-bind:is="currentView" @redirect="redirect"></component>
</template>

<script>
import mainView from "@/components/taxes/main";
import fullView from "@/components/taxes/fullView";
import RealEstateTax from "@/components/taxes/RealEstateTax";
import Transactions from "@/components/taxes/Transactions";
export default {
  props:['full'],
  components: {
    mainView,
    fullView,
    RealEstateTax,
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