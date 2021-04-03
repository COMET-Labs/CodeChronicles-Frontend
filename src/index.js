import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup';
import {BrowserRouter,  Route, Switch} from 'react-router-dom';

import EditorScreen from './screens/EditorScreen';
import EditorPropChoose from './components/EditorPropChoose';
import ProblemStatement from './components/ProblemStatement';

import authStorage from './auth/storage';
import AuthContext from './auth/context';

import App from './App';

ReactDOM.render(
  <EditorScreen/>
  ,
  
  document.getElementById('root')
);

reportWebVitals();
