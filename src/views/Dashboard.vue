<template>
  <a-layout>
    <a-back-top>
      <a-avatar><a-icon type="up"></a-icon></a-avatar>
    </a-back-top>
    <a-layout-sider collapsible theme="light"
      v-model="collapsed" :trigger="null">
      <img src="https://i.postimg.cc/VNqw2L6x/lucena-image1.png"  style="margin-top:15vh;width:100%" alt="asd">
      <a-menu  :defaultSelectedKeys="['1']" mode="inline">
        <a-menu-item key="1">
          <a-icon type="bars" />
          <span>Posts</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="file-exclamation" />
          <span>Reports</span>
        </a-menu-item>
         <a-menu-item key="3">
          <a-icon type="file-protect" />
          <span>Reviews</span>
        </a-menu-item>
        <a-menu-item key="4">
          <a-icon type="user-add" />
          <span>Jobs</span>
        </a-menu-item>
        <a-menu-item key="5">
          <a-icon type="schedule" />
          <span>Events</span>
        </a-menu-item>
        <a-menu-item key="6">
          <a-icon type="team" />
          <span>Community</span>
        </a-menu-item>
      </a-menu>
      </a-layout-sider>
    <a-layout-header class="header">
      <a-row justify="start" :gutter="24">
        <a-col :span="1"><a-avatar :src="user.avatar"></a-avatar></a-col>
        <a-col :span="10"><h3 style="color:#ffffff">{{user.fname}} {{user.lname}}</h3></a-col>
        <a-col :span="10">
          <a-input-search
            placeholder="Search"
            @search="onSearch"
          />
        </a-col>
        <a-col :span="1">
          <a-icon type="notification" style="color:#ffffff"></a-icon>
        </a-col>
        <a-col :span="1">
          <a-icon type="setting" style="color:#ffffff"></a-icon>
        </a-col>
        <a-col :span="1">
          <a-icon type="logout" style="color:#ffffff; cursor:pointer" @click="logout"></a-icon>
        </a-col>
      </a-row>
    </a-layout-header>
    <a-layout-content class="content" style="margin-top:10vh; margin-left:1vh; margin-right:1vh;">
      <router-view></router-view>
    </a-layout-content>
    <!-- <a-layout-footer class="footer" >
      Lucena City
    </a-layout-footer> -->
    <!-- <a-modal :visible="logout" title="Confirm Logout" :closable="false">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal> -->
  </a-layout>
  
</template>

<script>

export default {
  data(){
    return {
      collapsed:false,
      user:{}
    }
  },
  created(){
    this.init()
  },
  methods:{
    init(){
      this.user = this.$store.state.user_session.user
      // console.log('USER_DETAILS ::: ', JSON.stringify(this.$store.state.user_session))
    },
    logout(){
      var _self = this
      this.$confirm({
        title: 'Logout Confirmation', 
        content: 'Are you sure you want to logout?',
        okText: 'Yes',
        cancelText: 'No',
        onOk() {
          console.log('OK');
          _self.$router.push('/')
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    }
  }
}
</script>

<style>

</style>
