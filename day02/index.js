const R = require("ramda");
const { tLog, readFileToString, S, F } = require("../lib");

const getDiffs = (arr) => Math.max(...arr) - Math.min(...arr);
const makePairs = (arr) => arr.reduce((acc, curr, i, a) =>
  [...acc, a.slice(i + 1,).map((sub => [curr, sub]))]
, []);
const getDivisions = (arr) => arr[0] / arr[1];
const isWhole = (n) => n - Math.floor(n) === 0;
const sortAscending = (arr) => [...arr].sort((a, b) => b - a);

const solve_1 = R.pipe(R.trim, R.split(/\n/), R.map(R.pipe(R.split(/\t/), R.map(n => +n))), R.map(getDiffs), R.sum);

const solve_2 = R.pipe(
  R.trim,
  R.split(/\n/),
  R.map(R.pipe(R.split(/\t/), R.map(n => +n))),
  R.map(makePairs),
  R.unnest,
  R.unnest,
  R.map(sortAscending),
  R.map(getDivisions),
  R.filter(isWhole),
  R.sum,
);

R.pipe(readFileToString, S(solve_1, solve_2), tLog)("data.txt");
