<style src="./MainForm.scss" module lang="scss"></style>
<script src="./MainForm.js"></script>

<template>
  <form :class="$style.mainForm" action="">
    <input :class="$style.formInput" v-model="fullName" type="text" placeholder="Naam leerling" />
    <input :class="$style.formInput" v-model="birthday" type="text" placeholder="Geboortedatum" />
  </form>
</template>
