import { strictEquals } from "./components/strictequals.js";

console.log("When valueA is equal to valueB it returns " + strictEquals(1, 1));
console.log(
  "When valueA is NaN and ValueB is NaN it returns " + strictEquals(NaN, NaN)
);
console.log(
  "When valueA is 0 and ValueB is -0 it returns " + strictEquals(0, -0)
);
console.log(
  "When valueA is -0 and ValueB is 0 it returns " + strictEquals(-0, 0)
);
console.log(
  "When valueA is a number and valueB is a string it returns " +
    strictEquals(1, "1")
);
console.log(
  "When valeA is true and valueB is false it returns " +
    strictEquals(true, false)
);
console.log(
  "When valeA is false and valueB is false it returns " +
    strictEquals(false, false)
);
console.log(
  "When valueA is a string and valueB is a string it returns " +
    strictEquals("water", "oil")
);
