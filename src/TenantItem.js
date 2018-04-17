import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody } from 'reactstrap';
    
import './TenantItem.css';

    
class TenantItem extends Component {
    render(){
        return(      
        <Card id ={this.props.houseItem.propertyid}>
            <CardImg top width="100%" src={this.props.houseItem.imageurl} alt="Card image cap" />          
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

export default TenantItem;