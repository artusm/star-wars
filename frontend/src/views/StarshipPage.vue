<template>
  <page-loader :is-loading="$apollo.loading">
    <page-card
      :id="starship.id"
      :name="starship.name"
      :resource="$route.meta.resource"
      :image-path="starship.imagePath"
    >
      <v-list class="transparent">
        <v-list-item v-ripple>
          <v-list-item-title>Model</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            {{ starship.model }}
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-ripple>
          <v-list-item-title>Manufacturer</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            {{ starship.manufacturer }}
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-ripple>
          <v-list-item-title>Cost in credits</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <span v-bind="attrs" v-on="on">
                  <nullable :value="starship.costInCredits | humanNumber" />
                </span>
              </template>
              <span>
                <nullable :value="starship.costInCredits" />
              </span>
            </v-tooltip>
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-ripple>
          <v-list-item-title>Length</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            <nullable :value="starship.length" />
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-ripple>
          <v-list-item-title>Max atmosphering speed</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            <nullable :value="starship.maxAtmospheringSpeed" />
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-ripple>
          <v-list-item-title>Crew</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            <nullable :value="starship.crew" />
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-ripple>
          <v-list-item-title>Passengers</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            <nullable :value="starship.passengers" />
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-ripple>
          <v-list-item-title>Consumables</v-list-item-title>

          <v-list-item-subtitle class="text-right">
            <nullable :value="starship.consumables" />
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-ripple>
          <v-list-item-title>Cargo capacity</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <span v-bind="attrs" v-on="on">
                  <nullable :value="starship.cargoCapacity | humanNumber" />
                </span>
              </template>
              <span>
                <nullable :value="starship.cargoCapacity" />
              </span>
            </v-tooltip>
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-ripple>
          <v-list-item-title>Starship class</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            {{ starship.starshipClass }}
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </page-card>
    <br />
    <data-table
      :name="`Starship '${starship.name}' belongs to characters`"
      :headers="headers"
      :data="starship.characters"
      :is-loading="$apollo.loading"
      :row="row"
    /><br />
    <characters-colors-chart
      v-if="!$apollo.loading && starship.characters.length"
      :characters="starship.characters"
    />
  </page-loader>
</template>

<script>
import gql from "graphql-tag";
import DataTable from "../components/DataTable";
import CharacterRow from "../components/Rows/CharacterRow";
import CharactersColorsChart from "../components/CharactersColorsChart";
import { characters } from "../utils/headers";

export default {
  name: "StarshipPage",
  components: {
    DataTable,
    CharactersColorsChart,
  },
  data: () => ({
    starship: {},
    headers: characters,
    row: CharacterRow,
  }),
  apollo: {
    starship: {
      query: gql`
        query GetStarship($id: Int!) {
          starship(id: $id) {
            id
            name
            model
            manufacturer
            costInCredits
            length
            maxAtmospheringSpeed
            crew
            passengers
            cargoCapacity
            consumables
            starshipClass
            MGLT
            hyperdriveRating
            imagePath
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
      // Reactive parameters
      variables() {
        return {
          id: this.$route.params.id,
        };
      },
    },
  },
};
</script>
