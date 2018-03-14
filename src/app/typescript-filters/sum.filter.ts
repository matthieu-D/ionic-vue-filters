import {Filter} from 'vue-ts-decorate';

@Filter('TsSum')
export default class TsSum {
  filter(value : any, ...params : any[]) {
    return value + params.reduce((accumulator, param) => accumulator + param);
  }
}
