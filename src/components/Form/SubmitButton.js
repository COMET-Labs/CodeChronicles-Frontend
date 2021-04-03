import React from 'react';
import {useFormikContext} from 'formik'

import Button from 'react-bootstrap/Button';

function SubmitButton({title}) {

    const {handleSubmit} = useFormikContext();

    return (
        <Button variant="primary" onClick={handleSubmit} block>{title}</Button>
    );
}

export default SubmitButton;