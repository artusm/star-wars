<template>
  <page-loader :is-loading="$apollo.loading">
    <page-card
      :id="character.id"
      :name="character.name"
      :resource="$route.meta.resource"
      :image-path="character.imagePath"
    >
      <v-list class="transparent">
        <v-list-item v-ripple>
          <v-list-item-title>Height</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            <nullable :value="character.height" />
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-ripple>
          <v-list-item-title>Mass</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            <nullable :value="character.mass" />
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-ripple>
          <v-list-item-title>Planet</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            <router-link
              v-if="character.planet"
              :to="`/planets/${character.planet.id}`"
            >
              {{ character.planet.name }}
            </router-link>
            <span v-else>N/A</span>
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-ripple>
          <v-list-item-title>Specie</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            <router-link
              v-if="character.specie"
              :to="`/species/${character.specie.id}`"
            >
              {{ character.specie.name }}
            </router-link>
            <span v-else>N/A</span>
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-ripple>
          <v-list-item-title>Gender</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            {{ character.gender | extractFromObject }}
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-ripple>
          <v-list-item-title>Hair colors</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            <nullable :value="character.hairColors | arrayToString" />
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-ripple>
          <v-list-item-title>Eye colors</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            <nullable :value="character.eyeColors | arrayToString" />
          </v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-ripple>
          <v-list-item-title>Skin colors</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            <nullable :value="character.skinColors | arrayToString" />
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </page-card>
  </page-loader>
</template>

<script>
import gql from "graphql-tag";
export default {
  name: "CharacterPage",
  data: () => ({
    character: {},
  }),
  apollo: {
    character: {
      query: gql`
        query GetCharacter($id: Int!) {
          character(id: $id) {
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
      variables() {
        return {
          id: this.$route.params.id,
        };
      },
    },
  },
};
</script>
