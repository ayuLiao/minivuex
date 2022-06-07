import { inject, reactive } from "vue";

const STORE_KEY = '__store__'

function useStore() {
    return inject(STORE_KEY)
}

function createStore(options) {
    // 创建Store实例
    return new Store(options)
}

class Store {
    constructor(options) {
        // reactive包裹，_state为响应式对象
        this._state = reactive({
            data: options.state()
        })
        this._mutations = options.mutations
    }

    get state() {
        return this._state.data
    }

    commit = (type, playload) => {
        // 获得函数对象
        const entry = this._mutations[type]
        // 执行函数
        entry && entry(this.state, playload)
    }

    // main.js入口app.use(store)会执行该函数
    install(app) {
        // 利用provide将其注册给全局的组件使用
        app.provide(STORE_KEY, this)
    }
}

export{ createStore, useStore }
