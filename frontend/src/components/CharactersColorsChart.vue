<template>
  <div>
    <v-row no-gutters>
      <v-col cols="12" sm="4">
        <v-card class="mx-auto">
          <v-card-text>
            <div>Skin colors</div>
            <pie-chart :data="data.skinColors"></pie-chart>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card class="mx-auto">
          <v-card-text>
            <div>Hair colors</div>
            <pie-chart :data="data.hairColors"></pie-chart>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card class="mx-auto">
          <v-card-text>
            <div>Eye colors</div>
            <pie-chart :data="data.eyeColors"></pie-chart>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "das",
  props: {
    characters: Array,
  },
  computed: {
    data() {
      const a = {
        skinColors: [],
        hairColors: [],
        eyeColors: [],
      };
      this.characters.forEach((character) => {
        a.skinColors.push(...character.skinColors);
        a.hairColors.push(...character.hairColors);
        a.eyeColors.push(...character.eyeColors);
      });
      const groupAndCount = (arr) => {
        const grouped = arr.reduce((prev, curr) => {
          prev[curr] = prev[curr] || 0;
          prev[curr]++;

          return prev;
        }, {});

        return Object.keys(grouped).map((key) => [key, grouped[key]]);
      };

      return {
        skinColors: groupAndCount(a.skinColors),
        hairColors: groupAndCount(a.hairColors),
        eyeColors: groupAndCount(a.eyeColors),
      };
    },
  },
};
</script>
