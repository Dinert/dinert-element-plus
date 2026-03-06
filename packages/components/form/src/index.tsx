/* eslint-disable max-statements */
import {defineComponent, ref, nextTick, toRefs, withModifiers, PropType} from 'vue'
import FormItem from './form-item'

import useWindowResize from '@packages/hooks/useWindowResize'

import {getUuid} from '@packages/utils/tools'
import {ElForm} from 'element-plus'

import {ArrowUp, ArrowDown} from '@element-plus/icons-vue'


import '@packages/assets/scss/dinert-form.scss'

import type {RewriteFormProps} from '@packages/components/form/types'

// 展开还是收起状态
export default defineComponent({
    name: 'dinert-form',
    props: {
        form: {
            type: Object as PropType<RewriteFormProps>,
            default: () => ({})
        },
        search: {
            type: Boolean,
            default: true
        },
    },
    emits: ['UnFold', 'SearchFn', 'ResetFn'],
    setup(props, {emit, slots}) {
        const {form} = toRefs(props)
        const packUp = ref(form.value.packUp === undefined)
        const isArrow = ref(false)

        const formRef = ref<InstanceType<typeof ElForm>>()
        const formItemRef = ref<InstanceType<typeof FormItem>>()

        const formClass = ref('form_' + getUuid())

        const resizeForm = () => {
            let elFormLeft = document.querySelectorAll(`.${formClass.value} .dinert-form-left > div`) as any
            if (elFormLeft[0]) {
                isArrow.value = false
                nextTick(() => {
                    const firstTop = elFormLeft[0].getBoundingClientRect().top
                    const lastTop = elFormLeft[elFormLeft.length - 1].getBoundingClientRect().top
                    const isHeight = firstTop !== lastTop
                    if (isHeight) {
                        isArrow.value = true
                    } else {
                        if (!packUp.value) {
                            packUp.value = true
                        }
                        isArrow.value = false
                    }
                    elFormLeft = null
                })

            }
        }

        useWindowResize(() => {
            resizeForm()
        }, 100, true)


        const unfold = () => {
            if (packUp.value) {
                packUp.value = false
            } else {
                packUp.value = true
            }

            emit('UnFold', packUp.value)
        }


        return {
            formClass,
            formRef,
            packUp,
            isArrow,
            formItemRef,

            unfold,
        }
    },
    render() {

        if (this.form.isElForm === false) {
            return <FormItem
                form={this.form}
                ref={el => {this.formItemRef = el}}
                v-slots={this.$slots}
            ></FormItem>
        }

        return (
            <el-form inline={true}
                {...{...this.form, disabled: undefined}}
                ref={el => {this.formRef = el}}
                class={[this.formClass, this.packUp ? '' : 'packUp', 'dinert-form']}
                onSubmit={withModifiers(() => undefined, ['stop', 'prevent'])}
                key={this.form.key}>

                <el-row {...this.form.row} class="dinert-form-left">

                    { this.$slots.form_default ? this.$slots.form_default(this.form) : <FormItem v-slots={this.$slots} form={this.form} ref={el => {this.formItemRef = el}}></FormItem>}

                </el-row>
                {
                    this.search
                && <el-row class={['dinert-form-right', this.isArrow ? 'isArrow' : '']}>
                    {this.isArrow
                    && <el-button class="dinert-form-right-operation" text type="primary"
                        onClick={this.unfold}
                    >
                        <el-icon>
                            {this.packUp ? <ArrowUp/> : <ArrowDown/>}
                        </el-icon>
                        {this.packUp ? '收起' : '展开'}
                    </el-button>
                    }
                    {this.$slots.form_search?.()
                        || (
                            <>
                                <el-button type="primary" onClick={() => this.$emit('SearchFn')} {...this.form.searchButton}>{this.form.searchButton?.message || '搜索'}</el-button>
                                <el-button type="primary" plain
                                    onClick={() => this.$emit('ResetFn')}
                                    {...this.form.resetButton}
                                >{this.form.resetButton?.message || '重置'}</el-button>
                            </>
                        )
                    }
                </el-row>
                }


                {
                    this.$slots.form_search_operations
        && <el-row class={'el-form-right-after'}>
            {this.$slots.form_search_operations?.()}
        </el-row>
                }
            </el-form>
        )
    }
})
