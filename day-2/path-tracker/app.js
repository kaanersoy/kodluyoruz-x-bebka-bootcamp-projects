const countryPaths = [
  ['USA', 'BRA'],
  ['JPN', 'PHL'],
  ['UAE', 'JPN'],
  ['BRA', 'UAE'],
];

// Get start & end points
const firstCountries = countryPaths.map((i) => i[0]);
const secondCountries = countryPaths.map((i) => i[1]);

// Get the start point
const startPoint = firstCountries.filter((ctry) => !secondCountries.includes(ctry))[0];
// console.log(startPoint);

const path = [startPoint];
let now = startPoint;
while (path.length < 5) {
  countryPaths.forEach((ctc) => {
    if (ctc[0] == now) {
      now = ctc[1];
      path.push(now);
    }
  });
}
console.log(path);
