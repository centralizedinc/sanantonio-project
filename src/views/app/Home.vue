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
                  <a-button block type="primary">Fire <a-icon type="fire"></a-icon></a-button>
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
    </a-col>
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
    }

}
</script>

<style>

</style>