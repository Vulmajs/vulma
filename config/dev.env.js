"use strict"
const merge = require("webpack-merge")
const prodEnv = require("./prod.env")

module.exports = merge(prodEnv, {
  NODE_ENV: "'development'",
  DOCS_URL: "'http://localhost:6060'",
})
