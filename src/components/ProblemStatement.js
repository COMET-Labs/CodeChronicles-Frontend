import React from 'react';
import Card from 'react-bootstrap/Card';


function ProblemStatement() {
    return (
    <Card className="text-center"
    bg="dark"
    text="light">
        <Card.Header as="h1">Problem Statement</Card.Header>
        <Card.Body>
          <Card.Title as="h3">Virtual Functions</Card.Title>
          <Card.Text>
          Write Problem Statement Here
          </Card.Text>
        </Card.Body>    
        <Card.Footer className="text-muted">by Ishan Extreme</Card.Footer>
    </Card>
    );
}

export default ProblemStatement;