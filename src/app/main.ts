import Vue from 'vue';
import VueParentNode from './vue-components/parent-node/parent-node.vue';
import TsParentNode from './typescript-components/parent-node/parent-node';

var app = new Vue({
  el: '#app',
  components: {
    TsParentNode,
    VueParentNode
  }
})