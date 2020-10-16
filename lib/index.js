import vuePayKeyboard from './keyboard'
const paykeyboard = {
    install(Vue) {
        Vue.component(vuePayKeyboard.name, vuePayKeyboard) // vuePayKeyboard.name 组件的name属性
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(paykeyboard);
}
export default paykeyboard // 导出..