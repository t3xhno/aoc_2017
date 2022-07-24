const R = require("ramda");
const { tLog, readFileToString, S } = require("../lib");

const checkDuplicates = (str) => str.match(/\b(\w+)\b(?=.*\b\1\b)/gi);

const solve_1 = R.pipe(R.trim, R.split(/\n/), R.map(checkDuplicates), R.filter(R.isNil), R.length);

const solve_2 = R.pipe(
  R.identity,
);

R.pipe(readFileToString, S(solve_1), tLog)("data.txt");
