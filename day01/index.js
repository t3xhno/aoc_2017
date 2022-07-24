const R = require("ramda");
const { tLog, readFileToString, S } = require("../lib");

const makeSum = (str) => str.split("").reduce((acc, e, i, a) =>
  e === a[(i + 1) % a.length] ? acc + +e : acc
, 0);

const makeSum2 = (str) => str.split("").reduce((acc, e, i, a) =>
  e === a[(i + a.length / 2) % a.length] ? acc + +e : acc
, 0);


const solve_1 = R.pipe(
  R.trim(),
  makeSum,
);

const solve_2 = R.pipe(
  R.trim(),
  makeSum2,
);

R.pipe(readFileToString, S(solve_1, solve_2), tLog)("data.txt");
