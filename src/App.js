import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import './App.css';
import Properties from './Property';
import LeftSideBar from './LeftSideBar';
import Header from './Header';

import Example from './Example';
import Example2 from './Example2';

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
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
          <Example/>
          {/* <Example2 /> */}
          <LeftSideBar></LeftSideBar>
          <Properties></Properties>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
