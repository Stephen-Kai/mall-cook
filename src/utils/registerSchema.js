/*
 * @Description: 解析物料Schmea，注册各物料属性参数与初始值
 * @Autor: WangYuan
 * @Date: 2021-12-27 16:30:29
 * @LastEditors: WangYuan
 * @LastEditTime: 2021-12-27 17:27:22
 */
import Vue from 'vue'

// 注册所有物料属性参数与初始值
registerComponentsSchema()

// 获取所有自定义组件schema
function registerComponentsSchema () {
  const files = require.context('@/custom-components', true, /component.json$/)
  let fields = {}
  let initializing = []
  // console.log('filesfilesfilesfiles', files.keys());
  /**
   *  0: "./McContainer/component.json"
   *  1: "./McImg/component.json"
   *  2: "./McTab/component.json"
   *  3: "./McTitle/component.json"
   */
  files.keys().forEach(key => {
    const [, name] = key.split('/')
    // console.log('files(key)files(key)files(key)', files(key)); // component.json的内容
    let config = { component: name, ...files(key) }
    // console.log(config)

    fields[name] = config.fields
    initializing.push(initDefaulValue(config))
  })
  Vue.prototype.$fields = fields // （物料属性描述对象）
  // console.log('fields', fields);
  // McContainer: {padding: {…}}
  // McImg: {imagePath: {…}, radius: {…}}
  // McTab: {tabList: {…}, attrs: {…}, styles: {…}}
  // McTitle: {title: {…}, model: {…}, styles: {…}}
  Vue.prototype.$initializing = initializing // （物料初始化数据集合）
  // console.log('initializinginitializing', initializing);
  // 0: {component: 'McContainer', name: '容器', icon: 'icon-rongqi', padding: 0}
  // 1: {component: 'McImg', name: '图片', icon: 'icon-image', imagePath: '', radius: 0}
  // 2: {component: 'McTab', name: '图文导航', icon: 'icon-daohang', tabList: Array(4), attrs: {…}, …}
      // tabList
      // 0: {id: '0001', label: '推荐酒店', image: 'http://110.42.184.128:8090/img/1638500137694.png'}
      // 1: {id: '0002', label: '热销抢购', image: 'http://110.42.184.128:8090/img/1638500155713.png'}
      // 2: {id: '0003', label: '促销门票', image: 'http://110.42.184.128:8090/img/1638500173774.png'}
      // 3: {id: '0004', label: '机票团购', image: 'http://110.42.184.128:8090/img/1639569399375.png'}
      // attrs {model: 'fixed', type: 'image-text', max: '4'}
      // styles {pagePadding: 0, cmpUpperPadding: 0, cmpLowerPadding: 0, cmpUpperRadius: 0, cmpLowerRadius: 0, …}

  // 3: {component: 'McTitle', name: '标题', icon: 'icon-biaotizujian', title: 'LEADING SERIES', model: 'left', …}
    // styles: {titleSize: 20, titleColor: '#333333'}
  // length: 4
}

// 初始化组件初始数据
function initDefaulValue (config) {
  let { component, name, icon, fields } = config
  let temp = { component, name, icon }
  setDefaultValue(fields, temp)
  return temp
}

// 递归设置各层级初始数据
function setDefaultValue (fields, initializing) {
  for (let key in fields) {
    let { type, value, child } = fields[key]
    if (type == 'object') {
      initializing[key] = {}
      child && setDefaultValue(fields[key].child, initializing[key])
    } else {
      initializing[key] = value
    }
  }
  return initializing
}
