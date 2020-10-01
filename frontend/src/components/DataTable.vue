<template>
  <v-card>
    <v-card-title>
      {{ name }}
      <v-spacer />
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      />
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="data"
      item-key="id"
      :items-per-page="15"
      disable-pagination
      hide-default-footer
      class="elevation-1"
      :sort-by="sortBy"
      :search="search"
      :loading="isLoading"
    >
      <template v-slot:item="{ item }">
        <component :is="row" :item="item" v-ripple />
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  name: "Home",
  props: {
    data: Array,
    isLoading: {
      type: Boolean,
      required: true,
    },
    row: Object,
    headers: Array,
    name: String,
  },
  data: () => ({
    search: "",
    sortBy: "id",
  }),
};
</script>
