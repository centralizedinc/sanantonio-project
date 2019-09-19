<template>
  <a-card title="Citizen Report">
    <GmapMap
      id="map"
      ref="map"
      :center="center"
      :zoom="16"
      map-type-id="terrain"
      draggable="true"
      style="width: 100%; height: 300px"
      @click="mapClick"
    >
      <!-- Current Location -->
      <GmapMarker
        :draggable="true"
        :position="coordinates"
        @dragend="markerDragEnd"
        :animation="marker_animation"
        @animation_changed="resetAnimation"
      />

      <!-- Fire -->
      <GmapMarker
        v-for="(coordinate, index) in fire_coordinates"
        :key="`fire${index}`"
        :title="`Fire incident: Reported as of ${formatDate(coordinate.date_created)}`"
        :draggable="false"
        :icon="fire_icon"
        :position="coordinate"
        :animation="animation"
        @click="coordinate.open=!coordinate.open"
      >
        <GmapInfoWindow v-if="coordinate.open" @closeclick="coordinate.open=false">
          <b>Fire incident</b>
          : Reported as of
          <b>{{formatDate(coordinate.date_created)}}</b>
        </GmapInfoWindow>
      </GmapMarker>

      <!-- Civil Disturbance -->
      <GmapMarker
        v-for="(coordinate, index) in civil_disturbance_coordinates"
        :key="`civil${index}`"
        :title="`Civil Disturbance: Reported as of ${formatDate(coordinate.date_created)}`"
        :draggable="false"
        :icon="civil_disturbance_icon"
        :position="coordinate"
        :animation="animation"
      />

      <!-- Flood -->
      <GmapMarker
        v-for="(coordinate, index) in flood_coordinates"
        :key="`flood${index}`"
        :title="`Flood Incident: Reported as of ${formatDate(coordinate.date_created)}`"
        :draggable="false"
        :icon="flood_icon"
        :position="coordinate"
        :animation="animation"
      />

      <!-- Crime -->
      <GmapMarker
        v-for="(coordinate, index) in crime_coordinates"
        :key="`crime${index}`"
        :title="`Crime Incident: Reported as of ${formatDate(coordinate.date_created)}`"
        :draggable="false"
        :icon="crime_icon"
        :position="coordinate"
        :animation="animation"
      />
    </GmapMap>
  </a-card>
</template>

<script>
import fire_icon from "@/assets/fire_icon_20.png";
import civil_disturbance_icon from "@/assets/civil_disturbance_icon_20.png";
import flood_icon from "@/assets/flood_icon_20.png";
import crime_icon from "@/assets/crime_icon_20.png";

export default {
  data() {
    return {
      fire_icon,
      civil_disturbance_icon,
      flood_icon,
      crime_icon,
      center: { lat: 13.9413957, lng: 121.6234471 },
      coordinates: { lat: 13.9413957, lng: 121.6234471 },
      marker_animation: 0,
      animation: 0,
      fire_coordinates: [],
      civil_disturbance_coordinates: [],
      flood_coordinates: [],
      crime_coordinates: []
    };
  },
  created() {
    this.report(this.$route.params.type);
  },
  watch: {
    coordinates: {
      handler(val) {
        this.center = val;
      },
      deep: true
    }
  },
  methods: {
    report(num) {
      this.fire_coordinates = [];
      this.civil_disturbance_coordinates = [];
      this.flood_coordinates = [];
      this.crime_coordinates = [];
      this.visible = true;
      var _self = this;
      this.$getLocation().then(coordinates => {
        this.coordinates = coordinates;
        console.log("num :", num);
        if (num === 1 || num === "1")
          this.fire_coordinates = this.generateSampleCoordinates(
            coordinates,
            5
          );
        else if (num === 2 || num === "2")
          this.civil_disturbance_coordinates = this.generateSampleCoordinates(
            coordinates,
            5
          );
        else if (num === 3 || num === "3")
          this.flood_coordinates = this.generateSampleCoordinates(
            coordinates,
            5
          );
        else if (num === 4 || num === "4")
          this.crime_coordinates = this.generateSampleCoordinates(
            coordinates,
            5
          );
        else {
          this.fire_coordinates = this.generateSampleCoordinates(
            coordinates,
            5
          );
          this.civil_disturbance_coordinates = this.generateSampleCoordinates(
            coordinates,
            5
          );
          this.flood_coordinates = this.generateSampleCoordinates(
            coordinates,
            5
          );
          this.crime_coordinates = this.generateSampleCoordinates(
            coordinates,
            5
          );
        }
        this.$gmapApiPromiseLazy().then(() => {
          _self.animation = google.maps.Animation.DROP;
        });
      });
    },
    generateSampleCoordinates(coordinate, count_range) {
      var coordinates = [];
      var cnt = 0;
      while (cnt < Math.floor(Math.random() * (count_range || 5))) {
        const lat = this.getRandomInRange(0.05, -0.05),
          lng = this.getRandomInRange(0.05, -0.05);
        coordinates.push({
          lat: coordinate.lat + lat,
          lng: coordinate.lng + lng,
          date_created: new Date(),
          open: false
        });
        cnt++;
      }
      return coordinates;
    },
    getRandomInRange(from, to) {
      return (Math.random() * (to - from) + from) * 1;
    },
    mapClick(e) {
      this.coordinates.lat = e.latLng.lat();
      this.coordinates.lng = e.latLng.lng();
      this.marker_animation = google.maps.Animation.DROP;
    },
    markerDragEnd(e) {
      this.coordinates.lat = e.latLng.lat();
      this.coordinates.lng = e.latLng.lng();
      this.marker_animation = google.maps.Animation.DROP;
    },
    resetAnimation(e) {
      setTimeout(function (params) {
        this.marker_animation = 0;
      }, 1000)
    },
    sendReport() {}
  }
};
</script>

<style>
</style>