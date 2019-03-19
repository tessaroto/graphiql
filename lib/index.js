const path = require('path');
const express = require('express');

module.exports = function (app) {
	app.use(express.static(__dirname + "/node_modules/graphiql-keycloak/build"));
};