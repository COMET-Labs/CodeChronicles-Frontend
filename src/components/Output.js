import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserInput from './UserInput';
import UserOutput from './UserOutput';
import UserOutPutScreen from '../screens/UserOutPutScreen';
import SubmitOutput from './SubmitOutput';



function Output({screen, onClick}) {

    const handleClick = ()=> {
      onClick(screen==="submit"?"user_output":"submit");
    }


    return (
    <Card className="text-center"
    bg="dark"
    text="light">
        <Card.Header as="h1">

        <Button variant="secondary"
        onClick={()=>handleClick()}>Switch Screen</Button>
        </Card.Header>
        
        <Card.Body>
          {screen==="submit"?
          <SubmitOutput/>:<UserOutPutScreen/>}
        </Card.Body>
        
        <Card.Footer className="text-muted">
          Output Screen
        </Card.Footer>
    </Card>
    );
}

export default Output;