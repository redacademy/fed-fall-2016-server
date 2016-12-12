/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

// a function to return the version of a specified package, as a string
// it locates the package in a require statement and grabs its _id property
// then finds the @ and takes the digits after it
const getPackageVersion = (pkg) => require(`${pkg}/package.json`).version

module.exports = {
  getPackageVersion
}
