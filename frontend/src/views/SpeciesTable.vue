<template>
  <data-table
    :name="$route.meta.resource"
    :headers="headers"
    :data="species"
    :is-loading="$apollo.loading"
    :row="row"
  />
</template>

<script>
import DataTable from "../components/DataTable";
import SpecieRow from "../components/Rows/SpecieRow";
import gql from "graphql-tag";
import { species } from "../utils/headers";

export default {
  name: "SpeciesTable",
  components: {
    DataTable,
  },
  data: () => ({
    species: [],
    headers: species,
    row: SpecieRow,
  }),
  apollo: {
    species: {
      query: gql`
        query GetSpecies {
          species {
            id
            name
            averageHeight
            averageLifespan
            skinColors
            hairColors
            eyeColors
            imagePath
            planet {
              id
              name
              imagePath
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
          }
        }
      `,
    },
  },
};
</script>
