import React from 'react';
import {graphql } from 'react-apollo'
import gql from "graphql-tag";
import {Row, Col} from 'reactstrap';
import HouseItem from './HouseItem';
import {Link} from 'react-router-dom';



let data = {
    "allProperties": {
      "edges": [
        {
          "node": {
            "propertyid": 1,
            "propertyaddress": "2105 8th Ave",
            "propertycity": "Greeley",
            "propertystate": "CO",
            "imageurl": "https://i.imgur.com/iExZVA6.jpg"
          }
        },
        {
          "node": {
            "propertyid": 2,
            "propertyaddress": "1917 8th Ave",
            "propertycity": "Greeley",
            "propertystate": "CO",
            "imageurl": "https://i.imgur.com/HLs7uMc.jpg"
          }
        },
        {
          "node": {
            "propertyid": 3,
            "propertyaddress": "1833 11th Ave",
            "propertycity": "Greeley",
            "propertystate": "CO",
            "imageurl": "https://i.imgur.com/CsTFXkG.jpg"
          }
        },
        {
          "node": {
            "propertyid": 4,
            "propertyaddress": "5551 W. 29st",
            "propertycity": "Greeley",
            "propertystate": "CO",
            "imageurl": "https://i.imgur.com/l8i3Gfq.jpg"
          }
        },
        {
          "node": {
            "propertyid": 5,
            "propertyaddress": "705 W. Prospect",
            "propertycity": "Fort Collins",
            "propertystate": "CO",
            "imageurl": "https://i.imgur.com/CGS5tgL.jpg"
          }
        },
        {
          "node": {
            "propertyid": 6,
            "propertyaddress": "1002 Lochmore Pl",
            "propertycity": "Fort Collins",
            "propertystate": "CO",
            "imageurl": "https://i.imgur.com/gZtgwDr.jpg"
          }
        },
        {
          "node": {
            "propertyid": 7,
            "propertyaddress": "2921 Stonehaven Dr",
            "propertycity": "Fort Collins",
            "propertystate": "CO",
            "imageurl": "https://i.imgur.com/YRbF7ed.jpg"
          }
        }
      ]
    }
  }


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
    // let data = this.props.data
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

// Houses = graphql(query) (Houses)
export default Houses;