import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem, CardHeader } from 'reactstrap';

class DishDetail extends React.Component {

	constructor(props) {
		super(props);

	}

  	render() {
		const dish = this.props.dish.map((dish) => {
			return (
		    	<div className="row">
			    	<div className="col-12 col-md-5 m-1">
						<Card>
							<CardImg width="100%" src={dish.image} alt={dish.name} />
							<CardBody>
								<CardTitle>{dish.name}</CardTitle>
								<CardText>{dish.description}</CardText>
							</CardBody>
						</Card>
					</div>
					<div className="col-12 col-md-5 m-1">
						<Card>
							<h4>Comments</h4>
					        {dish.comments.map((comment) => {
						        return (
						         	<CardBody>
							         	<CardText>{comment.comment}</CardText>
										<CardText>--{comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </CardText>
									</CardBody>
					         	);
					        })}
						</Card>
					</div>
				</div>
			);
		});

	    return (
	    	<div className="container">
	    	{ dish }
			</div>
	    );
	};
}

export default DishDetail;