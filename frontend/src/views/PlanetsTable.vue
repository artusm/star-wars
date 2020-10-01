<template>
  <data-table
    :name="$route.meta.resource"
    :headers="headers"
    :data="planets"
    :is-loading="$apollo.loading"
    :row="row"
  />
</template>

<script>
import DataTable from "../components/DataTable";
import PlanetRow from "../components/Rows/PlanetRow";
import gql from "graphql-tag";
import { planets } from "../utils/headers";

export default {
  name: "CharactersTable",
  components: {
    DataTable,
  },
  data: () => ({
    planets: [],
    headers: planets,
    row: PlanetRow,
  }),
  apollo: {
    planets: {
      query: gql`
        query GetPlanets {
          planets {
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
          }
        }
      `,
    },
  },
};
</script>
