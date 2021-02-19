import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function UserInput(props) {
    return (
    <Card className="text-center"
        bg="dark"
        text="light">
            <Card.Header as="h1">User Input</Card.Header>
            <Card.Body>
              <Card.Title as="h3">
              <Form.Group controlId="checkbox">
                <Form.Check type="checkbox" />
              </Form.Group>
              </Card.Title>
              <Card.Text>
              <InputGroup >
                <InputGroup.Prepend>
                
                </InputGroup.Prepend>
                <FormControl as="textarea" rows={6} aria-label="user-input" />
            </InputGroup>
              </Card.Text>
            </Card.Body>    
    </Card>
    );
}

export default UserInput;