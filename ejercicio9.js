const xMen = [
  { name: "Wolverine", year: 1974 },
  { name: "Cyclops", year: 1963 },
  { name: "Storm", year: 1975 },
  { name: "Phoenix", year: 1963 },
  { name: "Beast", year: 1963 },
  { name: "Gambit", year: 1990 },
  { name: "Nightcrawler", year: 1975 },
  { name: "Magneto", year: 1963 },
  { name: "Professor X", year: 1963 },
  { name: "Mystique", year: 1978 },
];

function findOldestXMen(xMen) {
  let oldestXmenYear = 100000;
  let oldestXmen = [];
  for (const xMan of xMen) {
    if (xMan.year < oldestXmenYear) {
      oldestXmenYear = xMan.year;
      oldestXmen = xMan.name;
    } else if (xMan.year == oldestXmenYear) {
      oldestXmen = oldestXmen + ", " + xMan.name;
    }
  }
  return oldestXmen;
}

console.log(findOldestXMen(xMen));
