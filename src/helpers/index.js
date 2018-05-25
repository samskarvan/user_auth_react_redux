import React from 'react';

export function renderInput({input, label, type, meta:{error, touched}}=props){
    return(
        <div>
            <label className="grey-text text-darken-2">{label}</label>
            <input {...input} type={type ? type: 'text'}/>
            <p className="red-text text-darken-2">{touched&&error}</p>
        </div>
    )
}