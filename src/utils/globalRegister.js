/*
 * @Description: 全局注册
 * @Autor: WangYuan
 * @Date: 2021-06-04 16:00:49
 * @LastEditors: WangYuan
 * @LastEditTime: 2021-12-27 16:23:12
 */

import Vue from 'vue'

// 注册所有全局组件
register(require.context('@/components', true, /.vue/))

// 注册所有物料
register(require.context('@/custom-components', true, /.vue/))

// 注册所有配置组件
register(require.context('@/custom-schema-template', true, /.vue/))

// /**
//  * 注册对应包下所有组件
//  * @param {*} path 包路径
//  */
function register (context) {
  context.keys().forEach(cnt => {
    const component = context(cnt)
    let ctrl = component.default || component
    let a = ctrl.name
    let b = ctrl

    // console.log(a); // 如，McTab
    // console.log(b); // {name: 'McTab', props: {…}, computed: {…}, methods: {…}, data: ƒ, …}

      // beforeCreate: [ƒ]
      // beforeDestroy: [ƒ]
      // computed: {itemWidth: ƒ}
      // data: ƒ data()
      // methods: {getWrapStyle: ƒ, getTabsStyle: ƒ, geItemStyle: ƒ, geItemImgStyle: ƒ}
      // name: "McTab"
      // props: {styles: {…}, attrs: {…}, tabList: {…}}
      // render: ƒ ()
      // staticRenderFns: []
      // _Ctor: {0: ƒ}
      // __file: "src/custom-components/McTab/index.vue"
      // _compiled: true
      // _scopeId: "data-v-051e459c"
      // [[Prototype]]: Object

    // 注册组件
    Vue.component(a, b)
  })
}
