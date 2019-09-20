<template>
  <a-row type="flex" :gutter="16">
    <a-col :span="24">
      <template v-if="loading">
        <a-card>
          <div v-for="i in 4" :key="i">
            <a-skeleton active avatar :paragraph="{rows: 4}" />
            <a-divider></a-divider>
          </div>
        </a-card>
      </template>

      <template v-else>
        <a-card style="margin-bottom: 2vh">
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
            <a slot="author">Mayor {{constant_helper.mayor_details.name}}</a>
            <a-avatar :src="constant_helper.mayor_details.avatar" slot="avatar" />
            <span slot="content">
              Narito po tayo ngayon sa Bangkok, Thailand para makilahok sa 5th ASEAN MAYORS FORUM (AMF) na may temang: Driving Local Actions for Sustainable and Inclusive Growth
              <br />
              <br />Bilang isang lider po mula sa ating Lungsod ng San Antonio, importante po na dumalo rito dahil ang 5th AMF ay magsisilbing isang platform para sa talakayan ng mga ASEAN’s local political leaders, policy makers, international development partners at iba pang mga experts,upang mabatid kung papaanong ang mga lungsod at lokal na pamahalaan ay makatutulong sa prayoridad ng UN Sustainabe Development Goals (SDGs), New Urban Agenda (NUA), Paris Agreement on Climate Change at ang Sendai Framework for Disaster Risk Reduction (SFDRR).
              <br />Sa ilalim po ng liderato ng inyong lingkod, ang Lokal na Pamahalaan ng Lungsod ng San Antonio ay niyayakap ang lahat ng mga benepisyo ng urbanisasyon; subalit, ganoon pa man, kailangan pa rin ng ating liderato ang matibay na suporta at pakikipag-ugnayan sa lahat ng antas.
              <br />Kaya naman, abala po tayo ngayon rito sa labas ng bansa mula August 26-28, 2019 para sa mas lalo pang ikabubuti ng ating mahal na Lungsod ng San Antonio.
              <a-row type="flex" justify="left" :gutter="8">
                <a-col :span="8">
                  <img
                    src="https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.0-9/68884204_2402329830086417_5705499891048906752_n.jpg?_nc_cat=103&_nc_eui2=AeFWytHMYWs9zuKVSc66Uz4Vzxg5Fa29apiz6GRPbvDohFtrWnZSmJNQh7yRh9lXN8vJ70zZcgSgIats1MEQGjUq3E5gCFVUe0iLMyNjwEYzNw&_nc_oc=AQlhm_Ata0vUbn2X4lBylqa7US5UVX1_R0jPJglrMgZ_P_n_NMHEHPkTbako7qARnwI&_nc_ht=scontent.fmnl4-1.fna&oh=dfdb597ffcc9803311c6ee9595137e38&oe=5E0B2330"
                    width="200vw" alt=""
                  />
                </a-col>
                <a-col :span="8">
                  <img
                    src="https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.0-9/69328402_2402330370086363_5505522112053379072_n.jpg?_nc_cat=104&_nc_eui2=AeGxNBzkgXSgg5qIiVqLY1NEpKyT_tTkR37ksGgeoILMALw5WvfDNzXaWwkYZkq1XM9XdXGr110D0N0mPkMnUSkM2KviNV3JJ0lmG5dAuziRfg&_nc_oc=AQkDxwmp8bmZljizqeHvaM2tcuRak12oFLQQkfQDT3AbvWxIxvZhvr1iwFZCrAF1wm0&_nc_ht=scontent.fmnl4-1.fna&oh=8cb72f822d8666af514b9e815f2a9d99&oe=5E05A32B"
                    width="200vw" alt=""
                  />
                </a-col>
              </a-row>
            </span>
            <a-tooltip slot="datetime" :title="moment().format('YYYY-MM-DD HH:mm:ss')">
              <span>{{moment().fromNow()}}</span>
            </a-tooltip>
          </a-comment>
        </a-card>

        <a-card style="margin-bottom: 2vh">
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
            <a slot="author">Mayor {{constant_helper.mayor_details.name}}</a>
            <a-avatar :src="constant_helper.mayor_details.avatar" slot="avatar" />
            <span slot="content">
              INGAT PO TAYO AT MAGING ALERTO:
              <br />
              <br />NDRRMC (4:30PM, 13Sept2019)
              <br />
              <br />Isang MLv5.5 Magnitude na lindol ang naganap sa Burdeos, Quezon kaninang 4:28PM. Damages at aftershocks ay inaasahan. Maging handa at siguraduhin ligtas ang sarili at pamilya.
              <a-row type="flex" justify="left" :gutter="8">
                <a-col :span="8">
                  <img
                    src="https://i.postimg.cc/8PGxP99m/Screen-Shot-2019-09-19-at-12-25-23-PM.png"
                    width="200vw" alt=""
                  />
                </a-col>
              </a-row>
            </span>
            <a-tooltip slot="datetime" :title="formatDate(moment().format('YYYY-MM-DD HH:mm:ss'))">
              <span>{{moment().fromNow()}}</span>
            </a-tooltip>
          </a-comment>
        </a-card>

        <a-card style="margin-bottom: 2vh">
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
            <a slot="author">Mayor {{constant_helper.mayor_details.name}}</a>
            <a-avatar :src="constant_helper.mayor_details.avatar" alt slot="avatar" />
            <span slot="content">
              PAALALA SA LAHAT:
              <br />
              <br />Habang hinihihintay ng lokal na pamahalaan ang resulta ng pagsusuri ng BFAR kaugnay ng nangyaring fish kill, pinagbabawalan ang lahat na manghuli at kumain ng anumang uri ng isda mula sa Iyam river.
              <br />
              <br />Pinapayuhan din ang lahat na huwag munang maligo at magsagawa ng anumang gawain na makakaapekto sa kalusugan ng tao at lahat ng may buhay.
              <br />
              <br />Maraming salamat po!
              <a-row type="flex" justify="left" :gutter="8">
                <a-col :span="8">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/18/19/11/fish-995050_960_720.png"
                    width="200vw" alt=""
                  />
                </a-col>
                <a-col :span="8">
                  <img src="https://image.flaticon.com/icons/svg/1661/1661940.svg" width="200vw" alt=""/>
                </a-col>
              </a-row>
            </span>
            <a-tooltip slot="datetime" :title="moment().format('YYYY-MM-DD HH:mm:ss')">
              <span>{{moment().fromNow()}}</span>
            </a-tooltip>
          </a-comment>
        </a-card>

        <a-card style="margin-bottom: 2vh">
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
            <a slot="author">Mayor {{constant_helper.mayor_details.name}}</a>
            <a-avatar :src="constant_helper.mayor_details.avatar" slot="avatar" />
            <span slot="content">
              PABATID: Ang Northern Quezon kasama po ang ating lungsod ay nananatiling na signal no. 1 ayon sa latest weather bulletin ng PAGASA kaya sa bisa pa din po ng E.O. No. 26 series of 2012 ay nananatiling sa mga pre-elementary or nursery at kinder lang po ang walang pasok bukas, Agosto 28, 2019.
              <br />
              <br />Mag-ingat po at manatiling handa ang bawat pamilyang San Antonio!
              <a-row type="flex" justify="left" :gutter="8">
                <a-col :span="8">
                  <img
                    src="https://i2.wp.com/outoftownblog.com/wp-content/uploads/2018/07/Guidelines-on-the-Suspension-of-Classes-When-Typhoons-and-Other-Calamities-Occur.jpg?resize=600%2C450&ssl=1"
                    width="450vw" alt=""
                  />
                </a-col>
              </a-row>
            </span>
            <a-tooltip slot="datetime" :title="moment().format('YYYY-MM-DD HH:mm:ss')">
              <span>{{moment().fromNow()}}</span>
            </a-tooltip>
          </a-comment>
        </a-card>
      </template>
    </a-col>
  </a-row>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      subscribers: [],
      moment,
      likes: 845,
      dislikes: 0,
      action: null,
      loading: false
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.loading = true;
      this.$http
        .get("https://randomuser.me/api/?results=20")
        .then(results => {
          console.log("::::", JSON.stringify(results));
          this.subscribers = results.data.results;
          this.loading = false;
        })
        .catch(err => {
          console.log(err);
          this.loading = false;
          // this.$notification.error({

          // })
        });
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