<template>
  <a-layout>
    <a-back-top>
      <a-avatar>
        <a-icon type="up" :size="42"></a-icon>
      </a-avatar>
    </a-back-top>
    <a-layout-header class="header" :style="headerStyle">
      <a-row type="flex" justify="start" :gutter="8">
        <a-col :span="2">
          <a-avatar
            style="cursor:pointer"
            @click="$router.push('/')"
            :src="constant_helper.home_header.logo"
            :size="50"
          ></a-avatar>
        </a-col>
        <a-col :span="4">
          <h3
            style="color:white; margin-left: -6vh; cursor:pointer"
            @click="$router.push('/')"
          >{{constant_helper.home_header.label}}</h3>
        </a-col>
        <a-col :span="2" :push="8">
          <a-button ghost block type="link" @click="$router.push('/news')">News</a-button>
        </a-col>
        <a-col :span="2" :push="8">
          <a-button ghost block type="link" @click="report()">Emergency</a-button>
        </a-col>

        <a-col :span="2" :push="8">
          <a-button ghost block type="link" @click="$router.push('/taxes')">Local Taxes</a-button>
        </a-col>
        <a-col :span="2" :push="8">
          <a-button ghost block type="link" @click="$router.push('/permits')">Permits</a-button>
        </a-col>
        <a-col :span="2" :push="8">
          <a-button ghost block @click="signup_visible=true">SIGN-UP</a-button>
        </a-col>
      </a-row>
    </a-layout-header>
    <a-layout-content>
      <router-view></router-view>
    </a-layout-content>
    <a-layout-footer style="background: linear-gradient(to left, #870000, #190a05); color: #ffffff">
      <a-row>
        <a-col :span="24">
          <h1 style="color:#ffffff">Get in touch</h1>
          <!-- <a-divider></a-divider> -->
          <p>
            <a-icon type="phone"></a-icon>Hotline: 123-3456
          </p>
          <p>
            <a-icon type="global"></a-icon>Website:
            <a
              style="color:#ffffff"
              :href="constant_helper.mayor_details.website.label"
            >{{constant_helper.mayor_details.website.label}}</a>
          </p>
          <p>
            <a-icon type="facebook"></a-icon>Facebook:
            <a
              style="color:#ffffff"
              :href="constant_helper.mayor_details.facebook.label"
            >{{constant_helper.mayor_details.facebook.label}}</a>
          </p>
          <a-divider></a-divider>
        </a-col>

        <a-col :span="18">
          <p>© Copyright 2019 CCCI Inc. - All Rights Reserved</p>
        </a-col>
        <a-col :span="1">
          <a-avatar size="large" style="background-color:#4267B2">
            <a-icon type="facebook"></a-icon>
          </a-avatar>
        </a-col>
        <a-col :span="1">
          <a-avatar size="large" style="background-color:#EA4335">
            <a-icon type="google"></a-icon>
          </a-avatar>
        </a-col>
        <a-col :span="1">
          <a-avatar size="large" style="background-color:#4267B2">
            <a-icon type="twitter"></a-icon>
          </a-avatar>
        </a-col>
        <a-col :span="1">
          <a-avatar size="large" style="background:#00AFF0">
            <a-icon type="skype"></a-icon>
          </a-avatar>
        </a-col>
        <a-col :span="1">
          <a-avatar size="large" style="background-color:#FF2500">
            <a-icon type="youtube"></a-icon>
          </a-avatar>
        </a-col>
        <a-col :span="1">
          <a-avatar
            size="large"
            style="background:radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);"
          >
            <a-icon type="instagram"></a-icon>
          </a-avatar>
        </a-col>
      </a-row>
    </a-layout-footer>
    <a-modal v-model="signup_visible" title="Register">
      <a-row type="flex" justify="center" :gutter="16">
        <a-col :span="24">
          <p>Register with facebook or google</p>
        </a-col>
        <a-col :span="12">
          <a-button
            block
            size="large"
            style="border: #4267B2;background-color:#4267B2; color:#FFFFFF"
            @click="registerFacebook"
          >
            <a-icon type="facebook"></a-icon>Facebook
          </a-button>
        </a-col>
        <a-col :span="12">
          <a-button
            block
            size="large"
            @click="registerGoogle"
            style="border: #DE4935;background-color:#DE4935; color:#FFFFFF"
          >
            <a-icon type="google"></a-icon>Google
          </a-button>
        </a-col>
        <a-col :span="24">
          <a-divider>Or</a-divider>
        </a-col>
        <a-col :span="24">
          <a-form>
            <a-form-item>
              <a-input placeholder="First Name"></a-input>
            </a-form-item>
            <a-form-item>
              <a-input placeholder="Last Name"></a-input>
            </a-form-item>
            <a-form-item>
              <a-input placeholder="Email"></a-input>
            </a-form-item>
            <a-form-item>
              <a-input placeholder="Password" type="password"></a-input>
            </a-form-item>
            <a-form-item>
              <a-input placeholder="Confirm Password" type="password"></a-input>
            </a-form-item>
          </a-form>
        </a-col>
      </a-row>
    </a-modal>
    <!-- Report Modal -->
    <a-modal v-model="visible_report" title="Report Incident">
      <a-row type="flex" align="center" :gutter="16">
        <a-col :span="6">
          <a-card
            style="background-color:#1A1693; cursor:pointer"
            @click="report_type='1'"
            class="emergency_btn"
          >
            <a-row type="flex" justify="center">
              <a-col :span="12">
                <a-icon
                  :type="report_type==='1'?'check':'fire'"
                  style="color:#ffffff;font-size:24px"
                ></a-icon>
              </a-col>
            </a-row>
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card
            style="background-color:#1A1693; cursor:pointer"
            @click="report_type='2'"
            class="emergency_btn"
          >
            <a-row type="flex" justify="center">
              <a-col :span="12">
                <a-icon
                  :type="report_type==='2'?'check':'sound'"
                  @click="report(1)"
                  style="color:#ffffff;font-size:24px"
                ></a-icon>
              </a-col>
            </a-row>
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card
            style="background-color:#1A1693; cursor:pointer"
            @click="report_type='3'"
            class="emergency_btn"
          >
            <a-row type="flex" justify="center">
              <a-col :span="12">
                <a-icon
                  :type="report_type==='3'?'check':'alert'"
                  style="color:#ffffff;font-size:24px"
                ></a-icon>
              </a-col>
            </a-row>
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card
            style="background-color:#1A1693; cursor:pointer"
            @click="report_type='4'"
            class="emergency_btn"
          >
            <a-row type="flex" justify="center">
              <a-col :span="12">
                <a-icon
                  :type="report_type==='4'?'check':'safety'"
                  style="color:#ffffff;font-size:24px"
                ></a-icon>
              </a-col>
            </a-row>
          </a-card>
        </a-col>
      </a-row>
      <GmapMap
        id="map"
        ref="map"
        :center="{lat:coordinates.lat, lng:coordinates.lng}"
        :zoom="16"
        map-type-id="terrain"
        draggable="true"
        style="width: 100%; height: 300px; margin-top:5vh"
      >
        <GmapMarker :draggable="true" :position="coordinates" :animation="animation" />
      </GmapMap>
      <a-textarea style="margin-top: 2vh" :rows="3" placeholder="Add Comments here..."></a-textarea>
      <template slot="footer">
        <a-button
          key="submit"
          type="primary"
          :loading="loading"
          @click="submitReport"
        >Confirm and Submit</a-button>
      </template>
    </a-modal>

    <a-modal v-model="guest_visible" title="Contact Details" @ok="submit">
      <a-row type="flex" justify="center" :gutter="16">
        <a-col :span="24">
          <a-form>
            <a-form-item>
              <a-input placeholder="Name">
                <a-icon slot="prefix" type="user" />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input placeholder="Contact Number">
                <a-icon slot="prefix" type="phone" />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input placeholder="Email">
                <a-icon slot="prefix" type="mail" />
              </a-input>
            </a-form-item>
          </a-form>
        </a-col>
      </a-row>
    </a-modal>
  </a-layout>
</template>

<script>
export default {
  data() {
    return {
      guest_visible: false,
      signup_visible: false,
      visible_report: false,
      visible: false,
      topLocation: 0,
      reveal: false,
      coordinates: { lat: 13.9413957, lng: 121.6234471 },
      animation: {},
      report_type: ""
    };
  },
  methods: {
    handleScroll(event) {
      // Any code to be executed when the window is scrolled
      console.log("event ::: ", JSON.stringify(window.top.scrollY));
      this.topLocation = window.top.scrollY;
    },
    registerFacebook() {
      window.open(
        `${VUE_APP_BASE_API_URI}/auth/facebook`,
        "",
        "width=500,height=450"
      );
      this.signup_visible = false;
    },
    registerGoogle() {
      window.open(
        `${VUE_APP_BASE_API_URI}/auth/google`,
        "",
        "width=500,height=450"
      );
      this.signup_visible = false;
    },
    report() {
      this.visible_report = true;
      var _self = this;
      this.$getLocation().then(coordinates => {
        this.coordinates = coordinates;
        this.$gmapApiPromiseLazy().then(() => {
          _self.animation = google.maps.Animation.DROP;
        });
      });
    },
    submitReport() {
      // this.visible_report = false
      var _self = this;
      this.$confirm({
        title: "You are about to submit a report as guest.",
        content:
          "For faster response, please enter your name & contact no. or Sign-up",
        okText: "Sign-up",
        cancelText: "Continue as guest",
        onOk: _self.signup,
        onCancel: _self.continue
      });
    },
    signup() {
      this.visible_report = false;
      this.signup_visible = true;
    },
    continue() {
      this.guest_visible = true;
    },
    submit() {
      this.guest_visible = false;
      this.visible_report = false;
      this.$notification.success({
        message: "Thank you for your concern",
        description: "Your Report has been sent. Stay safe!"
      });
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  computed: {
    headerStyle() {
      if (this.topLocation < 50) {
        return "background: transparent";
      } else {
        return "background: linear-gradient(to right, #870000, #190a05);";
      }
    }
  }
};
</script>

<style>
</style>