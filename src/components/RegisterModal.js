import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import * as Yup from 'yup';

import '../config/css/header.css';
import AppForm from './Form/AppForm';
import ErrorMessage from './Form/ErrorMessage';
import AppFormField from './Form/AppFormField';
import SubmitButton from './Form/SubmitButton';
import SocialTray from './SocialTray';

import userApi from '../api/user';
import useApi from '../hooks/useApi';
import useAuth from '../auth/useAuth';
import authApi from '../api/auth';

const validationSchemaLogin = Yup.object().shape({
    email: Yup.string().required().email().max(255).label("Email"),
    password: Yup.string().required().max(255).label("Password")
});

const validationSchemaRegister = Yup.object().shape({
    name: Yup.string().required().min(4).max(255).label("Name"),
    email: Yup.string().required().email().max(255).label("Email"),
    password: Yup.string().required().max(255)
    .matches(/.*\d/,"Password should contain atleast one digit")
    .matches(/.*[@$!%*?&]/,"Password should contain atleast one special character")
    .matches(/[A-Za-z\d@$!%*?&]{8,}/,"Password must contain atleast 8 characters")
    .label("Password")
});

function RegisterModal({loginShow, setLoginShow, registerShow, setRegisterShow}) {

    const registerApi = useApi(userApi.register);
    const loginApi = useApi(authApi.login);
    const auth = useAuth();
    const [error, setError] = useState();

    const handleSubmitLogin = async (userInfo)=>{
        const result = await loginApi.request(userInfo);

        if(!result.ok){

            if(result.data) setError(result.data.error);
            else {
                    if(result.headers.error) setError(result.headers.error);
                    // unknown error
                    else setError("An unexpected error occurred.");
            }
            return;
        }
        auth.login(result.data.token);
        setLoginShow(false);
        
    }

    const handleSubmitRegister = async (userInfo)=>{
        
        const result = await registerApi.request(userInfo);
        if(!result.ok){

            if(result.data) setError(result.data.error);
            else {
                    if(result.headers.error) setError(result.headers.error);
                    // unknown error
                    else setError("An unexpected error occurred.");
            }
            return;
        }
        auth.login(result.data.token);
        setRegisterShow(false);
    }

    return (
        <>
        {/* Login Modal */}
        <Modal show={loginShow} onHide={setLoginShow} centered>
            <Modal.Header closeButton>
                <Modal.Title className="ml-auto">Login</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <SocialTray />
                <AppForm
                initialValues={{email:"", password:""}}
                onSubmit={handleSubmitLogin}
                validationSchema={validationSchemaLogin}
                >
                    <ErrorMessage error={error} visible={error} style={{textAlign:'center'}} />
                    <AppFormField
                    name="email" 
                    type="email"
                    placeholder="Email"
                    />

                    <AppFormField
                    name="password"
                    placeholder="Password"
                    type="password"
                    />

                    <SubmitButton title="Login"/>
                </AppForm>
            </Modal.Body>

            <Modal.Footer>
                <p>Don't have an Account?</p>
                <Button variant="primary" onClick={setRegisterShow}>SignUp</Button>
            </Modal.Footer>
        </Modal>

        {/* Register Modal */}
        <Modal show={registerShow} onHide={setRegisterShow} centered>
            <Modal.Header closeButton>
                <Modal.Title className="ml-auto">Register</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <SocialTray />

            <AppForm
                initialValues={{name:'', email:'', password:''}}
                onSubmit={handleSubmitRegister}
                validationSchema={validationSchemaRegister}
                >
                    <ErrorMessage error={error} visible={error} style={{textAlign:'center'}} />
                    
                    <AppFormField
                    name="name" 
                    placeholder="User Name"
                    />

                    <AppFormField
                    name="email" 
                    type="email"
                    placeholder="Email"
                    />

                    <AppFormField
                    name="password"
                    placeholder="Password"
                    type="password"
                    />

                    <SubmitButton title="Register"/>
                </AppForm>
            </Modal.Body>

            <Modal.Footer>
                <p>Already have an Account?</p>
                <Button variant="primary" onClick={setLoginShow}>SignIn</Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default RegisterModal;