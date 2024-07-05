import {DinertFormProps, DinertForm} from '@packages/index'
import lodash from 'lodash'
import {Ref, ref} from 'vue'
class UseForm<D, FI> {
    form: Ref<DinertFormProps<D, FI>['form']>
    formRef: Ref<InstanceType<typeof DinertForm> | null> = ref(null)
    search: Ref<DinertFormProps<D, FI>['search']>
    options: DinertFormProps<D, FI> = {
        form: {
            model: {},
            formItem: {}
        }
    }
    defaultOptions: DinertFormProps<D, FI> = {
        form: {
            inline: true,
            labelWidth: '80px',
            colLayout: {
                xl: 24, // ≥1920px
                lg: 24, // ≥1200px
                md: 24, // ≥992px
                sm: 24, // ≥768px
                xs: 24, // <768px
            },
            model: {},
            formItem: {}
        }
    }
    constructor(options: DinertFormProps<D, FI>) {
        this.options = lodash.defaultsDeep(lodash.cloneDeep(options), this.defaultOptions)

        this.form = ref<DinertFormProps<D, FI>['form'] | any>(this.options.form)
        this.search = ref<DinertFormProps<D, FI>['search']>(this.options.search)
    }
}

export default UseForm
