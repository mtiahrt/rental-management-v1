import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import './NavBar.css';
import {Container} from 'reactstrap';
import Header from './Header';
import NavBar from './NavBar';
import Houses from './Houses';
import HouseItemDetails from './HouseItemDetails';

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
        <Router>
          <div className="App">
            <Header></Header>
            <NavBar/>
            <Container>
              <Route exact={true} path="/" component={Houses} />
              <Route path="/propertyID/:propertyId" component={HouseItemDetails}/>
            </Container>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
