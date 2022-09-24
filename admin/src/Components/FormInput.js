import React from 'react';

const FormInput = (props) =>
{
    let customTag;

    if(props.type === "textarea") {
        customTag =
            <textarea onChange={props.onchange}
                id={props.id} name={props.id} value={props.value} >
            </textarea>
    }
    else {
        customTag = <input onChange={props.onchange} required={props.required} style={{ display: props.display }}
            type={props.type} id={props.id} name={props.id} value={props.value} />
    }

    return (
        <div className="flex-col">
            <label className="purple" htmlFor={props.id}>{props.label}</label>
            { customTag }
        </div>
    );
};

export default FormInput;