import React, { Component } from 'react';
    
class HouseItemDetails extends Component {
    render(){
        return(<div>This is HouseItemDetails Component
                    <div>{this.props.match.params.propertyId}</div>   
                </div>
                )
    }  
}


export default HouseItemDetails;