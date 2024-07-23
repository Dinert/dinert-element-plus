
<script setup>
    let sizes = ['large', 'small', 'medium', "'"].join("' | '")
        sizes = "'" + sizes
</script>


## 属性

| 属性名  | 说明                                                                                 | 类型    | 默认值 |
| ------- | ------------------------------------------------------------------------------------ | ------- | ------ |
| content | 展示的内容                                                                           | String  | 一     |
| diabled | 为true时不显示tooltip，false则相反                                                   | Boolean | 一     |
| ......  | [更多配置，请参考](https://element-plus.org/zh-CN/component/tooltip.html#attributes) | 一      | 一     |

## 事件
| 事件名            | 说明                  | 类型                                                                   |
| ----------------- | --------------------- | ---------------------------------------------------------------------- |
| label-mouse-enter | 鼠标移到content时触发 | <dinert-api-typing type="Function" details="(e: MouseEvent) => void"/> |

## 插槽

| 插槽名        | 说明                  |
| ------------- | --------------------- |
| defaultBefore | 自定content前面的内容 |
| default       | 自定content           |
| defaultAfter  | 自定content后面的内容 |