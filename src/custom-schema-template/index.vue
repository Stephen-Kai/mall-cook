<!--
 * @Description: 属性组件配置模板
 * @Autor: WangYuan
 * @Date: 2021-09-23 20:10:52
 * @LastEditors: WangYuan
 * @LastEditTime: 2021-12-28 09:16:03
-->
<template>
  <ul>
    <!-- "(s, key, index) in schema" object遍历，v-for="(value, key, index) in values -->
    <li v-for="(s, key, index) in schema" :key="index">
      <component
        :key="index"
        :is="getComponents(s.type)"
        v-model="value[key]"
        v-bind="s"
        :schema="s"
      >
        <custom-schema-template
          v-if="s.child"
          :schema="s.child"
          :value="value[key]"
        ></custom-schema-template>
      </component>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'custom-schema-template',

  provide () {
    return {
      mode: this
    }
  },

  props: {
    schema: {
      typeof: Object,
      default: () => {}
    },
    value: {
      typeof: Object,
      default: () => {}
    }
  },

  mounted() {
    // console.log('schema', this.schema)
      // {title: {…}, model: {…}, styles: {…}}
          // model: {label: '布局选择', type: 'select', value: 'left', data: Array(2)}
          // styles: {label: '标题样式', type: 'object', child: {…}}
          // title: {label: '标题', type: 'string', value: 'LEADING SERIES'}
    // console.log('this.value', this.value); // 等于父组件this.curComponent
        // component: "McTitle"
        // icon: "icon-biaotizujian"
        // id: "1647136196sTLFKZr6"
        // model: "left"
        // name: "标题"
        // styles: Object
          // titleColor: "#333333"
          // titleSize: 20
        // title: "LEADING SERIES"
  },

  methods: {
    getComponents(type){
      // console.log('schema', `schema-${type}`);
      // title组件
      // `schema-${type}` schema-string
      // `schema-${type}` schema-select
      // `schema-${type}` schema-object
        // `schema-${type}` schema-number
        // `schema-${type}` schema-color
      return `schema-${type}`
    }
  }
}
</script>
