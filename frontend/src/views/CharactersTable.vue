<template>
  <data-table
    :name="$route.meta.resource"
    :headers="headers"
    :data="characters"
    :is-loading="$apollo.loading"
    :row="row"
  />
</template>

<script>
import DataTable from "../components/DataTable";
import CharacterRow from "../components/Rows/CharacterRow.vue";
import gql from "graphql-tag";
import { characters } from "../utils/headers";

export default {
  name: "CharactersTable",
  components: {
    DataTable,
  },
  data: () => ({
    characters: [],
    headers: characters,
    row: CharacterRow,
  }),
  apollo: {
    characters: {
      query: gql`
        query GetCharacters {
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
      `,
    },
  },
};
</script>
