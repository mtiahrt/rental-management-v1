import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody } from 'reactstrap';

  let x;
 x = data =>{
  return <div></div>
}

const GET_PROPERTIES = gql`
{allProperties(condition: {flagdeleted: false}){
  edges{
    node{
      propertyid
      propertyaddress
      propertycity
      propertystate
      imageurl
    }
  }
 }
}
`;
const Properties = () => (
  <Query query={GET_PROPERTIES}
    pollInterval={5000}>
    {({ loading, error, data, networkStatus }) => {
        if (networkStatus === 4) return "Refetching!";
        if (loading) return null;
        if (error) return `Error!: ${error}`;
        return(
          // x(data));
          <CardDeck>
            {data.allProperties.edges.map(property => 
              <Card id ={property.node.propertyid}>
                <CardImg top width="100%" src={property.node.imageurl} alt="Card image cap" />          
                <CardBody>
                  <CardTitle>{property.node.propertyaddress}</CardTitle>
                  <CardSubtitle>{property.node.propertycity}, {property.node.propertystate}</CardSubtitle>
                  <CardText>This is a 3 unit 9 Bedroom property that is renting for $3020.00 a month</CardText>
                  <Button>Work with this Property</Button>
                </CardBody>
              </Card>
              )}
          </CardDeck>
        )
    }}
  </Query>
)

export default Properties;