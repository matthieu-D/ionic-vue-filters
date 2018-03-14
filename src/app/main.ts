import Vue from 'vue';
import TsSum from './typescript-filters/sum.filter';
import VanillaSum from './vanilla-filters/sum.filter';

var app = new Vue({
  el: '#app',
  filters: {
    TsSum,
    VanillaSum
  },
  data: function () {
    return {originalValue: 0}
  },
  computed: {
    computedSum: function () {
      return this.originalValue + 1;
    }
  },
  methods: {
    useSumFilter: function () {
      const vanilaSumFunction = this.$options.filters["VanillaSum"];
      return vanilaSumFunction(1, 2, 3);
    }
  }
})