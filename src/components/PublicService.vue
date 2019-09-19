<template>
  <a-row type="flex" :gutter="16" data-aos="fade-left">
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
    </a-col>-->
    <a-col :span="24">
      <a-card title="Contributors">
        <a-row type="flex" :gutter="8">
          <div v-if="loading">
            <a-col :span="1" v-for="i in 20" :key="i">
              <a-skeleton active avatar :paragraph="{rows: 0}" :title="{width:0}" />
            </a-col>
          </div>
          <a-col :span="1" v-for="(sub, i) in subscribers" :key="`subscribers${i}`" v-else>
            <a-tooltip placement="top" :title="`${sub.name.first} ${sub.name.last}`">
              <a-badge status="success">
                <a-avatar :src="sub.avatar"></a-avatar>
              </a-badge>
            </a-tooltip>
          </a-col>
          <a-col :span="24">
            <a-divider></a-divider>
            <p>Contribute to the community</p>
            <a-textarea
              :rows="3"
              placeholder="Write a post here..."
              v-model="message"
              @keypress.enter="postMessage"
            ></a-textarea>
          </a-col>
        </a-row>
        <a-row type="flex" :gutter="8" justify="end" style="margin-top:2vh">
          <a-col :span="6">
            <a-button block>
              <a-icon type="picture" theme="twoTone"></a-icon>Photos/Videos
            </a-button>
          </a-col>
          <a-col :span="4">
            <a-button block type="primary" @click="postMessage">
              <a-icon type="upload"></a-icon>Post
            </a-button>
          </a-col>
        </a-row>
      </a-card>
    </a-col>
    <a-col :span="24">
      <!-- <a-card> -->
      <template v-if="loading">
        <div v-for="i in 4" :key="i">
          <a-skeleton active avatar :paragraph="{rows: 4}" />
          <a-divider></a-divider>
        </div>
      </template>
      <template v-else>
        <a-card
          v-for="(sub,indx) in subscribers_post"
          :key="sub.name.first"
          style="margin-bottom: 2vh"
          data-aos="fade-up"
        >
          <a-comment>
            <template slot="actions">
              <span>
                <a-tooltip title="Like">
                  <a-icon
                    type="like"
                    :theme="action === 'liked' ? 'filled' : 'outlined'"
                    @click="like"
                  />
                </a-tooltip>
                <span style="padding-left: '8px';cursor: 'auto'">{{likes}}</span>
              </span>
              <span>
                <a-tooltip title="Dislike">
                  <a-icon
                    type="dislike"
                    :theme="action === 'disliked' ? 'filled' : 'outlined'"
                    @click="dislike"
                  />
                </a-tooltip>
                <span style="padding-left: '8px';cursor: 'auto'">{{dislikes}}</span>
              </span>
            </template>
            <a slot="author">{{sub.name.first}} {{sub.name.last}}</a>
            <a-avatar :src="sub.avatar" alt="Han Solo" slot="avatar" />
            <div slot="content">
              <p v-if="sub.message">{{sub.message}}</p>
              <p v-else>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                <a-row type="flex" justify="center" :gutter="8">
                  <a-col :span="8" v-for="i in 3" :key="i">
                    <img :src="`https://picsum.photos/300?random=${indx}${i}`" width="200vw" />
                  </a-col>
                </a-row>
              </p>
            </div>
            <a-tooltip
              slot="datetime"
              :title="formatDate(moment(sub.date_created).format('YYYY-MM-DD HH:mm:ss'))"
            >
              <span>{{moment(sub.date_created).fromNow()}}</span>
            </a-tooltip>
          </a-comment>
        </a-card>
      </template>
      <!-- </a-card> -->
    </a-col>
  </a-row>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      subscribers: [],
      loading: false,
      moment,
      message: "",
      temp_data: {
        name: {
          first: "Wan",
          last: "Dela Cruz"
        },
        avatar: "https://randomuser.me/api/portraits/thumb/women/31.jpg",
        post: []
      }
    };
  },
  created() {
    this.init();
  },
  computed: {
    active_user() {
      return this.$store.state.user_session.user;
    },
    subscribers_post() {
      const post = this.subscribers.reduce((data, curr) => {
        if (data.post) return [...data.post, ...curr.post];
        else return [...data, ...curr.post];
      });
      const post_data = post.sort(
        (a, b) =>
          new Date(b.date_created).getTime() -
          new Date(a.date_created).getTime()
      );
      return post_data;
    }
  },
  methods: {
    init() {
      this.loading = true;
      this.$http
        .get("https://randomuser.me/api/?results=20")
        .then(results => {
          console.log("::::", JSON.stringify(results));
          this.loading = false;
          const subscribers = results.data.results.map(v => {
            var sub = {
              name: v.name,
              avatar: v.picture.thumbnail,
              post: [
                {
                  name: v.name,
                  avatar: v.picture.thumbnail,
                  date_created: new Date()
                }
              ]
            };
            return sub;
          });
          this.subscribers = subscribers;
        })
        .catch(err => {
          console.log(err);
          this.loading = false;
          // this.$notification.error({

          // })
        });
    },
    postMessage() {
      const index = this.subscribers.findIndex(
        sub => sub.name.last === this.active_user.lname
      );
      if (index > -1) {
        this.subscribers[index].post.push({
          name: {
            first: this.active_user.fname,
            last: this.active_user.lname
          },
          avatar: this.active_user.avatar,
          date_created: new Date(),
          message: this.message
        });
      } else {
        this.subscribers.push({
          name: {
            first: this.active_user.fname,
            last: this.active_user.lname
          },
          avatar: this.active_user.avatar,
          post: [
            {
              name: {
                first: this.active_user.fname,
                last: this.active_user.lname
              },
              avatar: this.active_user.avatar,
              date_created: new Date(),
              message: this.message
            }
          ]
        });
      }
      this.message = "";
    }
  }
};
</script>

<style>
.ant-skeleton-content .ant-skeleton-title {
  height: 9px;
}

.ant-skeleton-content .ant-skeleton-paragraph > li {
  height: 9px;
}
</style>