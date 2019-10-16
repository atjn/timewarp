"use strict";

const c = require(path.join(__dirname + "controls.js"));

const insert = require(c.path("build-insert.js"));
const minify = require(c.path("build-minify.js"));

insert.run();
minify.run();