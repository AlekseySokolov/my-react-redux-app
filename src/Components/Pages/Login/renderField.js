import React from 'react';
export const renderField = ({
                         input,
                         label,
                         type,
                         meta: { touched, error}
                     }) => (
    <div className='inputContainer'>
        <div>
            <input {...input} placeholder={label} type={type} className='loginInput' />
        </div>
        {touched &&
        ((error && <span className='error'>{error}</span>))}
    </div>
);