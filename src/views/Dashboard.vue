<template>
  <a-layout>
    <a-back-top>
      <a-avatar>
        <a-icon type="up"></a-icon>
      </a-avatar>
    </a-back-top>
    <a-layout-header class="header">
      <a-row justify="start" :gutter="24">
        <a-col :span="1">
          <a-avatar src="https://www.lucenacity.gov.ph/img/Lucena_Seal200.png" :size="50"></a-avatar>
        </a-col>
        <a-col :span="10">
          <h3 style="color:#ffffff; ">Lucena City</h3>
        </a-col>
        <a-col :span="10">
          <a-input-search placeholder="Search" @search="onSearch" />
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
    <a-layout-content class="content" style="margin-top:10vh">
      <a-row type="flex" justify="center">
        <a-col :span="4" style="margin-right:1vw">
          <a-card
            style="margin-top:10vh; margin-bottom:2vh; background: linear-gradient(to right, #0575e6, #021b79);"
          >
            <a-row type="flex" justify="center">
              <a-col :span="8">
                <a-avatar
                  :src="user.avatar"
                  :size="54"
                  style="margin-top:-10vh; border: 2px solid #ffffff"
                ></a-avatar>
              </a-col>
              <a-col :span="24">
                <a-row type="flex" justify="center">
                  <a-col :span="12">
                    <h3 style="color:#FFFFFF">{{user.fname}} {{user.lname}}</h3>
                  </a-col>
                </a-row>
              </a-col>
            </a-row>
          </a-card>
          <a-affix :offsetTop="100">
            <a-menu :defaultSelectedKeys="['/app']" mode="inline" @click="nav">
              <a-menu-item key="/app">
                <a-icon type="layout" />
                <span>Home</span>
              </a-menu-item>
              <a-menu-item key="/app/permits">
                <a-icon type="file-exclamation" />
                <span>My Permits</span>
              </a-menu-item>
              <a-menu-item key="/app/taxes">
                <a-icon type="file-protect" />
                <span>My Taxes</span>
              </a-menu-item>
              <a-menu-item key="/app/account">
                <a-icon type="user-add" />
                <span>My Account</span>
              </a-menu-item>
              <a-menu-item key="logout">
                <a-icon type="logout" />
                <span>Logout</span>
              </a-menu-item>
            </a-menu>
          </a-affix>
        </a-col>
        <a-col :span="14" style="margin-right:1vw; margin-left:1vw">
          <router-view></router-view>
        </a-col>
        <a-col :span="4" style="margin-left:1vw">
          <a-affix :offsetTop="40">
            <a-card title="Citizen Report" style="margin-top: 10vh">
              <p>Emergency Hotline</p>
              <a-row>
                <a-col :span="12">
                  <a-card
                    style="background-color:#1A1693; cursor:pointer"
                    class="emergency_btn"
                    @click="report(1)"
                  >
                    <a-row type="flex" justify="center">
                      <a-col :span="12">
                        <a-icon type="fire" style="color:#ffffff;font-size:24px"></a-icon>
                      </a-col>
                    </a-row>
                  </a-card>
                </a-col>
                <a-col :span="12">
                  <a-card
                    style="background-color:#1A1693; cursor:pointer"
                    class="emergency_btn"
                    @click="report(1)"
                  >
                    <a-row type="flex" justify="center">
                      <a-col :span="12">
                        <a-icon type="sound" style="color:#ffffff;font-size:24px"></a-icon>
                      </a-col>
                    </a-row>
                  </a-card>
                </a-col>
                <a-col :span="12">
                  <a-card
                    style="background-color:#1A1693; cursor:pointer"
                    class="emergency_btn"
                    @click="report(1)"
                  >
                    <a-row type="flex" justify="center">
                      <a-col :span="12">
                        <a-icon type="alert" style="color:#ffffff;font-size:24px"></a-icon>
                      </a-col>
                    </a-row>
                  </a-card>
                </a-col>
                <a-col :span="12">
                  <a-card
                    style="background-color:#1A1693; cursor:pointer"
                    class="emergency_btn"
                    @click="report(1)"
                  >
                    <a-row type="flex" justify="center">
                      <a-col :span="12">
                        <a-icon type="safety" style="color:#ffffff;font-size:24px"></a-icon>
                      </a-col>
                    </a-row>
                  </a-card>
                </a-col>
                <a-col :span="24" style="margin-top:2vh">
                  <a-button block ghost type="primary" @click="report(1)">View Incident Reports</a-button>
                </a-col>
              </a-row>
            </a-card>
          </a-affix>
        </a-col>
      </a-row>
    </a-layout-content>
    <a-layout-footer
      style="background: linear-gradient(to left, #0575e6, #021b79); color: #ffffff"
    >Lucena City</a-layout-footer>

    <a-modal :visible="visible" @cancel="visible=false" title="Report Incident">
      <GmapMap
        id="map"
        ref="map"
        :center="{lat:coordinates.lat, lng:coordinates.lng}"
        :zoom="16"
        map-type-id="terrain"
        draggable="true"
        style="width: 100%; height: 300px"
      >
        <!-- <GmapMarker :draggable="true" :position="coordinates" :icon="fire_icon" :animation="animation" /> -->

        <GmapMarker
          v-for="(coordinate, index) in sample_coordinates"
          :key="index"
          :draggable="false"
          :icon="fire_icon"
          :position="coordinate"
        />
      </GmapMap>
      <template slot="footer">
        <a-button
          key="submit"
          type="primary"
          :loading="loading"
          @click="submitReport"
        >Confirm and Submit</a-button>
      </template>
    </a-modal>
  </a-layout>
</template>

<script>
import fire_icon from "@/assets/fire_icon.png";

export default {
  data() {
    return {
      fire_icon,
      loading: false,
      collapsed: false,
      user: {},
      visible: false,
      coordinates: { lat: 13.9413957, lng: 121.6234471 },
      animation: {},
      sample_coordinates: []
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.user = this.$store.state.user_session.user;
      // console.log('USER_DETAILS ::: ', JSON.stringify(this.$store.state.user_session))
    },
    nav(e) {
      if (e.key === "logout") {
        this.logout();
      } else {
        this.$router.push(e.key);
      }
    },
    report(num) {
      this.visible = true;
      var _self = this;
      this.$getLocation().then(coordinates => {
        this.coordinates = coordinates;
        console.log('coordinates :', coordinates);
        const sample_coordinates = [
          {
            lat: coordinates.lat + 0.9,
            lang: coordinates.lang + 0.9,
            accuracy: coordinates.accuracy,
            altitude: coordinates.altitude,
            altitudeAccuracy: coordinates.altitudeAccuracy
          }
        ];
        console.log('sample_coordinates :', sample_coordinates);
        this.sample_coordinates = sample_coordinates;
        this.$gmapApiPromiseLazy().then(() => {
          _self.animation = google.maps.Animation.DROP;
        });
      });
    },
    submitReport() {
      this.visible = false;
      this.$notification.success({
        message: "Thank you for your concern",
        description: "Your Report has been sent. Stay safe!"
      });
    },
    logout() {
      var _self = this;
      this.$confirm({
        title: "Logout Confirmation",
        content: "Are you sure you want to logout?",
        okText: "Yes",
        cancelText: "No",
        onOk() {
          console.log("OK");
          _self.$router.push("/");
        },
        onCancel() {
          console.log("Cancel");
        }
      });
    },
    onSearch() {}
  }
};
</script>

<style>
.emergency_btn:hover {
  background: linear-gradient(to bottom, #0575e6, #021b79);
  transform: scale(0.95);
}
</style>
