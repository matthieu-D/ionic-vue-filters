import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  template: `<div>

    <div>
      Hi I'm the child, my name is {{name}}
    </div>

    <input type="text" @change="changeName" />

  </div>`,
  props: {
    name: String
  }
})
export default class ChildNode extends Vue {
  changeName ({ target: { value } }): void {
    this.$emit('nameChanged', value);
  }
}