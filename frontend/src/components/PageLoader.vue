<template>
  <div>
    <v-skeleton-loader
      v-if="isLoading"
      class="mb-6"
      type="article, card-avatar, list-item-two-line, list-item-two-line, list-item-two-line"
    />
    <slot v-else></slot>
  </div>
</template>

<script>
export default {
  name: "PageLoader",
  props: {
    isLoading: Boolean,
  },
};
</script>
