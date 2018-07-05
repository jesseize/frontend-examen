<style src="./MainHeader.scss" module lang="scss"></style>
<script src="./MainHeader.js"></script>

<template>
  <div :class="$style.mainHeader">
    <div :class="$style.branding">
      <img
        :src="`${$versionRoot}image/logo.svg`"
        :class="$style.logo"
        alt="Logo MediaCollege Amsterdam">
      <img
        :src="`${$versionRoot}image/logo_text_twolines.svg`"
        :class="$style.logo"
        alt="Logo MediaCollege Amsterdam">
    </div>
    <div :class="$style.overlay"></div>
    <div :class="$style.background"></div>
  </div>
</template>
