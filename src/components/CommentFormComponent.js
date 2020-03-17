 import React, { Component } from 'react';
 import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row, Collapse, Jumbotron, Modal, ModalHeader,
  	Navbar, NavbarBrand, Nav, NavItem, NavbarToggler,  ModalBody } from 'reactstrap';
 import { Control, LocalForm , Errors } from 'react-redux-form';

 const required = (val) => val && val.length;
 const maxLength = (len) => (val) => !(val) || (val.length <= len);
 const minLength = (len) => (val) => !(val) || (val.length >= len);
 const isNumber = (val) => !isNaN(Number(val));
 const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

 class CommentForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isNavOpen: false,
			isModalOpen: false
		};
		this.toggleNav = this.toggleNav.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen
		});
	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	}

	handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    }

    render () {
    	return(
    		<div className="container">
	        	<Nav className="ml-auto" navbar>
	            	<NavItem>
	            		<Button outline onClick={this.toggleModal}>
	            			<span className="fa fa-pencil"></span>Submit Comment
	            		</Button>
	            	</NavItem>
	        	</Nav>
	   			<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
		        	<ModalHeader toggle={this.toggleModal}>Comment</ModalHeader>
		        	<ModalBody>
	                    <div className="col-12 col-md-9">
	                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
	                            <Row className="form-group">
	                                <Label htmlFor="author" md={2}>Author</Label>
	                                <Col md={10}>
	                                    <Control.text model=".author" id="author" name="author"
	                                        placeholder="Author"
	                                        className="form-control"
	                                        validators={{
	                                            required, minLength: minLength(3), maxLength:maxLength(15)
	                                        }}
	                                        />
	                                    <Errors
	                                        className="text-danger"
	                                        model=".author"
	                                        show="touched"
	                                        messages={{
	                                            required: 'Required',
	                                            minLength: 'Must be greater than 2 characters',
	                                            maxLength: 'Must be 15 characters or less'
	                                        }}
	                                    />
	                                </Col>
	                            </Row>
	                            <Row className="form-group">
	                            	<Label htmlFor="rating">Rating</Label>
	                                <Control.select model=".rating" name="rating" id="rating"
	                                    className="form-control">
	                                    <option>1</option>
	                                    <option>2</option>
	                                    <option>3</option> 
	                                    <option>4</option> 
	                                    <option>5</option>  
	                                </Control.select>
	                            </Row>
	                            <div className="form-group">
	                                <Label htmlFor="comment" md={2}>Comment</Label>
	                                <Col md={10}>
	                                    <Control.textarea model=".comment" id="comment" name="comment"
	                                        rows="6"
	                                        className="form-control" />
	                                </Col>
	                            </div>
	                            <div className="form-group">
	                                <Col md={{size: 10, offset: 2}}>
	                                    <Button type="submit" color="primary">
	                                        Submit
	                                    </Button>
	                                </Col>
	                            </div>
	                        </LocalForm>
	                    </div>
		        	</ModalBody>
		        </Modal>
	       	</div>
    	);
    }
}

export default CommentForm;