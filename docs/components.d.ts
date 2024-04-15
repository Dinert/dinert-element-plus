import * as components from '../packages'
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    DinertTable: typeof components.DinertTable;
    DinertForm: typeof components.DinertForm;
    DinertTooltip: typeof components.DinertTooltip;
    DinertTablePage: typeof components.DinertTablePage;
  }
}
export {}
