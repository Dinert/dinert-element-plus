<script lang="ts">
export default {
    name: 'DinertApiTyping',
};
</script>

<script setup lang="ts">
import { ref } from 'vue'
import { Warning } from '@element-plus/icons-vue'

defineProps({
  type: String,
  details: String,
})
</script>

<template>
  <span class="inline-flex items-center">
    <code class="api-typing mr-1">
      {{ type }}
    </code>
    <ClientOnly>
      <ElTooltip v-if="details" effect="light" trigger="click">
        <ElButton
          text
          :icon="Warning"
          :aria-label="details"
          class="p-2 text-4"
        />
        <template #content>
          <slot>
            <div class="m-1" style="max-width: 600px; background-color: var(--el-fill-color-light);">
              <code
                style="color: var(--el-color-primary);"
              >
                {{ details }}
              </code>
            </div>
          </slot>
        </template>
      </ElTooltip>
    </ClientOnly>
  </span>
</template>

<style lang="scss" scoped>
.api-typing {
    cursor: pointer;
}

.inline-flex {
    display: inline-flex;

    .el-button {
        margin-left: 4px;
        padding: 8px;
    }
}
</style>