<template>
  <a-row type="flex" :gutter="8">
    <a-col :span="18">
        <a-tabs>
            <a-tab-pane tab="Mayor's Corner" key="1">
                <mayors-corner></mayors-corner>
            </a-tab-pane>
            <a-tab-pane tab="Public Service" key="2">
                <public-service></public-service>
            </a-tab-pane>
            <a-tab-pane tab="Permits" key="3">
                <permits></permits>
            </a-tab-pane>
            <a-tab-pane tab="Downloadable Forms" key="4">
                <downloadable-forms></downloadable-forms>
            </a-tab-pane>
        </a-tabs>
    </a-col>
    <a-col :span="6">
        <a-card title="Citizen Report" style="margin-top: 5vh">
            <p>What do you want to Report?</p>
            <a-form>
              <a-form-item>
                  <a-button block type="primary" @click="report(1)">Fire <a-icon type="fire"></a-icon></a-button>
              </a-form-item>
              <a-form-item>
                  <a-button block type="primary">Civil Disturbance <a-icon type="sound"></a-icon></a-button>
              </a-form-item>
              <a-form-item>
                  <a-button block type="primary">Flood <a-icon type="alert"></a-icon></a-button>
              </a-form-item>
              <a-form-item>
                  <a-button block type="primary">Crime <a-icon type="safety"></a-icon></a-button>
              </a-form-item>
            </a-form>
        </a-card>
        <a-card title="Incident Map" style="margin-top: 5vh">
            
        </a-card>
    </a-col>
    <a-modal :visible="visible" title="Report Incident">
         <GmapMap id="map" ref="map"
            :center="{lat:coordinates.lat, lng:coordinates.lng}"
            :zoom="16"
            map-type-id="terrain"
            draggable="true"
            style="width: 100%; height: 300px"
        >
            <GmapMarker
                :draggable="true"
                :position="coordinates"
                :animation="animation"
            />
        </GmapMap>
        <template slot="footer">
        <!-- <a-button key="back" @click="handleCancel">Return</a-button> -->
        <a-button key="submit" type="primary" :loading="loading" @click="submitReport">
          Confirm and Submit
        </a-button>
      </template>
    </a-modal>
  </a-row>
</template>

<script>
import MayorsCorner from '@/components/MayorsCorner'
import PublicService from '@/components/PublicService'
import Permits from '@/components/Permits'
import DownloadableForms from '@/components/DownloadableForms'
export default {
    components:{
        MayorsCorner,
        PublicService,
        Permits,
        DownloadableForms
    },
    data(){
        return {
            visible:false,
            coordinates:{lat: 13.9413957, lng: 121.6234471},
            animation:{}
        }
    },
    methods:{
        report(num){
            this.visible=true;
            var _self = this;
            this.$getLocation().then(coordinates => {
                this.coordinates = coordinates 
                this.$gmapApiPromiseLazy().then(() => {
                    _self.animation = google.maps.Animation.DROP
                })
            })
        },
        submitReport(){
            this.visible = false
            this.$notification.success({
                message:'Thank you for your concern',
                description:'Your Report has been sent. Stay safe!'
            })
        }
    }

}
</script>

<style>

</style>