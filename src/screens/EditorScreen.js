import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {animateScroll} from 'react-scroll';

import Header from '../components/Header';
import CodeEditor from '../components/CodeEditor';
import EditorPropChoose from '../components/EditorPropChoose';
import ProblemStatement from '../components/ProblemStatement';
import Output from '../components/Output';
import UserInput from '../components/UserInput';

import authStorage from '../auth/storage';
import AuthContext from '../auth/context';


function EditorScreen(props) {

    const [language, setLanguage]= useState("java");
    const [fontSize, setFontSize]= useState(25);
    const [theme, setTheme]= useState("Dark");
    const [screen, setScreen] = useState("submit");

    const [user, setUser] = useState();
    const restoreUser = ()=>{
        const user = authStorage.getUser();
        if(user){
        setUser(user);
        }
    };
    useEffect(()=>{
        restoreUser();
    });

    return (
        <AuthContext.Provider value={{user, setUser}}>
        <Header />
        <Container fluid className="mt-1">
            <Row>
                <Col className="mt-1" md={12} lg={6}>
                    <ProblemStatement />
                </Col>

                <Col md={12} lg={5} className="mt-1 mr-1">
                    <EditorPropChoose 
                    language={language} onLangChange={(lang)=> setLanguage(lang)}
                    fontSize={fontSize} onFontChange={(size)=> setFontSize(size)}
                    theme={theme} onThemeChange={(theme)=>setTheme(theme)}/>
                    
                    <CodeEditor language={language}
                    fontSize={fontSize} theme={theme}/>
                </Col>
               
            </Row>


            <Row className="justify-content-md-center">
                <Col className="mt-5" md={12} lg={5} lg={{offset:6, span:5}} >
                    <Output screen={screen} 
                    onClick={(type)=>{
                        setScreen(type);
                        animateScroll.scrollToBottom();
                        }}/>
                </Col>
            </Row>

        </Container>
        </AuthContext.Provider>

    );
}

export default EditorScreen;