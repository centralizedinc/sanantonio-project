<template>
  <component v-bind:is="currentView" @redirect="redirect"></component>
</template>

<script>
import mainView from "@/components/permits/main";
import BusinessPermit from "@/components/permits/BusinessPermit";
import Transactions from "@/components/permits/Transactions";
export default {
  components: {
    mainView,
    BusinessPermit,
    Transactions
  },
  data() {
    return {
      currentView: "mainView"
    };
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