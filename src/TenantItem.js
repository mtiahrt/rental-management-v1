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
                <CardSubtitle>"Dont know what to put here Phone number??"</CardSubtitle>
                <CardText>What should go here?????</CardText>
                <Button>Edit Tenant info</Button>
            </CardBody>
        </Card>
)
    }
}

export default TenantItem;