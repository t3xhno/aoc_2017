const R = require("ramda");
const fs = require("fs");

const tLog = R.tap((a) => console.dir(a, { depth: null }));

const S = (...fns) => (val) => fns.reduce((acc, fn) => acc.concat([fn(val)]), []);
const F = (join, f1, f2) => (val) => join(f1(val), f2(val));

const readFileToString = (fName) => fs.readFileSync(fName).toString();

module.exports = { tLog, readFileToString, F, S };