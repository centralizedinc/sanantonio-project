<template>
  <a-layout>
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
        <a-col :span="1"><a-avatar src="https://randomuser.me/api/portraits/thumb/men/65.jpg"></a-avatar></a-col>
        <a-col :span="10"><h3 style="color:#ffffff">Juan Dela Cruz</h3></a-col>
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
          <a-icon type="logout" style="color:#ffffff"></a-icon>
        </a-col>
      </a-row>
    </a-layout-header>
    <a-layout-content class="content" style="margin-top:10vh; margin-left:1vh; margin-right:1vh;">
      <router-view></router-view>
    </a-layout-content>
    <!-- <a-layout-footer class="footer" >
      Lucena City
    </a-layout-footer> -->
  </a-layout>
</template>

<script>

export default {
  data(){
    return {
      collapsed:false
    }
  }
}
</script>

<style>

</style>
