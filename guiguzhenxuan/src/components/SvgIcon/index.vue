<template>
  <div>
    <svg>
      <use :xlink:href="prefix + name" :fill="color"></use>
    </svg>
  </div>
</template>
<script setup lang="ts">
defineProps({
  prefix: {
    type: String,
    default: "#icon-",
  },
  name: String,
  color: {
    type: String,
    default: "",
  },
});
</script>
<style></style>
