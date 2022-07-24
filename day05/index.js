const R = require("ramda");
const RA = require("ramda-adjunct");
const { tLog, readFileToString, S } = require("../lib");

// FUCK THIS SHIT
const doSteps = (arr) => {
  let [i, s] = [0, 0];
  while (typeof arr[i] !== "undefined") {
    const oldI = i;
    i += arr[i];
    arr[oldI] = arr[oldI] >= 3 ? arr[oldI] - 1 : arr[oldI] + 1;
    s++;
  };
  return s;
};

const solve_1 = R.pipe(
  R.trim,
  R.split(/\n/),
  R.map(n => +n),
  doSteps,
);

const solve_2 = R.pipe(
  R.identity,
);

R.pipe(readFileToString, S(solve_1), tLog)("data.txt");
