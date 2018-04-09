import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import './App.css';
import {Container} from 'reactstrap';
import Properties from './Property';
import Header from './Header';

import Example from './Example';

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  batchInterval: 10
});

// function orderTotal (order) {
//   return order.items.reduce((prev, cur) =>
//     cur.price * (cur.quantity || 1) + prev, 0)
// }


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
        <Container>
          <Header></Header>
          <Example/>
          <Properties></Properties>
          </Container>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
