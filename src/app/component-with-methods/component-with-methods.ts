import Vue from "vue";

export default Vue.extend({
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    // Careful of () =>
    showFirstThis: function() {
      console.log('Basic function', this);
    },
    showSecondThis: () => {
      console.log('Fat arrow', this);
    }
  }
})