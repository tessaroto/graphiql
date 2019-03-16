/**
 *  Copyright (c) Facebook, Inc. and its affiliates.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */

const path = require('path');
const express = require('express');
const graphqlHTTP = require('express-graphql');

const schema = require('./schema');

const app = express();
app.use(express.static(__dirname));
app.use('/graphql', graphqlHTTP(() => ({ schema, graphiql: true })));

app.use("/", express.static(path.join(__dirname, 'public')));

app.listen(3001, function() {
  const port = this.address().port;
  console.log(`Started on http://localhost:${port}/`);
});
