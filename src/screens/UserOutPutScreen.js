import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserInput from '../components/UserInput';
import UserOutput from '../components/UserOutput';
import fadeInUp from 'react-animations/lib/fade-in-up';
import Radium, {StyleRoot} from 'radium';

function UserOutPutScreen(props) {
    
    const styles = {
        fadeInUp: {
          animation: 'x 1s',
          animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
      }
    }
    return (
    <StyleRoot>
        <div style={styles.fadeInUp}>
        <Row>
            <Col xs={6}>
            <UserInput/>
            </Col>

            <Col xs={6}>
            <UserOutput />
            </Col>
        </Row>
        </div>
    </StyleRoot>
    );
}

export default UserOutPutScreen;