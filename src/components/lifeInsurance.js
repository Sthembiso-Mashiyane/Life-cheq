import React, {Component} from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import {connect} from "react-redux";
import {addLifeInsurance, deleteLifeInsurance, editLifeInsurance} from '../actions/lifeInsurance'

export class LifeInsurance extends Component {

    handleToggle = () => {
        this.setState({show: !this.state.show})
        this.setState({lifeInsurance: {}})
        this.setState({isEdit: false});

    }

    handleChangeLifeInsurance = (e, property) => {
        console.log('Entered', e.target.value)
        let saveObject = Object.assign({}, this.state.lifeInsurance);
        saveObject[property] = e.target.value
        this.setState({lifeInsurance: saveObject});
    }

    selectedObject = (sentObj) => {
        this.handleToggle();
        this.setState({lifeInsurance: sentObj})
        this.setState({isEdit: true});

    }

    constructor() {
        super();
        this.state = {
            show: false,
            isEdit: false,
            lifeInsurance: {
                totalPremium: 1000,
                debitOrder: {
                    day: 2,
                    amount: 10
                },
                disabilityCover: 1000000,
                disabilityPremium: 100,
                coverStartDate: "2019-09-25",
                incomeProtectionPremium: 300,
                incomeProtectionCover: 3000000,
                criticalIllnessCover: 2000000,
                criticalIllnessPremium: 200,
                label: "New Life Insurance",
                lifeCover: 4000000,
                lifePremium: 400,
                actionType: "new-life-insurance"
            }
        }
        this.saveOrEdit = this.saveOrEdit.bind(this);
    }

    saveOrEdit() {
        if(this.state.isEdit){
            this.props.editLifeInsurance(this.state.lifeInsurance)
        }
        else {
            this.props.addLifeInsurance(this.state.lifeInsurance)
        }
    }

    render() {
        return (
            <div>
                <h3 className="mb-5">Life Insurance Table</h3>
                <Button className="mb-5" onClick={this.handleToggle}>Add Life Insurance</Button>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Total Premium</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.lifeInsurances.map(post => {
                            return (
                                <tr>
                                    <td> {post.id}</td>
                                    <td>{post.totalPremium}</td>
                                    <td><Dropdown onSelect={this.onSelect} id="d">
                                        <Dropdown.Toggle>
                                            Choose Action
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => this.selectedObject(post)}>
                                                Edit Record
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                Delete Record
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown></td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </Table>

                <Modal
                    show={this.state.show}
                    onHide={this.handleToggle}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Add/Edit Life Insurance</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="Label">
                                <Form.Label>Label</Form.Label>
                                <Form.Control type="text"
                                              onChange={(event) => this.handleChangeLifeInsurance(event, 'label')}
                                              value={this.state.lifeInsurance.label}
                                              placeholder="Enter Label"/>
                            </Form.Group>
                            <Form.Group controlId="formTotalPremium">
                                <Form.Label>Total Premium</Form.Label>
                                <Form.Control type="number"
                                              onChange={(event) => this.handleChangeLifeInsurance(event, 'totalPremium')}
                                              value={this.state.lifeInsurance.totalPremium}
                                              placeholder="Enter Total Premium"/>
                            </Form.Group>

                            <Form.Group controlId="formTotalPremium">
                                <Form.Label>Disability Cover</Form.Label>
                                <Form.Control type="number"
                                              onChange={(event) => this.handleChangeLifeInsurance(event, 'disabilityCover')}
                                              value={this.state.lifeInsurance.disabilityCover}
                                              placeholder="Enter Disability Cover"/>
                            </Form.Group>
                            <Form.Group controlId="formDisabilityPremium">
                                <Form.Label>Disability Premium</Form.Label>
                                <Form.Control type="number"
                                              onChange={(event) => this.handleChangeLifeInsurance(event, 'disabilityPremium')}
                                              value={this.state.lifeInsurance.disabilityPremium}
                                              placeholder="Enter Total Premium"/>
                            </Form.Group>
                            <Form.Group controlId="formCoverStartDate">
                                <Form.Label>Cover Start Date</Form.Label>
                                <Form.Control type="date"
                                              onChange={(event) => this.handleChangeLifeInsurance(event, 'coverStartDate')}
                                              value={this.state.lifeInsurance.coverStartDate}
                                              placeholder="Select Start Date"/>
                            </Form.Group>
                            <Form.Group controlId="formIncomeProtectionPremium">
                                <Form.Label>Income Protection Premium</Form.Label>
                                <Form.Control type="number"
                                              onChange={(event) => this.handleChangeLifeInsurance(event, 'incomeProtectionPremium')}
                                              value={this.state.lifeInsurance.incomeProtectionPremium}
                                              placeholder="Income Protection Premium"/>
                            </Form.Group> <Form.Group controlId="formTotalPremium">
                            <Form.Label>Critical Illness Cover</Form.Label>
                            <Form.Control type="number"
                                          onChange={(event) => this.handleChangeLifeInsurance(event, 'criticalIllnessCover')}
                                          value={this.state.lifeInsurance.criticalIllnessCover}
                                          placeholder="Enter Critical Illness Cover"/>
                        </Form.Group> <Form.Group controlId="formCriticalIllnessPremium">
                            <Form.Label>Critical Illness Premium</Form.Label>
                            <Form.Control type="number"
                                          onChange={(event) => this.handleChangeLifeInsurance(event, 'criticalIllnessPremium')}
                                          value={this.state.lifeInsurance.criticalIllnessPremium}
                                          placeholder="Enter Total Premium"/>
                        </Form.Group>
                            <Form.Group controlId="Label">
                                <Form.Label>Label</Form.Label>
                                <Form.Control type="text"
                                              onChange={(event) => this.handleChangeLifeInsurance(event, 'label')}
                                              value={this.state.lifeInsurance.label}
                                              placeholder="Enter Label"/>
                            </Form.Group>
                            <Form.Group controlId="formLifePremium">
                                <Form.Label>Life Premium</Form.Label>
                                <Form.Control type="number"
                                              onChange={(event) => this.handleChangeLifeInsurance(event, 'lifePremium')}
                                              value={this.state.lifeInsurance.lifePremium}
                                              placeholder="Enter Life Premium"/>
                            </Form.Group>
                            <Button variant="primary" onClick={this.saveOrEdit}>
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleToggle}>
                            Close
                        </Button>
                        <Button variant="primary">Understood</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        lifeInsurances: state.lifeInsurances
    }
}

const mapDispatchToProps = () => {
    return {
        addLifeInsurance, deleteLifeInsurance, editLifeInsurance
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LifeInsurance)





