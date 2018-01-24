import Vue from 'vue'
import ComponentWithMethods from './component-with-methods/component-with-methods.vue'
import SimpleTsComponent from './simple-ts-component'
import Rectangle from './rectangle/rectangle.vue'

Vue.component('global-component', {
  template: '<div> Hi I am a global component </div>'
});

var app = new Vue({
  el: '#app',
  components: { SimpleTsComponent, Rectangle, ComponentWithMethods }
})