import React from 'react';
import {useFormikContext} from 'formik';

import ErrorMessage from './ErrorMessage';

function AppFormField({name, width ,...otherProps}) {

    const {setFieldTouched, setFieldValue, errors, touched, values} = useFormikContext();
    return (
        <>
        <div className="form-group">
            <input
             className="form-control"
             onChange={event => setFieldValue(name, event.target.value)}
             value = {values[name]}
             onBlur={()=>setFieldTouched(name)}
             {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </div>
        </>
    );
}

export default AppFormField;