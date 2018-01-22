declare var Vue: any;

import * as GeolocationService from '@ionic-native/geolocation';

const geolocation = new GeolocationService.Geolocation();

Vue.config.ignoredElements = ['ion-card', 'ion-card-content'];

var app = new Vue({
  el: '#app',
  data: {
    loadingPosition: false,
    geolocation: {}
  },
  methods: {
    getPosition: function() {
      this.loadingPosition = true;

      geolocation.getCurrentPosition().then(({ coords })=> {
        this.loadingPosition = false;
        this.geolocation = coords;
      })
    }
  }
})
