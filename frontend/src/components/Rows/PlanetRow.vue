<template>
  <tr>
    <td>
      <v-tooltip left absolute>
        <template v-slot:activator="{ on, attrs }">
          <span v-bind="attrs" v-on="on">
            <router-link :to="`/planets/${item.id}`">
              {{ item.name }}
            </router-link>
          </span>
        </template>
        <v-img
          :src="item.imagePath"
          :max-width="200"
          contain
          :max-height="300"
        />
      </v-tooltip>
    </td>
    <td>
      <nullable :value="item.diameter" />
    </td>
    <td>
      <nullable :value="item.orbitalPeriod" />
    </td>
    <td>
      <nullable :value="item.rotationPeriod" />
    </td>
    <td>
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <span v-bind="attrs" v-on="on">
            <nullable :value="item.population | humanNumber" />
          </span>
        </template>
        <span><nullable :value="item.population"/></span>
      </v-tooltip>
    </td>
    <td>
      <nullable :value="item.surfaceWater" />
    </td>
    <td>
      <nullable :value="item.gravity" />
    </td>
    <td>
      <nullable :value="item.terrains | extractFromArray" />
    </td>
  </tr>
</template>

<script>
export default {
  name: "PlanetsRow",
  props: {
    item: Object,
  },
};
</script>
