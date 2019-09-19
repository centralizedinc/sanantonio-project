<template>
  <div style="margin-top:10vh">
        <a-affix :offsetTop="60">
        <a-tabs style="background-color:#FFFFFF; z-index:1000" @change="changeView">
            <a-tab-pane key="0">
                <template slot="tab">
                    <span><a-avatar :src="constant_helper.mayor_details.avatar"></a-avatar> Mayor's Corner</span>
                </template>
                
            </a-tab-pane>
            <a-tab-pane tab="Public Service" key="1">
                <!-- <public-service></public-service> -->
            </a-tab-pane>
            <a-tab-pane tab="Permits" key="2">
                <!-- <permits></permits> -->
            </a-tab-pane>
            <a-tab-pane tab="Local Taxes" key="3">
                <!-- <permits></permits> -->
            </a-tab-pane>
            <a-tab-pane tab="Downloadable Forms" key="4">
                <!-- <downloadable-forms></downloadable-forms> -->
            </a-tab-pane>        
        </a-tabs>
        </a-affix>
        <div style="margin-top: 5vh; margin-bottom: 5vh">
            <component v-bind:is="currentView" :full="true"></component>
        </div>
  </div>
</template>

<script>
import MayorsCorner from '@/components/MayorsCorner'
import PublicService from '@/components/PublicService'
import Permits from '@/components/Permits'
import LocalTaxes from '@/components/Taxes'
import DownloadableForms from '@/components/DownloadableForms'
export default {
    components:{
        MayorsCorner,
        PublicService,
        Permits,
        LocalTaxes,
        DownloadableForms
    },
    data(){
        return {
            currentView:"MayorsCorner",
            visible:false,
            
            tabView:['MayorsCorner','PublicService', 'Permits', 'LocalTaxes','DownloadableForms']
        }
    },
    methods:{
        changeView(key){
            console.log('key:::', key)
            this.currentView = this.tabView[key]
            window.scrollTo(0,0)
        }
    }

}
</script>

<style>

</style>