<script setup lang="ts">
import {ref} from 'vue'
import {RewriteFormProps} from '../../../../packages'

// form里面的model数据类型
interface ModelProps {
    name: string
}

const form = ref<RewriteFormProps<ModelProps>>({
    model: {},
    colLayout: {span: 24},
    labelWidth: 'auto',
    formItem: {
        name: {
            label: '自动补全',
            type: 'input-autocomplete',
            options: {
                fetchSuggestions(str, cb) {
                    cb([
                        {value: 'vue', link: 'https://github.com/vuejs/vue'},
                        {value: 'element', link: 'https://github.com/ElemeFE/element'},
                        {value: 'cooking', link: 'https://github.com/ElemeFE/cooking'},
                        {value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui'},
                        {value: 'vuex', link: 'https://github.com/vuejs/vuex'},
                        {value: 'vue-router', link: 'https://github.com/vuejs/vue-router'},
                        {value: 'babel', link: 'https://github.com/babel/babel'},
                    ])
                },
                onChange(item) {
                    console.log(item, 'onChange')
                },
                onSelect(item) {
                    console.log(item, 'onSelect')
                }
            }
        }

    }
})


</script>

<template>
    <div class="home">
        <dinert-form :form="form" class="dialog"
            :search="false"
        />
    </div>
</template>
