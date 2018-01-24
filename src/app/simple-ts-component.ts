import Vue from 'vue'
import Component from 'vue-class-component'

// The @Component decorator indicates the class is a Vue component
@Component({
  // All component options are allowed in here
  template: '<div>{{message}} <button @click="onClick">Click!</button></div>'
})
export default class SimpleTsComponent extends Vue {
  // Initial data can be declared as instance properties
  message: string = 'Hello!'

  // Component methods can be declared as instance methods
  onClick (): void {
    console.log('TypeScript working!');
  }
}
