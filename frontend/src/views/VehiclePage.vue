<template>
  <page-loader :is-loading="$apollo.loading">
    <page-card
      :id="vehicle.id"
      :name="vehicle.name"
      :resource="$route.meta.resource"
      :image-path="vehicle.imagePath"
    >
      <v-list class="transparent">
        <v-list-item v-ripple>
          <v-list-item-title>Model</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            {{ vehicle.model }}
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-ripple>
          <v-list-item-title>Manufacturer</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            <nullable :value="vehicle.manufacturer" />
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-ripple>
          <v-list-item-title>Cost in credits</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            <nullable :value="vehicle.costInCredits" />
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-ripple>
          <v-list-item-title>Length</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            <nullable :value="vehicle.length" />
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-ripple>
          <v-list-item-title>Max atmosphering speed</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            <nullable :value="vehicle.maxAtmospheringSpeed" />
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-ripple>
          <v-list-item-title>Crew</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            {{ vehicle.crew }}
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-ripple>
          <v-list-item-title>Passengers</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            <nullable :value="vehicle.passengers" />
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-ripple>
          <v-list-item-title>Consumables</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            <nullable :value="vehicle.consumables" />
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-ripple>
          <v-list-item-title>Cargo capacity</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <span v-bind="attrs" v-on="on">
                  <nullable :value="vehicle.cargoCapacity | humanNumber" />
                </span>
              </template>
              <span>
                <nullable :value="vehicle.cargoCapacity" />
              </span>
            </v-tooltip>
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-ripple>
          <v-list-item-title>Vehicle class</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            {{ vehicle.vehicleClass }}
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </page-card>
    <br />
    <data-table
      :name="`Vehicle '${vehicle.name}' belongs to characters`"
      :headers="headers"
      :data="vehicle.characters"
      :is-loading="$apollo.loading"
      :row="row"
    />
    <br />
    <characters-colors-chart
      v-if="!$apollo.loading && vehicle.characters.length"
      :characters="vehicle.characters"
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
  name: "PlanetPage",
  components: {
    DataTable,
    CharactersColorsChart,
  },
  data: () => ({
    vehicle: {},
    headers: characters,
    row: CharacterRow,
  }),
  apollo: {
    vehicle: {
      query: gql`
        query GetVehicle($id: Int!) {
          vehicle(id: $id) {
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
            vehicleClass
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
