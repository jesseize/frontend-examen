<style src="./MainHeader.scss" module lang="scss"></style>
<script src="./MainHeader.js"></script>

<template>
  <div :class="$style.mainHeader">
    <img
      :src="`${$versionRoot}image/logo.svg`"
      :class="$style.logo"
      alt="Logo MediaCollege Amsterdam">
    <img
      :src="`${$versionRoot}image/logo_text_twolines.svg`"
      :class="$style.logo"
      alt="Logo MediaCollege Amsterdam">
  </div>
</template>
