<!--
 * @Description: What's this for
 * @Autor: WangYuan
 * @Date: 2021-05-19 09:49:33
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-02-11 10:13:04
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  mounted () {
    // 隐藏加载Loading
    document.getElementById('appLoading').style.display = 'none'
  }
}
</script>

<style lang="scss"></style>
