import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function UserOutput(props) {
    return (
    <Card className="text-center"
        bg="dark"
        text="light">
            <Card.Header as="h1">User Output</Card.Header>
            <Card.Body>
              <Card.Title as="h3">
                <Button variant="info">Run</Button>
                <hr />

              </Card.Title>
              <Card.Text as="h4">
                <p>1 2 3</p>
              </Card.Text>
            </Card.Body>    
    </Card>
    );
}

export default UserOutput;