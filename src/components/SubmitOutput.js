import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import fadeInUp from 'react-animations/lib/fade-in-up';
import Radium, {StyleRoot} from 'radium';

function SubmitOutput(props) {

    const styles = {
        fadeInUp: {
          animation: 'x 1s',
          animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
      }
    }
    return (
    <StyleRoot>
        <div style={styles.fadeInUp}>
            <Card className="text-center"
                bg="dark"
                text="light">
                    <Button variant="success">Submit</Button>
                    <Card.Body>
                    <Card.Text as="h4">
                        <p style={{color:"green"}}>Success</p>
                    </Card.Text>
                    </Card.Body>    
            </Card>
        </div>
    </StyleRoot>
    );
}

export default SubmitOutput;