<script lang="ts">
export default {
    name: 'DinertApiEnmu',
};
</script>
<script setup lang="ts">
import { computed } from 'vue'
import { isString } from '@vue/shared'
import ApiTyping from '../api-typing/index.vue'

const props = defineProps({
  values: {
    type: Array,
    required: true,
  },
})

const processString = (s: unknown) => (isString(s) ? `'${s}'` : s)

const details = computed(() => props.values.map(processString).join(' | '))
</script>

<template>
  <api-typing type="enum" :details="details" />
</template>
