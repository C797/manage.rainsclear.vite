<!-- 💥 这里是一次性加载 LayoutComponents -->
<template>
  <LayoutVertical/>
</template>

<script setup lang="ts" name="layout">
import LayoutVertical from "./LayoutVertival/index.vue";
</script>

<style scoped lang="scss">
.layout {
  min-width: 600px;
}
</style>
