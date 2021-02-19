import React from 'react';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

import '../config/css/option.css';

function EditorPropChoose({language, theme, 
    fontSize, onLangChange, onFontChange, onThemeChange}) {
    
    return (
    <ButtonToolbar aria-label="Toolbar with button groups" className="option-container mr-2">
      <ButtonGroup className="mr-5 ml-5">
        <Button variant="dark" disabled>Languages:</Button>
        <DropdownButton variant="dark" title={language}
                onSelect={onLangChange}>
                  <Dropdown.Item eventKey="java">java</Dropdown.Item>
                  <Dropdown.Item eventKey="python">python</Dropdown.Item>
                  <Dropdown.Item eventKey="c_cpp">c_cpp</Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>

      <ButtonGroup className="mr-5">
        <Button variant="dark" disabled>Font Size:</Button>
        <Button variant="dark" onClick={() => onFontChange(fontSize-1)}>-</Button>
        <Button variant="dark" disabled>{fontSize}</Button>
        <Button variant="dark" onClick={() => onFontChange(fontSize+1)}>+</Button>
        
      </ButtonGroup>

      <ButtonGroup >
        <Button variant="dark" disabled>Themes:</Button>
        <DropdownButton variant="dark" title={theme}
                onSelect={onThemeChange}>
            <Dropdown.Item eventKey="Dark">Dark</Dropdown.Item>
            <Dropdown.Item eventKey="Light">Light</Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>
     
    </ButtonToolbar>
    );
}

export default EditorPropChoose;