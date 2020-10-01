<template>
  <tr>
    <td>
      <v-tooltip left absolute>
        <template v-slot:activator="{ on, attrs }">
          <span v-bind="attrs" v-on="on">
            <router-link :to="`/vehicles/${item.id}`">
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
    <td>{{ item.model }}</td>
    <td>
      <nullable :value="item.manufacturer" />
    </td>
    <td>
      <nullable :value="item.costInCredits" />
    </td>
    <td>
      <nullable :value="item.length" />
    </td>
    <td>
      <nullable :value="item.maxAtmospheringSpeed" />
    </td>
    <td>
      <nullable :value="item.crew" />
    </td>
    <td>
      <nullable :value="item.passengers" />
    </td>
    <td>
      <nullable :value="item.consumables" />
    </td>
    <td>
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <span v-bind="attrs" v-on="on">
            <nullable :value="item.cargoCapacity | humanNumber" />
          </span>
        </template>
        <span>
          <nullable :value="item.cargoCapacity" />
        </span>
      </v-tooltip>
    </td>
    <td>{{ item.vehicleClass }}</td>
  </tr>
</template>

<script>
export default {
  name: "VehiclesRow",
  props: {
    item: Object,
  },
};
</script>
