import React, { Component } from 'react';
import {graphql } from 'react-apollo'
import gql from "graphql-tag";
import { Jumbotron, Button} from 'reactstrap';
import {withRouter} from 'react-router-dom'

let data
const query = gql`query(
    $propertyid: Int!
  )
  {
    propertyByPropertyid(propertyid: $propertyid){
      propertyid
      propertyaddress
      propertycity
      propertyunitsByPropertyid{
        edges{
          node{
            numberofbedrooms
            description
            unitnumber
            unitid
          }
        }
      }
    }
  }`
class HouseItemDetails extends Component {
    render(){
        data = this.props.data
        if (data.loading) {
            return <div>Loading...</div>
          }
          if (data.error) {
            return <div>{data.error}</div>
          }
        return(<div>      <Jumbotron>
            <h1 className="display-3">Hello, world!</h1>
            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-2" />
            <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
            <p className="lead">
              <Button color="primary">Learn More</Button>
            </p>
          </Jumbotron>
                    <div>Router property id {this.props.match.params.propertyId}</div>   
                      <div>query id {data.propertyByPropertyid.propertyid}</div>
                </div>
                )
    }  
}

const HouseItemDetailsWithData = graphql(query, {
  options: ownProps => ({variables: {propertyid: ownProps.match.params.propertyId}}),
})(HouseItemDetails);

export default withRouter(HouseItemDetailsWithData);