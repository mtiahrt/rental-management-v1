import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody } from 'reactstrap';
    
import './TenantItem.css';

    
class TenantItem extends Component {
    render(){
        return(      
        <Card id ={this.props.tenantid}>
            <CardImg top width="100%" src="https://us.123rf.com/450wm/nicemonkey/nicemonkey1510/nicemonkey151000007/46984232-black-and-white-female-male-symbols-with-drop-shadow.jpg?ver=6" alt="Card image cap" />
            <CardBody>
                <CardTitle>{`${this.props.firstname} ${this.props.lastname}`}</CardTitle>
                <CardSubtitle>"Dont know what to put here"</CardSubtitle>
                <CardText>This is a 3 unit 9 Bedroom property that is renting for $3020.00 a month</CardText>
                <Button>Work with this Property</Button>
            </CardBody>
        </Card>
)
    }
}

export default TenantItem;


// {`images/${this.props.image}`}