<template>
  <a-row type="flex" :gutter="16">
    <!-- <a-col :span="12">
        <a-card title="Create Post">
            <a-row type="flex" :gutter="8">
              <a-col :span="4">
                  <a-avatar>AB</a-avatar>
              </a-col>
              <a-col :span="20">
                  <a-textarea :rows="5" placeholder="Write something..."></a-textarea>
              </a-col>
            </a-row>
            <a-row type="flex" justify="end" :gutter="8" style="margin-top:1vh">
              <a-col :span="6">
                  <a-button type="primary">Post <a-icon type="export"></a-icon></a-button>
              </a-col>
            </a-row>
        </a-card>
    </a-col>
    <a-col :span="12">
        <a-card title="Subscribers">
            <a-row type="flex" :gutter="8">
                <a-col :span="12" v-for="sub in subscribers" :key="sub.login.uuid">
                    <a-card >
                        <a-row type="flex" :gutter="8"> 
                            <a-col :span="8" >
                                <a-avatar :src="sub.picture.thumbnail"></a-avatar>
                            </a-col>
                            <a-col :span="16" >
                                <p>{{sub.name.first}} {{sub.name.last}}</p>
                            </a-col>
                        </a-row>
                    </a-card>
                </a-col>
            </a-row>
        </a-card>
    </a-col> -->
    <a-col :span="24">
        <a-card>
            <div v-for="i in 4" :key="i">
<<<<<<< HEAD
                <a-skeleton  active avatar :paragraph="{rows: 4}" />
                <a-divider></a-divider>
            </div>
                
=======
                <a-skeleton  active avatar :paragraph="{rows: 2}" width="12" />
                <a-divider></a-divider>
            </div>
>>>>>>> 0042bfa7d900d19df1ef35fa984fe059271a2870
        </a-card>
        
    </a-col>
  </a-row>
</template>

<script>
export default {
    data(){
        return {
            subscribers:[]
        }
    },
    created(){
        this.init();
    },
    methods:{
        init(){
            this.$http.get('https://randomuser.me/api/?results=4')
            .then(results=>{
                console.log('::::',JSON.stringify(results))
                this.subscribers = results.data.results
            })
            .catch(err=>{
                console.log(err);
                // this.$notification.error({
                    
                // })
            })
        }
    }
}
</script>

<style>
.ant-skeleton-content .ant-skeleton-title{
<<<<<<< HEAD
    height: 9px;
}

.ant-skeleton-content .ant-skeleton-paragraph > li{
    height: 9px;
=======
    height:1vh
}
.ant-skeleton-content .ant-skeleton-paragraph .li{
    height:1vh
>>>>>>> 0042bfa7d900d19df1ef35fa984fe059271a2870
}
</style>