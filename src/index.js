// import React from 'react';
// import ReactDOM from 'react-dom';
// import GraphiQL from 'graphiql';
// import fetch from 'isomorphic-fetch';
// import * as serviceWorker from './serviceWorker';

// function graphQLFetcher(graphQLParams) {
//   return fetch(window.location.origin + '/graphql', {
//     method: 'post',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(graphQLParams),
//   }).then(response => response.json());
// }

// ReactDOM.render(<GraphiQL fetcher={graphQLFetcher} />, document.body);


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
