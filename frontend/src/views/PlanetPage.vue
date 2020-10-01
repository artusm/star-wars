<template>
  <page-loader :is-loading="$apollo.loading">
    <page-card
      :id="planet.id"
      :name="planet.name"
      :resource="$route.meta.resource"
      :image-path="planet.imagePath"
    >
      <v-list class="transparent">
        <v-list-item v-ripple>
          <v-list-item-title>Diameter</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            <nullable :value="planet.diameter" />
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-ripple>
          <v-list-item-title>Gravity</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            <nullable :value="planet.gravity" />
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-ripple>
          <v-list-item-title>Orbital period</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            <nullable :value="planet.diameter" />
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-ripple>
          <v-list-item-title>Population</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <span v-bind="attrs" v-on="on">
                  <nullable :value="planet.population | humanNumber" />
                </span>
              </template>
              <span><nullable :value="planet.population"/></span>
            </v-tooltip>
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-ripple>
          <v-list-item-title>Rotation period</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            <nullable :value="planet.rotationPeriod" />
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-ripple>
          <v-list-item-title>Surface water</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            <nullable :value="planet.surfaceWater" />
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-ripple>
          <v-list-item-title>Terrains</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            {{ planet.terrains | extractFromArray }}
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-ripple>
          <v-list-item-title>Climates</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            {{ planet.climates | extractFromArray }}
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </page-card>
    <br />
    <data-table
      :name="`Characters were born on ${planet.name}`"
      :headers="headers"
      :data="planet.characters"
      :is-loading="false"
      :row="row"
    />
    <br />
    <characters-colors-chart
      v-if="!$apollo.loading"
      :characters="planet.characters"
    />
  </page-loader>
</template>

<script>
import { characters } from "../utils/headers";
import CharactersColorsChart from "../components/CharactersColorsChart";

import DataTable from "../components/DataTable";
import CharacterRow from "../components/Rows/CharacterRow.vue";
import gql from "graphql-tag";

export default {
  name: "PlanetPage",
  components: {
    DataTable,
    CharactersColorsChart,
  },
  data: () => ({
    headers: characters,
    row: CharacterRow,
    planet: {},
  }),
  apollo: {
    planet: {
      query: gql`
        query GetPlanet($id: Int!) {
          planet(id: $id) {
            id
            name
            rotationPeriod
            orbitalPeriod
            diameter
            gravity
            surfaceWater
            population
            imagePath
            terrains {
              name
            }
            climates {
              name
            }
            characters {
              id
              name
              height
              mass
              birthYear
              skinColors
              hairColors
              eyeColors
              imagePath
              gender {
                name
              }
              specie {
                id
                name
                imagePath
              }
              planet {
                id
                name
                imagePath
              }
            }
          }
        }
      `,
      variables() {
        return {
          id: this.$route.params.id,
        };
      },
    },
  },
};
</script>
