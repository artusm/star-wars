<template>
  <v-card class="mx-auto">
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title v-ripple class="headline">
          {{ name }}
        </v-list-item-title>
        <v-list-item-subtitle>
          <router-link :to="`/${resource}/${id}`">#{{ id }}</router-link>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-img v-if="imagePath" :src="imagePath" contain max-height="600px"></v-img>
    <slot />
  </v-card>
</template>

<script>
export default {
  name: "PageCard",
  props: {
    id: Number,
    name: String,
    resource: String,
    imagePath: String,
  },
};
</script>
