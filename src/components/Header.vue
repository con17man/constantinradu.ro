<template>
  <section class="header">
    <span>This is the header Component...</span>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  flex-flow: row nowrap;
}
</style>