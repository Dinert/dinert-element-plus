import * as components from './index'
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    DinertTable: typeof components.DinertTable;
  }
}
export {}
