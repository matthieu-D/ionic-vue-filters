import Vue from 'vue';
import ChildNode from '../child-node/child-node.vue'

export default Vue.extend({
  data () {
    return {
      name: 'Child 2'
    }
  },
  methods: {
    changeName: function(newName) {
      this.name= newName;
    }
  },
  components: { ChildNode }
})