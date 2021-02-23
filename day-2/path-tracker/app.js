const countryPaths = [
  ['USA', 'BRA'],
  ['JPN', 'PHL'],
  ['UAE', 'JPN'],
  ['BRA', 'UAE'],
];

// Get start & end points
const firstCountries = countryPaths.map((i) => i[0]);
const secondCountries = countryPaths.map((i) => i[1]);

// Get the start point (First path always returns one Number 👌)
const startPoint = firstCountries.filter((ctry) => !secondCountries.includes(ctry))[0];

// Create the path of follows by the user
let path = [startPoint];
let now = startPoint;
while (path.length < countryPaths.length + 1) {
  countryPaths.map((ctc) => {
    if (ctc[0] == now) {
      now = ctc[1];
      path.push(now);
    }
  });
}
console.log(path);
