"use strict"
const merge = require("webpack-merge")
const devEnv = require("./dev.env")

module.exports = merge(devEnv, {
  NODE_ENV: "'testing'",
  DOCS_URL: "'http://localhost:6060'",
})
