<template>
  <div>

    <div>
      Hi I'm the child, my name is {{name}}
    </div>

    <input type="text" @change="changeName"> 
    
  </div>
</template>

<script lang="ts" src="./child-node.ts"></script>

<style scoped>

</style>