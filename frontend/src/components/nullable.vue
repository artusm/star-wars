<template>
  <span v-if="isNull" class="font-weight-thin">NA</span>
  <span v-else>{{ value }}</span>
</template>

<script>
export default {
  name: "nullable",
  props: ["value"],
  computed: {
    isNull() {
      return !this.value && this.value !== 0;
    },
  },
};
</script>
