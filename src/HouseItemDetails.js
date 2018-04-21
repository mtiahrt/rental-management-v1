import React, { Component } from 'react';
import {graphql } from 'react-apollo'
import gql from "graphql-tag";
import { Jumbotron, Card, Button, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody, Col, InputGroup, Input, InputGroupButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {withRouter} from 'react-router-dom';
import TenantItem from './TenantItem';

let data = {
    "propertyByPropertyid": {
      "propertyid": 1,
      "propertyaddress": "2105 8th Ave",
      "propertycity": "Greeley",
      "propertystate": "CO",
      "propertyunitsByPropertyid": {
        "edges": [
          {
            "node": {
              "numberofbedrooms": 2,
              "description": "2105 Upstairs",
              "unitnumber": 1,
              "unitid": 1,
              "leasesByUnitid": {
                "edges": [
                  {
                    "node": {
                      "leaseid": 16,
                      "unitid": 1,
                      "rentamount": 750,
                      "startDate": "2015-06-01",
                      "endDate": "2016-05-27",
                      "tenantsByLeaseid": {
                        "edges": [
                          {
                            "node": {
                              "tenantid": 15,
                              "leaseid": 16,
                              "nameid": 40,
                              "parentalguarantee": false,
                              "nameByNameid": {
                                "nameid": 40,
                                "firstname": "Huber Sprinkler",
                                "lastname": null,
                                "isMale": null
                              }
                            }
                          },
                          {
                            "node": {
                              "tenantid": 16,
                              "leaseid": 16,
                              "nameid": 39,
                              "parentalguarantee": false,
                              "nameByNameid": {
                                "nameid": 39,
                                "firstname": "Maffat Paint and Glass",
                                "lastname": null,
                                "isMale": null
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "node": {
                      "leaseid": 29,
                      "unitid": 1,
                      "rentamount": 725,
                      "startDate": "2014-06-01",
                      "endDate": "2015-05-25",
                      "tenantsByLeaseid": {
                        "edges": []
                      }
                    }
                  },
                  {
                    "node": {
                      "leaseid": 44,
                      "unitid": 1,
                      "rentamount": 710,
                      "startDate": "2013-04-01",
                      "endDate": "2014-05-30",
                      "tenantsByLeaseid": {
                        "edges": []
                      }
                    }
                  },
                  {
                    "node": {
                      "leaseid": 51,
                      "unitid": 1,
                      "rentamount": 750,
                      "startDate": "2016-06-01",
                      "endDate": "2017-05-31",
                      "tenantsByLeaseid": {
                        "edges": [
                          {
                            "node": {
                              "tenantid": 79,
                              "leaseid": 51,
                              "nameid": 89,
                              "parentalguarantee": false,
                              "nameByNameid": {
                                "nameid": 89,
                                "firstname": "Cole",
                                "lastname": "Hendrickson",
                                "isMale": null
                              }
                            }
                          },
                          {
                            "node": {
                              "tenantid": 80,
                              "leaseid": 51,
                              "nameid": 90,
                              "parentalguarantee": false,
                              "nameByNameid": {
                                "nameid": 90,
                                "firstname": "Graham's Flooring",
                                "lastname": null,
                                "isMale": null
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "node": {
                      "leaseid": 64,
                      "unitid": 1,
                      "rentamount": 800,
                      "startDate": "2017-06-01",
                      "endDate": "2018-05-31",
                      "tenantsByLeaseid": {
                        "edges": [
                          {
                            "node": {
                              "tenantid": 112,
                              "leaseid": 64,
                              "nameid": 106,
                              "parentalguarantee": false,
                              "nameByNameid": {
                                "nameid": 106,
                                "firstname": "IPM Pest Management",
                                "lastname": null,
                                "isMale": null
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          },
          {
            "node": {
              "numberofbedrooms": 2,
              "description": "2105 Downstairs",
              "unitnumber": 2,
              "unitid": 2,
              "leasesByUnitid": {
                "edges": [
                  {
                    "node": {
                      "leaseid": 17,
                      "unitid": 2,
                      "rentamount": 700,
                      "startDate": "2015-06-01",
                      "endDate": "2016-05-27",
                      "tenantsByLeaseid": {
                        "edges": [
                          {
                            "node": {
                              "tenantid": 40,
                              "leaseid": 17,
                              "nameid": 71,
                              "parentalguarantee": false,
                              "nameByNameid": {
                                "nameid": 71,
                                "firstname": "Shur Painting",
                                "lastname": null,
                                "isMale": null
                              }
                            }
                          },
                          {
                            "node": {
                              "tenantid": 41,
                              "leaseid": 17,
                              "nameid": 70,
                              "parentalguarantee": false,
                              "nameByNameid": {
                                "nameid": 70,
                                "firstname": "Boxelder Sanitation",
                                "lastname": null,
                                "isMale": null
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "node": {
                      "leaseid": 45,
                      "unitid": 2,
                      "rentamount": 620,
                      "startDate": "2013-04-01",
                      "endDate": "2014-05-30",
                      "tenantsByLeaseid": {
                        "edges": []
                      }
                    }
                  },
                  {
                    "node": {
                      "leaseid": 52,
                      "unitid": 2,
                      "rentamount": 750,
                      "startDate": "2016-06-01",
                      "endDate": "2017-05-31",
                      "tenantsByLeaseid": {
                        "edges": [
                          {
                            "node": {
                              "tenantid": 77,
                              "leaseid": 52,
                              "nameid": 91,
                              "parentalguarantee": false,
                              "nameByNameid": {
                                "nameid": 91,
                                "firstname": "Ben Mendoza",
                                "lastname": null,
                                "isMale": null
                              }
                            }
                          },
                          {
                            "node": {
                              "tenantid": 78,
                              "leaseid": 52,
                              "nameid": 92,
                              "parentalguarantee": false,
                              "nameByNameid": {
                                "nameid": 92,
                                "firstname": "Property Techinca",
                                "lastname": null,
                                "isMale": null
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "node": {
                      "leaseid": 65,
                      "unitid": 2,
                      "rentamount": 800,
                      "startDate": "2018-01-16",
                      "endDate": "2018-01-16",
                      "tenantsByLeaseid": {
                        "edges": []
                      }
                    }
                  },
                  {
                    "node": {
                      "leaseid": 66,
                      "unitid": 2,
                      "rentamount": 800,
                      "startDate": "2017-06-01",
                      "endDate": "2018-05-31",
                      "tenantsByLeaseid": {
                        "edges": [
                          {
                            "node": {
                              "tenantid": 113,
                              "leaseid": 66,
                              "nameid": 106,
                              "parentalguarantee": false,
                              "nameByNameid": {
                                "nameid": 106,
                                "firstname": "IPM Pest Management",
                                "lastname": null,
                                "isMale": null
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      }
    }
  };
let tenants;
const query = gql `query(
  $propertyid: Int!
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
          leasesByUnitid(condition: {flagdeleted: false}){
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
      this.getTenants();
    }

  }
  getTenants() {
    let unitid = data.data.propertyunitsByPropertyid.edges.find(item => {
      if (item.node.description === this.state.unitDescription){
        return item.node.unitid
      }
    })
    tenants = data.map (item => {
      return <TenantItem TenantItem={item}/>
    })
  }

  getTotalBedroomCount(receivedArray) {
    return receivedArray.reduce((prev, cur) => {
      return cur.node.numberofbedrooms + prev
    },0)
  }

    render(){
        // data = this.props.data
        if (data.loading) {
            return <div>Loading...</div>
          }
          if (data.error) {
            return <div>{data.error}</div>
          }
          // data = this.props.data.propertyByPropertyid;
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
            {}
          </div>
        </div>
)
    }  
}

const HouseItemDetailsWithData = graphql(query, {
  options: ownProps => ({variables: {propertyid: ownProps.match.params.propertyId}}),
})(HouseItemDetails);

// export default withRouter(HouseItemDetailsWithData);
export default HouseItemDetails;