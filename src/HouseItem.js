import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody } from 'reactstrap';
import './HouseItem.css';

    
const imgStyle = {
    maxheight: "150px", 
    maxwidth: "100px",
    marginleft: "auto",
    marginright: "auto",
    margintop: "10px"
}
class HouseItem extends Component {
    render(){
        return(      
        <Card id ={this.props.houseItem.propertyid}>
            <CardImg style={imgStyle} top src={this.props.houseItem.imageurl} alt="Card image cap" />          
            <CardBody>
                <CardTitle>{this.props.houseItem.propertyaddress}</CardTitle>
                <CardSubtitle>{this.props.houseItem.propertycity}, {this.props.houseItem.propertystate}</CardSubtitle>
                <CardText>This is a 3 unit 9 Bedroom property that is renting for $3020.00 a month</CardText>
                <Button>Work with this Property</Button>
            </CardBody>
        </Card>
)
    }
}

export default HouseItem;



// let hoursCounterStyle = {
//     width: "40%",
//     display: 'inline-block',
//     color: 'white',
//     marginBottom: '20px',
//     fontSize: '20px',
//     lineHeight: '30px',
//     color: isTooLow ? 'red': 'white',
//     fontWeight: isTooLow ? 'bold': 'normal'
//   }

// return(
//   <div style={hoursCounterStyle}>