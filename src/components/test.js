const getFullName = (fname, lname) => {
  return `${fname}+${lname}`;
};

const actualFullName = getFullName("Bruce", "Wayne");
const exprectedFullName = "BruceWayne";

if (actualFullName !== exprectedFullName) {
  throw new Error(`${actualFullName} is not equal to ${exprectedFullName}`);
}
