import Vue from 'vue';
import VanillaJsService from './vanilla-js-service';
import ComponentOne from './component-one';
import ComponentTwo from './component-two';

import CounterService from './counter-service';

const sharedCounter = new CounterService();

const FirstComponent = {
  template : `<div>
    <button @click="show">
      Show
    </button>
    <button @click="add">
      Add
    </button>
  </div>`,
  methods: {
    show: function () {
      sharedCounter.show();
    },
    add: function() {
      sharedCounter.add();
    }
  }
}

const SecondComponent = {
  template : `<div>
    <button @click="show">
      Show
    </button>
    <button @click="add">
      Add
    </button>
  </div>`,
  methods: {
    show: function () {
      sharedCounter.show();
    },
    add: function() {
      sharedCounter.add();
    }
  }
}

var app = new Vue({
  el: '#app',
  components: {ComponentOne, ComponentTwo},
  // components: {FirstComponent, SecondComponent},
  data: function() {
    return{
      vanillaJsService: new VanillaJsService()
    }
  },
  methods: {
    useVanillaJsService: function() {
      this.vanillaJsService.sayHello();
    }
  }
})