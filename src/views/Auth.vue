  <template></template>

<script>
export default {
  created() {
    var data = new Buffer(this.$route.query.data, "base64").toString();
    console.log('data :', data);
    if(this.$route.query.platform === 'facebook'){
      this.$store.commit("FB_LOGIN", JSON.parse(data));
    }else{
      this.$store.commit("GOOGLE_LOGIN", JSON.parse(data));
    }
    
    window.opener.location.href = 'http://localhost:8080/#/app'
    window.opener.location.reload()
    window.close();
  }
};
</script>

<style>
</style>
