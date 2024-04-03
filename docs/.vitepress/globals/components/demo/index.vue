<script lang="ts">
export default {
    name: 'DinertDemo',
};
</script>

<script setup lang="ts">
import { computed, toRefs,shallowRef,defineAsyncComponent,onMounted } from 'vue';
import { getModule } from "../../../utils/module"

interface PropsType {
    description?: string
    path: string
    rawSource?: string
    source?: string
}

const props = withDefaults(defineProps<PropsType>(), {
    description: '',
    rawSource: '',
    source: ''
})

const {description} = toRefs(props)
const demoComponents = shallowRef();

onMounted(async () => {
    demoComponents.value = defineAsyncComponent(getModule(props.path));
});

const decodedDescription = computed(() =>
  decodeURIComponent(description.value)
)

const editCode = async () => {

};



</script>

<template>
   <div class="dinertDemo">
    <p text="dinertDemo-sm" v-html="decodedDescription" />
    <div class="dinertDemo-example">
        <div class="dinertDemo-example-component">
            <component :is="demoComponents" v-if="demoComponents" v-bind="$attrs" />
        </div>
        <ElDivider class="m-0" />
        <div class="dinertDemo-example operations">
            <ElTooltip
            content="编辑代码"
            :show-arrow="false"
            :trigger="['hover', 'focus']"
            :trigger-keys="[]"
          >
            <ElIcon @click="editCode" :size="16" class="op-btn">
              <EditPen />
            </ElIcon>
          </ElTooltip>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dinertDemo {
    height: 100%;
}
</style>
