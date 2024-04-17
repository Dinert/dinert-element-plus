<script lang="ts">
export default {
    name: 'DinertDemo',
};
</script>

<script setup lang="ts">
import { computed, toRefs,shallowRef,defineAsyncComponent,onMounted, ref } from 'vue';
import { useClipboard } from "@vueuse/core";

import { VueLive } from "vue-live";
import "vue-live/style.css";

import {
  EditPen,
  CopyDocument,
  Expand,
  CaretTop
} from "@element-plus/icons-vue";
import { getModule } from "../../../utils/module"
import { $message } from "../../../utils/message"

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

const {description, source, rawSource} = toRefs(props)
const demoComponents = shallowRef();
const sourceVisible = ref(false)
const editDialogVisible = ref(false)
const oldRawSource = ref(rawSource.value)

const packagesLine = /import.*?packages'/g;
const packagesReg = /\.\.\/.*?packages/g;

onMounted(async () => {
    demoComponents.value = defineAsyncComponent(getModule(props.path));
});

const { isSupported, copy } = useClipboard({
  source: decodeURIComponent(rawSource.value),
});

const decodedDescription = computed(() =>
  decodeURIComponent(description.value)
)

const decodeSource = computed(() => {
    let result = decodeURIComponent(source.value)
    result = result.replace(packagesReg, '@dinert/element-plus')
    return result;
})

const decodeRawSource =  computed(() => {
    let result = decodeURIComponent(rawSource.value)
    if(process.env.NODE_ENV !== 'production') {
        result = result.split('\n').join('')
    }
    result = result.replace(packagesLine, '');
    return result
})

const decodeCodeRawSource = computed(() => {
    let result = decodeURIComponent(rawSource.value)
    if(process.env.NODE_ENV !== 'production') {
        result = result.split('\n').join('')
    }
    result = result.replace(packagesReg, '@dinert/element-plus')
    return result
})

const editCode = async () => {
    editDialogVisible.value = true
};

const copyCode = async () => {
    if (!isSupported.value) {
    $message.error("复制失败~");
    return;
  }
  try {
    await copy(decodeURIComponent(decodeCodeRawSource.value));
    $message.success("已复制！");
  } catch (e) {
    $message.error(e.message);
  }
}



</script>

<template>
    <ClientOnly>
        <div class="dinertDemo">
            <p text="dinertDemo-sm" v-html="decodedDescription" />
            <div class="dinertDemo-example">
                <div class="dinertDemo-example-component">
                    <component :is="demoComponents" v-if="demoComponents" v-bind="$attrs" />
                </div>
                <ElDivider class="m-0" />
                <div class="dinertDemo-example-operations">
                    <ElTooltip
                    content="编辑代码"
                    :show-arrow="false"
                    :trigger="['hover', 'focus']"
                >
                    <ElIcon @click="editCode" class="op-btn">
                    <EditPen />
                    </ElIcon>
                </ElTooltip>
                <ElTooltip
                    content="复制代码"
                    :show-arrow="false"
                    :trigger="['hover', 'focus']"
                >
                    <ElIcon
                    :size="16"
                    aria-label="copy-code"
                    class="op-btn"
                    tabindex="0"
                    role="button"
                    @click="copyCode"
                    >
                    <CopyDocument />
                    </ElIcon>
                </ElTooltip>
                <ElTooltip
                    content="查看源代码"
                    :show-arrow="false"
                    :trigger="['hover', 'focus']"
                >
                    <ElIcon :size="16" @click="sourceVisible = !sourceVisible">
                        <Expand />
                    </ElIcon>
                </ElTooltip>
                </div>

                <div class="dinertDemo-example-source">
                    <ElCollapseTransition>
                        <div class="dinertDemo-example-source-html" v-show="sourceVisible" v-html="decodeSource" />
                    </ElCollapseTransition>
                    <Transition name="el-fade-in-linear">
                    <div
                        v-show="sourceVisible"
                        class="example-float-control"
                        tabindex="0"
                        role="button"
                        @click="sourceVisible = false"
                    >
                        <ElIcon :size="16">
                            <CaretTop />
                        </ElIcon>
                        <span>{{ "hide-source" }}</span>
                    </div>
                    </Transition>
                </div>
            </div>
            <el-dialog title="编辑代码" v-model="editDialogVisible" width="80%" >
                <div class="edit-code">
                    <VueLive
                        v-if="editDialogVisible"
                    :code="decodeRawSource"
                    @error="(e) => console.error('Error on first example', e)"
                    />
                </div>
            </el-dialog>
        </div>
    </ClientOnly>
</template>

<style lang="scss" scoped>

:deep() {
    .VueLive-editor {
        width: 60%;

        .prism-editor-wrapper {
            padding: 8px 12px;
            height: 60vh;
            font-size: 16px;
            color: #1b1b1f;
            box-sizing: border-box;
        }
    }

    .VueLivePreview {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 24px;
        box-sizing: border-box;
        background-color: var(--el-bg-color);

        & > div {
            width: 100%;
        }
    }
}

.example-float-control {
    position: sticky;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -1px;
    height: 44px;
    border-top: 1px solid var(--el-border-color);
    color: var(--el-text-color-secondary);
    background-color: var(--el-bg-color, #fff);
    box-sizing: border-box;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    cursor: pointer;

    span {
        margin-left: 10px;
        font-size: 14px;
    }

    &:hover {
        color: var(--el-color-primary);
    }
}

.dinertDemo {
    height: 100%;
    border: 1px solid var(--el-border-color);

    &-example {
        &-component {
            padding: 0 16px;
        }

        .el-divider {
            margin: 0;
        }

        &-operations {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: .5rem;
            height: 2.5rem;

            .el-icon {
                margin: 0 .5rem;
                cursor: pointer;
                height: auto;
                color: var(--el-text-color-secondary);
            }
        }

        &-source {
            &-html {
                overflow-x: auto;
                padding: 0 24px;
            }
        }
    }

    :deep() {
        .token.operator {
            background: unset;
        }

        .token.script,
        .token.language-javascript {
            color: var(--el-text-color-primary);
        }
    }
}
</style>

<style lang="scss">
.el-dialog {
    .el-dialog__footer {
        text-align: center;
    }
}
</style>