<template>
  <a-layout >
    <a-layout-header class="header" :style="headerStyle">
      <a-row type="flex" justify="start" :gutter="8">
        <a-col :span="2">
          <a-avatar src="https://www.lucenacity.gov.ph/img/Lucena_Seal200.png" :size="50"></a-avatar>
        </a-col>
        <a-col :span="4">
          <h3 style="color:white">Lucena City</h3>
        </a-col>
        <a-col :span="2" :push="14">
         <a-button ghost block @click="visible=true">LOGIN</a-button>
        </a-col>
        <a-col :span="2" :push="14">
         <a-button ghost block>ABOUT</a-button>
        </a-col>
      </a-row>
    </a-layout-header>
    <a-layout-content>
      <div style="background-image:url('https://www.lucenacity.gov.ph/images/banner7.jpg'); height:100%;background-repeat: no-repeat;
  background-size: cover">
      <a-row style="height:100vh" type="flex" justify="start">
        <a-col :span="20" style="margin-top:25vh; margin-left:15vh">
          <div style="font-size: 52px; color:#ffffff; ">Lucena City</div>
          <span style="font-size: 42px; color:#ffffff;">Ease of Doing Business Portal</span>
        </a-col>
        <!-- <a-col :span="8" style="margin-top:20vh;">
          <img src="https://i.postimg.cc/VNqw2L6x/lucena-image1.png" width="100%">
        </a-col> -->
        <a-col :span="8" style="margin-top:-20vh; margin-left:15vh">
          <a-row :gutter="16">
            <a-col :span="12">
              <a-button size="large" block type="primary">Read More</a-button>
            </a-col>
            <a-col :span="12">
              <a-button size="large" block type="primary" @click="signup_visible=true">Sign-up</a-button>
            </a-col>
          </a-row>         
        </a-col>
      </a-row>
      </div>
      <a-row type="flex" style="margin-top:10vh; margin-left:5vh; margin-right:5vh" :gutter="8">
        <a-col :span="8">
          <a-card title="News/Announcements">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a-divider></a-divider>
          <a-button type="primary">Read More</a-button>
          </a-card>
        </a-col>
         <a-col :span="8">
          <a-card title="Permits and Certificates">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <a-divider></a-divider>
          <a-button type="primary">Apply Now</a-button> 
          </a-card>
        </a-col>
         <a-col :span="8">
          <a-card title=" Report Emergency/Calamity">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          <a-divider></a-divider>
          <a-button type="primary">Report</a-button>
          </a-card>
        </a-col>
      </a-row>
      <a-row type="flex" style="margin-top:10vh; margin-left:5vh; margin-right:5vh">
        <a-col :span="24">
          <h1>News/Announcements</h1>
          <a-divider></a-divider>
        </a-col>
      </a-row>
      <a-row type="flex" style="margin-top:10vh; margin-left:5vh; margin-right:5vh">
        <a-col :span="24">
          <h1>Permits and Certificates</h1>
          <a-divider></a-divider>
        </a-col>
      </a-row>
      <a-row type="flex" style="margin-top:10vh; margin-left:5vh; margin-right:5vh">
        <a-col :span="24">
          <h1>Report Emergency/Calamity</h1>
          <a-divider></a-divider>
        </a-col>
      </a-row>
      <a-row type="flex" style="margin-top:10vh; margin-left:5vh; margin-right:5vh">
        <a-col :span="24">
          <h1>Get in touch</h1>
          <a-divider></a-divider>
        </a-col>
      </a-row>
      
    </a-layout-content>
    <a-layout-footer style="background-color: #1A1693; color: #ffffff">Lucena City - Ease of Doing Business @2019</a-layout-footer>
    <a-modal v-model="signup_visible" title="Register">
      <!-- <div style="background:rgba(25, 25, 25, .5)"> -->
        <!-- <img src="https://i.postimg.cc/VNqw2L6x/lucena-image1.png" width="100%" /> -->
        <a-row type="flex" justify="center" :gutter="16">
          <!-- <a-col :span="16">
            <a-avatar src="https://i.postimg.cc/VNqw2L6x/lucena-image1.png" shape="square" :size="300"></a-avatar>
          </a-col> -->
          <a-col :span="24">
            <p>Register with facebook or google</p>
          </a-col>
          <a-col :span="12">           
            <a-button block size="large" type="primary"> <a-icon type="facebook"></a-icon>Facebook</a-button>
          </a-col>
          <a-col :span="12">
            <a-button block size="large" style="background-color:#DE4935; color:#FFFFFF"> <a-icon type="google"></a-icon>Google</a-button>
          </a-col>
           <a-col :span="24">
            <a-divider>Or</a-divider>
          </a-col>
          <a-col :span="24">
             <a-form >
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
      <!-- <template slot="footer">
        <a-button key="submit" type="primary" :loading="loading" @click="$router.push('/app')">
          Submit
        </a-button>
        </template> -->
      <!-- </div> -->
    </a-modal>
    
    <a-modal v-model="visible">
      <!-- <div style="background:rgba(25, 25, 25, .5)"> -->
        <!-- <img src="https://i.postimg.cc/VNqw2L6x/lucena-image1.png" width="100%" /> -->
        <a-row type="flex" justify="center">
          <a-col :span="16">
            <a-avatar src="https://i.postimg.cc/VNqw2L6x/lucena-image1.png" shape="square" :size="300"></a-avatar>
          </a-col>
          <a-col :span="24">
             <a-form style="margin-top:-10vh">
              <a-form-item>
                <a-input placeholder="Username"></a-input>
              </a-form-item>
              <a-form-item>
                <a-input placeholder="Password" type="password"></a-input>
              </a-form-item>
            </a-form>
          </a-col>

        </a-row>             
      <template slot="footer">
        <a-button key="submit" type="primary" :loading="loading" @click="$router.push('/app')">
          Login
        </a-button>
        </template>
      <!-- </div> -->
    </a-modal>
  </a-layout>
</template>

<script>
export default {
  data(){
    return {
      signup_visible:false,
      visible:false,
      topLocation:0
    }
  },
  methods: {
    handleScroll (event) {
      // Any code to be executed when the window is scrolled
      console.log('event ::: ',JSON.stringify(window.top.scrollY))
      this.topLocation = window.top.scrollY;
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  computed:{
    headerStyle(){
      if(this.topLocation < 150){
        return 'background-color: transparent'
      }else{
        return 'background-color: #1A1693'
      }
    }
  }
}
</script>

<style>
</style>