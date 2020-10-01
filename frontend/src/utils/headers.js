const textToValue = (text) =>
  text
    .toLowerCase()
    .split(" ")
    .join("_");

export const headerItem = (text, value) => ({
  text,
  value: value || textToValue(text),
});

export const planets = [
  headerItem("Name"),
  headerItem("Diameter"),
  headerItem("Orbital period"),
  headerItem("Rotation period"),
  headerItem("Population"),
  headerItem("Surface Water"),
  headerItem("Gravity"),
  headerItem("terrains"),
];

export const characters = [
  headerItem("Name"),
  headerItem("Height"),
  headerItem("Mass"),
  headerItem("Planet"),
  headerItem("Specie"),
  headerItem("Gender"),
  headerItem("Hair colors"),
  headerItem("Eye colors"),
  headerItem("Skin colors"),
];

export const species = [
  headerItem("Name"),
  headerItem("Average height"),
  headerItem("average_lifespan"),
  headerItem("classification"),
  headerItem("designation"),
  headerItem("language"),
  headerItem("planet"),
  headerItem("Hair colors"),
  headerItem("Eye colors"),
  headerItem("Skin colors"),
];

export const vehicles = [
  headerItem("Name"),
  headerItem("Model"),
  headerItem("Manufacturer"),
  headerItem("Cost", "cost_in_credits"),
  headerItem("Length"),
  headerItem("Atmosphering Speed", "max_atmosphering_speed"),
  headerItem("Crew"),
  headerItem("Passengers"),
  headerItem("Consumables"),
  headerItem("Capacity", "cargo_capacity"),
  headerItem("Vehicle class"),
];

export const starships = [
  headerItem("Name"),
  headerItem("Model"),
  headerItem("Manufacturer"),
  headerItem("Cost", "cost_in_credits"),
  headerItem("Length"),
  headerItem("Atmosphering Speed", "max_atmosphering_speed"),
  headerItem("Crew"),
  headerItem("Passengers"),
  headerItem("Consumables"),
  headerItem("Capacity", "cargo_capacity"),
  headerItem("Starship class"),
];
