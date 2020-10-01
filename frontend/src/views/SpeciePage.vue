<template>
  <page-loader :is-loading="$apollo.loading">
    <page-card
      :id="specie.id"
      :name="specie.name"
      :resource="$route.meta.resource"
      :image-path="specie.imagePath"
    >
      <v-list class="transparent">
        <v-list-item v-ripple>
          <v-list-item-title>Average height</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            <nullable :value="specie.averageHeight" />
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-ripple>
          <v-list-item-title>Average averageLifespan</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            <nullable :value="specie.averageLifespan" />
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-ripple>
          <v-list-item-title>Classification</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            {{ specie.classification | extractFromObject }}
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-ripple>
          <v-list-item-title>Designation</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            {{ specie.designation | extractFromObject }}
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-ripple>
          <v-list-item-title>Language</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            {{ specie.language | extractFromObject }}
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-ripple>
          <v-list-item-title>Planet</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            <router-link
              v-if="specie.planet"
              :to="`/planets/${specie.planet.id}`"
            >
              {{ specie.planet.name }}
            </router-link>
            <span v-else>
              <nullable />
            </span>
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-ripple>
          <v-list-item-title>Hair colors</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            <nullable :value="specie.hairColors | arrayToString" />
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-ripple>
          <v-list-item-title>Eye colors</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            <nullable :value="specie.eyeColors | arrayToString" />
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-ripple>
          <v-list-item-title>Skin colors</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            <nullable :value="specie.skinColors | arrayToString" />
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
      <br />
      <data-table
        :name="`Characters with ${specie.name} specie`"
        :headers="headers"
        :data="specie.characters"
        :is-loading="false"
        :row="row"
      />
      <br />
      <characters-colors-chart
        v-if="!$apollo.loading"
        :characters="specie.characters"
      />
    </page-card>
  </page-loader>
</template>

<script>
import { characters } from "../utils/headers";
import DataTable from "../components/DataTable";
import CharacterRow from "../components/Rows/CharacterRow.vue";
import CharactersColorsChart from "../components/CharactersColorsChart";
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
    specie: {},
  }),
  apollo: {
    specie: {
      query: gql`
        query GetSpecie($id: Int!) {
          specie(id: $id) {
            id
            name
            skinColors
            hairColors
            eyeColors
            imagePath
            planet {
              id
              name
            }
            language {
              name
            }
            designation {
              name
            }
            classification {
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
