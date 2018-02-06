<template>
  <div>
    <child-node v-on:nameChanged="changeName" :name="name"></child-node>
  </div>
</template>

<script lang="ts" src="./parent-node.ts"></script>

<style scoped>

</style>