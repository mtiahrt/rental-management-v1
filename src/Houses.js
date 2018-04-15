import React from 'react';
import {graphql } from 'react-apollo'
import gql from "graphql-tag";
import {Row, Col} from 'reactstrap';
import HouseItem from './HouseItem';
import {Link} from 'react-router-dom';

const query = gql`
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
class Houses extends React.Component {
    render(){
    let data = this.props.data
    if (data.loading) {
      return <div>Loading...</div>
    }
    if (data.error) {
      return <div>{data.error}</div>
    }
    return (
      <div id="properties">
      <Row>
        {data.allProperties.edges.map(( item, index) => {
          return <Col sm="4" key={item.node.propertyid} >
            <Link to={`/propertyID/${item.node.propertyid}`}><HouseItem key={item.node.propertyid} houseItem={item.node}/></Link>
                 </Col>
        })}
      </Row>
    </div>     
    )}
}

Houses = graphql(query) (Houses)
export default Houses;