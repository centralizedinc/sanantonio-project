  <template></template>

<script>
export default {
  created() {
    var data = new Buffer(this.$route.query.data, "base64").toString();
    console.log('process.env.VUE_APP_HOME_URI :', process.env.VUE_APP_HOME_URI);
    console.log('data :', data);
    if(this.$route.query.platform === 'facebook'){
      this.$store.commit("FB_LOGIN", JSON.parse(data));
    }else{
      this.$store.commit("GOOGLE_LOGIN", JSON.parse(data));
    }
    
    // window.opener.location.href = `${process.env.VUE_APP_HOME_URI}/#/app`
    // window.opener.location.reload()
    // window.close();
  }
};
</script>

<style>
</style>
