// import CounterService from './counter-service';
import CounterSingleton from './counter-singleton';

export default {
  template : `<div>

    <button @click="show">
      Show
    </button>

    <button @click="add">
      Add
    </button>

  </div>`,
  data : function () {
    // return {
    //   counterService: new CounterService() 
    // }
    return {
      counterService: CounterSingleton.getInstance()
    }
  },
  methods : {
    show: function () {
      this.counterService.show();
    },
    add: function () {
      this.counterService.add();
    }
  }
}