<template>
  <tr>
    <td>
      <v-tooltip left absolute>
        <template v-slot:activator="{ on, attrs }">
          <span v-bind="attrs" v-on="on">
            <router-link :to="`/species/${item.id}`">
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
      <nullable :value="item.averageHeight" />
    </td>
    <td>
      <nullable :value="item.averageLifespan" />
    </td>
    <td>
      {{ item.classification | extractFromObject("name") }}
    </td>
    <td>
      {{ item.designation | extractFromObject("name") }}
    </td>
    <td>
      {{ item.language | extractFromObject("name") }}
    </td>
    <td>
      <v-tooltip v-if="item.planet" left absolute>
        <template v-slot:activator="{ on, attrs }">
          <span v-bind="attrs" v-on="on">
            <router-link :to="`/planets/${item.planet.id}`">
              {{ item.planet.name }}
            </router-link>
          </span>
        </template>
        <v-img
          :src="item.planet.imagePath"
          :max-width="200"
          contain
          :max-height="300"
        />
      </v-tooltip>
      <span v-else>N/A</span>
    </td>
    <td>
      <nullable :value="item.hairColors | arrayToString" />
    </td>
    <td>
      <nullable :value="item.eyeColors | arrayToString" />
    </td>
    <td>
      <nullable :value="item.skinColors | arrayToString" />
    </td>
  </tr>
</template>

<script>
export default {
  name: "SpecieRow",
  props: {
    item: Object,
  },
};
</script>
