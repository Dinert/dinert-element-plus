import * as components from './index'
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    DinertTable: typeof components.Table;
    DinertForm: typeof components.Form;
    DinertTooltip: typeof components.Tooltip;
    DinertTablePage: typeof components.TablePage;
  }
}
export {}
