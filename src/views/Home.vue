<template>
  <a-layout>
    <a-layout-header class="header">
      <h3 style="color:white">Lucena City</h3>
    </a-layout-header>
    <a-layout-content style="height:100vh; min-height:100vh;background-image:url('https://i.postimg.cc/MpjqbY8K/lucena-bg.jpg'); height:100%;background-position: center;
  background-repeat: no-repeat;
  background-size: cover">
    <a-row type="flex" :gutter="16" justify="center" style="opacity:0.96; margin-top: 15vh; margin-left:5vh; margin-right: 5vh"> 
      <a-col :span="24">
        <a-card >
          <a-row>
            <a-col :xl="12" :lg="12">
              <img src="https://i.postimg.cc/VNqw2L6x/lucena-image1.png" width="80%"/>
            </a-col>
            <a-col :xl="12" :lg="12">
              <a-card>
                <h1>Login</h1>
                <a-divider></a-divider>
                <a-form>
                  <a-form-item>
                    <a-input placeholder="Username"></a-input>
                  </a-form-item>
                  <a-form-item>
                     <a-input placeholder="Password"></a-input>
                  </a-form-item>
                </a-form>
                <a-divider></a-divider>
                <a-button block type="primary" @click="$router.push('/app')">Continue</a-button>
              </a-card>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
    </a-row>
    </a-layout-content>
    <a-layout-footer class="footer">
      lucena @2019
    </a-layout-footer>
  </a-layout>
</template>

<script>
export default {

}
</script>

<style>
.bg { 
  /* The image used */
  background-image: url('https://postimg.cc/qN0PpyR9');

  /* Full height */
  height: 100%; 

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>