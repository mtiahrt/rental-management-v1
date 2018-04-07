import React, {Component} from 'react';
import './LeftSideBar.css';

// let sideBarStyle = {

//     }


class LeftSideBar extends Component {
    render() {
        return(
        <div className="sidenav">
            <a href="#TenantPayments">Tenant Payments</a>
            <a href="#Utilities">Utilities</a>
            <a href="Property Units">Property Units</a>
            <a href="Leases">Leases</a>
            <a href="Expenses">Expenses</a>
            <a href="Reports">Reports</a>
            <a href="Names">Names</a>
        </div>
        )

    }

}


export default LeftSideBar;