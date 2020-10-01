<template>
  <data-table
    :name="$route.meta.resource"
    :headers="headers"
    :data="vehicles"
    :is-loading="$apollo.loading"
    :row="row"
  />
</template>

<script>
import DataTable from "../components/DataTable";
import VehicleRow from "../components/Rows/VehicleRow";
import gql from "graphql-tag";
import { vehicles } from "../utils/headers";

export default {
  name: "StarshipTable",
  components: {
    DataTable,
  },
  data: () => ({
    vehicles: [],
    headers: vehicles,
    row: VehicleRow,
  }),
  apollo: {
    vehicles: {
      query: gql`
        query GetVehicles {
          vehicles {
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
            vehicleClass
            imagePath
          }
        }
      `,
    },
  },
};
</script>
