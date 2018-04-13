import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import './App.css';
import './NavBar.css';
import {Container} from 'reactstrap';
import Header from './Header';
import NavBar from './NavBar';
import Houses from './Houses';

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
        <Header></Header>
        <NavBar/>
        <Container>

          <Houses></Houses>
          </Container>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
