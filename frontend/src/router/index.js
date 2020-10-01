import Vue from "vue";
import VueRouter from "vue-router";
import { createResourceRoute } from "../utils";
import {
  PlanetPage,
  PlanetsTable,
  SpeciePage,
  SpeciesTable,
  StarshipPage,
  StarshipsTable,
  VehiclePage,
  VehiclesTable,
  CharacterPage,
  CharactersTable,
} from "../views";

Vue.use(VueRouter);

const routes = [
  { path: "", redirect: "/planets" },
  ...createResourceRoute("characters", CharactersTable, CharacterPage),
  ...createResourceRoute("planets", PlanetsTable, PlanetPage),
  ...createResourceRoute("species", SpeciesTable, SpeciePage),
  ...createResourceRoute("starships", StarshipsTable, StarshipPage),
  ...createResourceRoute("vehicles", VehiclesTable, VehiclePage),
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
