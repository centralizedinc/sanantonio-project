<template>
  <div>
    <div
      :style="`background-image:url('${constant_helper.login_background}'); height:100%;background-repeat: no-repeat;
  background-size: cover`"
    >
      <a-row style="height:100vh" type="flex" justify="start">
        <a-col
          data-aos="fade-up"
          data-aos-duration="50000"
          :push="1"
          :span="7"
          style="margin-top:20vh; margin-left:52vh"
        >
          <div
            class="textShadow"
            style="font-size: 50px; color:#fbf49d; "
          >Ease of Doing Business Portal</div>
          <div
            style="font-size: 20px; color:#0ba4de; letter-spacing: 1em; text-shadow: -5px 2px 2px #00000"
          >{{constant_helper.home_header.label}}</div>
          <br />
          <span style="margin-top:2vh ; color:#e4e2e2 " class="textShadow">
            Ease of Doing Business Portal of {{constant_helper.home_header.label}} is an online system that expedites the application process for business registration, in compliance with the Ease of Doing Business Act under Republic Act No. 11032.
            <br />
            <br />
            {{constant_helper.home_header.label}} created a unified business application form to make it easier for all our constituents to put up or renew businesses. It also features a zero-contact policy for complete transparency.
          </span>
        </a-col>
        <a-col :push="2" :span="8" style="margin-top:20vh;">
          <a-card style="background: rgba(59, 79, 99, 0.62)">
            <template slot="title">
              <div style="color:#ffffff">Enter Credentials</div>
            </template>
            <a-form>
              <a-form-item>
                <a-input size="large" placeholder="Email">
                  <a-icon slot="prefix" type="mail" />
                </a-input>
              </a-form-item>
              <a-form-item>
                <a-input size="large" placeholder="Password" :type="reveal?'text':'password'">
                  <a-icon slot="prefix" type="lock" />
                  <a-icon
                    slot="suffix"
                    :type="reveal?'eye':'eye-invisible'"
                    @click="reveal=!reveal"
                    style="cursor:pointer"
                  />
                </a-input>
              </a-form-item>
              <a-button size="large" block ghost>Login</a-button>
              <a-divider></a-divider>
              <p style="color:white">Login using facebook or google accounts</p>
              <a-row type="flex" gutter="16">
                <a-col :span="12">
                  <a-button
                    block
                    style="border: #4267B2;background-color:#4267B2; color:#FFFFFF"
                    @click="registerFacebook"
                  >
                    <a-icon type="facebook"></a-icon>Facebook
                  </a-button>
                </a-col>
                <a-col :span="12">
                  <a-button
                    block
                    @click="registerGoogle"
                    style="border: #DE4935;background-color:#DE4935; color:#FFFFFF"
                  >
                    <a-icon type="google"></a-icon>Google
                  </a-button>
                </a-col>
              </a-row>
            </a-form>
          </a-card>
        </a-col>
      </a-row>
    </div>
    <a-row
      :gutter="16"
      type="flex"
      align="middle"
      style="margin-top:10vh; margin-left:5vh; margin-right:5vh"
    >
      <a-col :span="8" data-aos="fade-up" data-aos-duration="30000">
        <a-card title=" Report Emergency/Calamity">
          To protect our community, emergency management has to keep our response teams well informed about situations-in-progress. This tool efficiently gather, analyze, and associate critical information in a timely manner. In this way, we can optimize response times and help protect first responders in the field.
          <a-divider></a-divider>
          <a-button type="primary">Report</a-button>
        </a-card>
      </a-col>
      <a-col :span="8" data-aos="fade-up" data-aos-duration="30000">
        <a-card title="News/Announcements">
          <p>Stay updated with all the latest and official News and Announcements of {{constant_helper.home_header.label}}.</p>
          <a-divider></a-divider>
          <a-button type="primary" @click="$router.push('/news')">Read More</a-button>
        </a-card>
      </a-col>
      <a-col :span="8" data-aos="fade-up" data-aos-duration="30000">
        <a-card title="Permits and Certificates">
          In compliance with the Ease of Doing Business Act, online registration and application of Permits and Certificates for all the constituents of {{constant_helper.home_header.label}} is now available through this Portal. The public may apply online, but only registered members can view, track and manage ALL their application.
          <a-divider></a-divider>
          <a-button type="primary" @click="$router.push('/permits')">Apply Now</a-button>
        </a-card>
      </a-col>
    </a-row>
    <a-row
      :gutter="16"
      type="flex"
      align="middle"
      style="margin-top:10vh; margin-left:5vh; margin-right:5vh;"
    >
      <a-col :span="24" data-aos="fade-up">
        <h1>News/Announcements</h1>
        <a-divider></a-divider>
      </a-col>
      <a-col :span="14" data-aos="fade-up">
        <div>Stay updated with all the latest and official News and Announcements of {{constant_helper.home_header.label}}.</div>
      </a-col>
      <a-col :span="8" data-aos="fade-up">
        <img
          src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/icloud/macos-mojave-ios12-macbook-ipad-pro-iphone-x-set-up-icloud-drive-hero.jpg"
          width="100%"
          alt
        />
      </a-col>
    </a-row>
    <a-row
      :gutter="16"
      type="flex"
      align="middle"
      style="margin-top:10vh; margin-left:5vh; margin-right:5vh"
    >
      <a-col :span="24" data-aos="fade-up">
        <h1>Permits and Certificates</h1>
        <a-divider></a-divider>
      </a-col>
      <a-col :span="8" data-aos="fade-up">
        <img
          width="100%"
          src="https://basecamp.com/assets/general/devices-medium-1047d88c14b1c02d9415d18799ccd289eb16d6733166b4529f317faeb28621c6.png"
          alt
        />
      </a-col>
      <a-col :span="14" data-aos="fade-up">
        <p>In compliance with the Ease of Doing Business Act, online registration and application of Permits and Certificates for all the constituents of {{constant_helper.home_header.label}} is now available through this Portal. The public may apply online, but only registered members can view, track and manage ALL their application.</p>
      </a-col>
    </a-row>
    <a-row
      :gutter="16"
      type="flex"
      align="middle"
      style="margin-top:10vh; margin-left:5vh; margin-right:5vh; margin-bottom:10vh"
    >
      <a-col :span="24" data-aos="fade-up">
        <h1>Report Emergency/Calamity</h1>
        <a-divider></a-divider>
      </a-col>
      <a-col :span="14" data-aos="fade-up">
        <p>To protect our community, emergency management has to keep our response teams well informed about situations-in-progress. This tool efficiently gather, analyze, and associate critical information in a timely manner. In this way, we can optimize response times and help protect first responders in the field.</p>
      </a-col>
      <a-col :span="8" data-aos="fade-up">
        <img
          width="100%"
          src="https://bjango.com/images/mac/skalapreview2/skala-preview-hero.jpg"
          alt
        />
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reveal: false
    };
  },
  methods: {
    registerFacebook() {
      console.log("open facebook ", process.env.VUE_APP_BASE_API_URI);
      window.open(
        `${process.env.VUE_APP_BASE_API_URI}/auth/facebook`,
        "",
        "width=500,height=450"
      );
      this.signup_visible = false;
    },
    registerGoogle() {
      window.open(
        `${process.env.VUE_APP_BASE_API_URI}/auth/google`,
        "",
        "width=500,height=450"
      );
      this.signup_visible = false;
    }
  }
};
</script>
   
<style>
.textShadow {
  text-shadow: -2px 5px 4px #000000;
}
</style>