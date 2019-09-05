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
            <template v-if="loading">
            <div v-for="i in 4" :key="i" >
                <a-skeleton  active avatar :paragraph="{rows: 4}" />
                <a-divider></a-divider>
            </div>
            </template>
            <template v-else>
            <a-comment v-for="(sub,indx) in subscribers" :key="sub.name.first">
              <template slot="actions">
                <span>
                  <a-tooltip title="Like">
                    <a-icon
                      type="like"
                      :theme="action === 'liked' ? 'filled' : 'outlined'"
                      @click="like"
                    />
                  </a-tooltip>
                  <span style="padding-left: '8px';cursor: 'auto'">
                    {{likes}}
                  </span>
                </span>
                <span>
                  <a-tooltip title="Dislike">
                    <a-icon
                      type="dislike"
                      :theme="action === 'disliked' ? 'filled' : 'outlined'"
                      @click="dislike"
                    />
                  </a-tooltip>
                  <span style="padding-left: '8px';cursor: 'auto'">
                    {{dislikes}}
                  </span>
                </span>
              </template>
              <a slot="author">{{sub.name.first}} {{sub.name.last}}</a>
              <a-avatar
                :src="sub.picture.thumbnail"
                alt="Han Solo"
                slot="avatar"
              />
              <p slot="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                <a-row type="flex" justify="center" :gutter="8">
                  <a-col :span="8" v-for="i in 3" :key="i">
                    <img :src="`https://picsum.photos/300?random=${indx}${i}`" width="250vh">
                    </a-col>
                </a-row>
              </p>
              <a-tooltip slot="datetime" :title="moment().format('YYYY-MM-DD HH:mm:ss')">
                <span>{{moment().fromNow()}}</span>
              </a-tooltip>
          </a-comment>  
        </template>
        </a-card>
        
    </a-col>
  </a-row>
</template>

<script>
import moment from 'moment'
export default {
    data(){
        return {
            subscribers:[],
            loading:false,
            moment
        }
    },
    created(){
        this.init();
    },
    methods:{
        init(){
            this.loading=true
            this.$http.get('https://randomuser.me/api/?results=20')
            .then(results=>{
                console.log('::::',JSON.stringify(results))
                this.loading=false;
                this.subscribers = results.data.results
            })
            .catch(err=>{
                console.log(err);
                this.loading=false;
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