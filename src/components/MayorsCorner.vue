<template>
  <a-row type="flex" :gutter="16" data-aos="fade-left">
    <a-col :span="24">
       
          <template v-if="loading">
             <a-card>
            <div v-for="i in 4" :key="i" >
                <a-skeleton  active avatar :paragraph="{rows: 4}" />
                <a-divider></a-divider>
            </div>
             </a-card>
          </template>
          
          <template v-else>
            <a-card  v-for="(sub,indx) in subscribers" :key="sub.name.first" style="margin-bottom: 2vh" data-aos="fade-up">
            <a-comment>
              <template slot="actions">
                <span>
                  <a-tooltip title="Like">
                    <a-icon type="like" :theme="action === 'liked' ? 'filled' : 'outlined'" @click="like"/>
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
                    <img :src="`https://picsum.photos/300?random=${indx}${i}`" width="200vw">
                    </a-col>
                </a-row>
              </p>
              <a-tooltip slot="datetime" :title="formatDate(moment().format('YYYY-MM-DD HH:mm:ss'))">
                <span>{{moment().fromNow()}}</span>
              </a-tooltip>
          </a-comment>
          </a-card>  
        </template>        
    </a-col>
  </a-row>
</template>

<script>
import moment from 'moment'
export default {
    data(){
        return {
            subscribers:[],
            moment,
            likes: 0,
            dislikes: 0,
            action: null,
            loading:false,
        }
    },
    created(){
        this.init();
    },
    methods:{
        init(){
            this.loading = true
            this.$http.get('https://randomuser.me/api/?results=20')
            .then(results=>{
                console.log('::::',JSON.stringify(results))
                this.subscribers = results.data.results
                this.loading=false;
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