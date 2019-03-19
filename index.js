const path = require('path');
const express = require('express');
const app = express();

module.exports = function () {
	return express.static(__dirname + "/dist");
};