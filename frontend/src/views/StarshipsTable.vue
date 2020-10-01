<template>
  <data-table
    :name="$route.meta.resource"
    :headers="headers"
    :data="starships"
    :is-loading="$apollo.loading"
    :row="row"
  />
</template>

<script>
import DataTable from "../components/DataTable";
import StarshipRow from "../components/Rows/StarshipRow";
import gql from "graphql-tag";
import { starships } from "../utils/headers";

export default {
  name: "StarshipTable",
  components: {
    DataTable,
  },
  data: () => ({
    starships: [],
    headers: starships,
    row: StarshipRow,
  }),
  apollo: {
    starships: {
      query: gql`
        query GetStarships {
          starships {
            id
            name
            model
            manufacturer
            costInCredits
            length
            maxAtmospheringSpeed
            crew
            passengers
            consumables
            cargoCapacity
            starshipClass
            imagePath
          }
        }
      `,
    },
  },
};
</script>
