import React, { Component } from 'react';
import {graphql } from 'react-apollo'
import gql from "graphql-tag";
import { Row,Jumbotron, Card, Button, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody, Col, InputGroup, Input, InputGroupButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {withRouter} from 'react-router-dom';
import TenantItem from './TenantItem';


let data = {};
let tenants;
const query = gql `query(
  $propertyid: Int!
  $today: Date!
)
{
  propertyByPropertyid(propertyid: $propertyid){
    propertyid
    propertyaddress
    propertycity
    propertystate
    propertyunitsByPropertyid(condition: {flagdeleted: false}){
      edges{
        node{
          numberofbedrooms
          description
          unitnumber
          unitid
          leasesByUnitid(filter: {
            startDate: {lessThan:$today}
            endDate: {greaterThan: $today}
            flagdeleted: {equalTo: false}
          }){
            edges{
              node{
                leaseid
                unitid
                rentamount
                startDate
                endDate
                tenantsByLeaseid(condition: {flagdeleted: false}){
                  edges{
                    node{
                      tenantid
                      leaseid
                      nameid
                      parentalguarantee
                      nameByNameid{
												nameid
                        firstname
                        lastname
                        isMale
                      }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }`


class HouseItemDetails extends Component {
  constructor(props){
    super(props)

    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.state = {
      dropdownOpen: false,
      unitId: -1,
      unitDescription: ''
    };
  }

  toggleDropDown(args) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });

    if (this.state.dropdownOpen){
      this.setState({unitDescription: args.target.firstChild.data}) 
      this.getTenants(args.target.firstChild.data);
    }

  }
  getTenants(unitDescription) {
    // get the unit that was selected first
    let unit = data.propertyunitsByPropertyid.edges.find(item => {
      if (item.node.description === unitDescription){
        return item.node.unitid
      }
    })
    // get the tenants living in that unit
    tenants = unit.node.leasesByUnitid.edges[0].node.tenantsByLeaseid.edges.map (item => {
      return <Col sm="4" key={item.node.tenantid}><TenantItem tenantid={item.node.tenantid}
                firstname = {item.node.nameByNameid.firstname}
                lastname = {item.node.nameByNameid.lastname}
                ismale = {item.node.nameByNameid.isMale}/>
             </Col>
    }) 
  }

  getTotalBedroomCount(receivedArray) {
    return receivedArray.reduce((prev, cur) => {
      return cur.node.numberofbedrooms + prev
    },0)
  }

    render(){
        data = this.props.data
        if (data.loading) {
            return <div>Loading...</div>
          }
          if (data.error) {
            return <div>{data.error}</div>
          }
          data = data.propertyByPropertyid
        return(
        <div>      
          <Jumbotron>
            <h1 className="display-9">{data.propertyaddress}</h1>
            <h1 className="display-9">{data.propertycity}, {data.propertystate}</h1>
            <hr className="my-2" />
            <p>This property is has {data.propertyunitsByPropertyid.edges.length} units with {this.getTotalBedroomCount(data.propertyunitsByPropertyid.edges)} bedrooms</p>
            <p className="lead">
              <Button color="primary">Learn More</Button>
            </p>
          </Jumbotron>
          <div>
            <InputGroup>
              <Input value={this.state.unitDescription} />
              <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                <DropdownToggle caret>
                  Units
                </DropdownToggle>
                <DropdownMenu>
                  {data.propertyunitsByPropertyid.edges.map(item => {
                    return <DropdownItem key={item.node.unitid}>{item.node.description}</DropdownItem>
                  })}
                </DropdownMenu>
              </InputGroupButtonDropdown>
            </InputGroup>
          </div>
          <br/>
          <div>
            <h2>Current Tenants</h2>
            <div>
            <Row>
            {tenants}
            </Row>
            </div>
          </div>
        </div>
)
    }  
}

const HouseItemDetailsWithData = graphql(query, {
  options: ownProps => ({variables: {
                          propertyid: ownProps.match.params.propertyId, 
                          today: "05-14-2018"}}),
})(HouseItemDetails);

export default withRouter(HouseItemDetailsWithData);