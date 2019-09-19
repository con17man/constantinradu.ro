<template>
  <section class="header">
    <div class="header--logo">
      <img alt="Vue logo" src="@/assets/logo-cr.svg" />
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {}
</script>

<style scoped lang="scss">
@import "@/styles/components/header.scss";
</style>
