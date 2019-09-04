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
    </a-col> -->
    <a-col :span="24">
        <a-card title="Contributors">
            <a-row type="flex" :gutter="8">
                <a-col :span="1" v-for="sub in subscribers" :key="sub.login.uuid">
                    <a-tooltip placement="top" :title="`${sub.name.first} ${sub.name.last}`" >
                        <a-badge status="success" >
                            
                    <a-avatar :src="sub.picture.thumbnail"></a-avatar>
                    </a-badge>
                    </a-tooltip>
                </a-col>
                <a-col :span="24">
                    <a-divider></a-divider>
                    <p>Contribute to the community</p>
                    <a-textarea :rows="3" placeholder="Write a post here..."></a-textarea>
                </a-col>
            </a-row>
            <a-row type="flex" :gutter="8" justify="end" style="margin-top:2vh">
                <a-col :span="6">
                    <a-button block>
                        <a-icon type="picture" theme="twoTone"></a-icon> Photos/Videos </a-button>
                </a-col>
                <a-col :span="4">
                    <a-button block type="primary">
                        <a-icon type="upload" ></a-icon>
                        Post
                    </a-button>
                </a-col>                 
            </a-row>

        </a-card>
    </a-col>
    <a-col :span="24">
        <a-card>
            <div v-for="i in 4" :key="i" >
                <a-skeleton  active avatar :paragraph="{rows: 4}" />
                <a-divider></a-divider>
            </div>
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
            this.$http.get('https://randomuser.me/api/?results=20')
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
    height: 9px;
}

.ant-skeleton-content .ant-skeleton-paragraph > li{
    height: 9px;
}
</style>