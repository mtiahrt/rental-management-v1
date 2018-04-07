import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

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
          <div style={propertyStyle}>
          {data.allProperties.edges.map(property => 
            <div>
              <p>{property.node.propertyaddress}</p>
              <p>{property.node.propertycity}</p>
              <p>{property.node.propertystate}</p>
              <p>{window.location.href}</p>
              <img alt="my" src={property.node.imageurl} style={{ height: 300, width: 350 }} />
            </div>
            )}
          </div>
        )
    }}
  </Query>
)


let propertyStyle = {
    color: 'black',
    fontFamily: 'Lucida Calligraphy Italic',
    fontSize: '17px',
    width: "25%", 
    display: "inline-block",
    padding: '10px'
    }

export default Properties;