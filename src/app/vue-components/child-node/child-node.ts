import Vue from 'vue';

export default Vue.extend({
  props: {
    name: String
  },
  methods: {
    changeName: function ({ target: { value } }) {
      this.$emit('nameChanged', value);
    }
  }
})