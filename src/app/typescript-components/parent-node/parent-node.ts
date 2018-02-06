import Vue from 'vue';
import Component from 'vue-class-component';
import ChildNode from '../child-node/child-node';

@Component({
  template: `<div>
    <child-node 
      v-on:nameChanged="changeName"
      :name="nameProp">
    </child-node>
  </div>`,
  components: { ChildNode }
})
export default class ParentNode extends Vue {
  nameProp: string = 'Child 1';

  changeName (newName): void {
    this.nameProp = newName; 
  }
}