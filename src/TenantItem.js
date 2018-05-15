import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody } from 'reactstrap';
import './TenantItem.css';

let maleURL = 'https://i.imgur.com/Jppug6Z.jpg';
let femaleURL = 'https://i.imgur.com/8MJYCaC.jpg';
class TenantItem extends Component {
    
    render(){
        return(
                <Card id ={this.props.tenantid}>
                    <CardImg top src={(this.props.ismale ? maleURL : femaleURL)} alt="Card image cap" />
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