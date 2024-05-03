const mutants = [
  { name: "Wolverine", power: "regeneration" },
  { name: "Magneto", power: "magnetism" },
  { name: "Professor X", power: "telepathy" },
  { name: "Jean Grey", power: "telekinesis" },
  { name: "Rogue", power: "power absorption" },
  { name: "Storm", power: "weather manipulation" },
  { name: "Mystique", power: "shape-shifting" },
  { name: "Beast", power: "superhuman strength" },
  { name: "Colossus", power: "steel skin" },
  { name: "Nightcrawler", power: "teleportation" },
  { name: "Prueba", power: "teleportation" },
];

function findMutantByPower(mutants, power) {
  let resultMutant = [];
  for (const mutant of mutants) {
    if (power == mutant.power) {
      resultMutant.push(mutant.name);
    }
  }
  return resultMutant;
}

console.log(findMutantByPower(mutants, "teleportation"));
