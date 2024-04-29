const starWarsMovies = [
  { title: "A New Hope", releaseYear: 1977 },
  { title: "The Empire Strikes Back", releaseYear: 1980 },
  { title: "Return of the Jedi", releaseYear: 1983 },
  { title: "The Phantom Menace", releaseYear: 1999 },
  { title: "Attack of the Clones", releaseYear: 2002 },
  { title: "Revenge of the Sith", releaseYear: 2005 },
  { title: "The Force Awakens", releaseYear: 2015 },
  { title: "The Last Jedi", releaseYear: 2017 },
  { title: "The Rise of Skywalker", releaseYear: 2019 },
  { title: "Rogue One", releaseYear: 2016 },
  { title: "Solo", releaseYear: 2018 },
];

let starWarsMoviesPerDecade = {};
for (const movie of starWarsMovies) {
  if (movie.releaseYear >= 1970 && movie.releaseYear < 1980) {
    if (starWarsMoviesPerDecade["Década 70"]) {
      starWarsMoviesPerDecade["Década 70"] += ", " + movie.title;
    } else starWarsMoviesPerDecade["Década 70"] = movie.title;
  }
  if (movie.releaseYear >= 1980 && movie.releaseYear < 1990) {
    if (starWarsMoviesPerDecade["Década 80"]) {
      starWarsMoviesPerDecade["Década 80"] += ", " + movie.title;
    } else starWarsMoviesPerDecade["Década 80"] = movie.title;
  }
  if (movie.releaseYear >= 1990 && movie.releaseYear < 2000) {
    if (starWarsMoviesPerDecade["Década 90"]) {
      starWarsMoviesPerDecade["Década 90"] += ", " + movie.title;
    } else starWarsMoviesPerDecade["Década 90"] = movie.title;
  }
  if (movie.releaseYear >= 2000 && movie.releaseYear < 2000) {
    if (starWarsMoviesPerDecade["Década 00"]) {
      starWarsMoviesPerDecade["Década 00"] += ", " + movie.title;
    } else starWarsMoviesPerDecade["Década 00"] = movie.title;
  }
  if (movie.releaseYear >= 2010 && movie.releaseYear < 2020) {
    if (starWarsMoviesPerDecade["Década 10"]) {
      starWarsMoviesPerDecade["Década 10"] += ", " + movie.title;
    } else starWarsMoviesPerDecade["Década 10"] = movie.title;
  }
}

console.log(starWarsMoviesPerDecade);
