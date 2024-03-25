function ageChecker(age) {
  const a = age >= 18 ? "Adult" : "Child";
  return a;
}
let ageCheckerVariable = ageChecker(55);
console.log(ageCheckerVariable);
