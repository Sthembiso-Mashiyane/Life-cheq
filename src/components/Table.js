import React,{Component} from "react";
import Table from "react-bootstrap/Table";

import Button from "react-bootstrap/Button";

export class DataTable extends Component{
    render() {
        return (
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </Table>
        );
    }
}
