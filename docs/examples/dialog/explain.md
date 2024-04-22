
<script setup>
    let sizes = ['large', 'small', 'medium', "'"].join("' | '")
        sizes = "'" + sizes
</script>


## 属性

| 属性名                          | 说明                                                                                | 类型                                               | 默认值 |
| ------------------------------- | ----------------------------------------------------------------------------------- | -------------------------------------------------- | ------ |
| size                            | 弹窗大小                                                                            | <dinert-api-typing type="emnu" :details="sizes" /> | 一     |
| fullscreen / v-model:fullscreen | 是否全屏                                                                            | Boolean                                            | false     |
| ......                          | [更多配置，请参考](https://element-plus.org/zh-CN/component/dialog.html#attributes) | 一                                                 | 一     |