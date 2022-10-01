import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import FormInput from '../Components/FormInput';
import {useNavigate} from 'react-router-dom';

const ContactUs = (props) =>
{
    const [contactHeader, setContactHeader] = useState('');
    const [contactSubHeader, setContactSubHeader] = useState('');
    const [contactDescription, setContactDescription] = useState('');

    const [elementValueList, setElementValueList] = useState([]);

    const submitAndReview = () => {

        Axios.put(`${props.requestPath}update/`, {
            header: contactHeader === '' ? elementValueList[0].value : contactHeader,
            subHeader : contactSubHeader === '' ? elementValueList[1].value : contactSubHeader,
            description : contactDescription === '' ? elementValueList[2].value : contactDescription,
            headerElement: 'contactHeader',
            subHeaderElement: 'contactSubHeader',
            descriptionElement: 'contactDescription',
        });
        setElementValueList([...elementValueList, {
            contactHeader : contactHeader,
            contactSubHeader: contactSubHeader,
            contactDescription: contactDescription,
        },]);
    };

    const navigate = useNavigate();

    useEffect( () => {
        Axios.get(`${props.requestPath}get`,{
            params : { element: 'contact%' }
        }).then( (response) => {
            setElementValueList(response.data);
        });
        if(localStorage.getItem("authenticated") === "false") {
            navigate("/");
        }
    });

    return (
        <div className="flex-col about">
            <h1 className="purple title">Contact Us</h1>
            <div className="flex forms">
                <form className="form" onSubmit={(event) => event.preventDefault()}>

                    <FormInput label="Title" id="contactHeader" type="text"
                               onchange={(e) => {setContactHeader(e.target.value)}}/>
                    <FormInput label="Sub Title" id="contactSubHeader" type="text"
                               onchange={(e) => {setContactSubHeader(e.target.value)}}/>
                    <FormInput label="Description" id="contactDescription" type="textarea"
                               onchange={(e) => {setContactDescription(e.target.value)}}/>

                    <button type="submit" onClick={submitAndReview} className="r-02 form-submit" >
                        Submit
                    </button>
                </form>

                <div className="flex-col r-02 currentInfo">
                    <h1>Current Values</h1>
                    <hr />
                    { elementValueList.map( (val) => {
                        if(val.element === 'contactHeader')
                            return (
                                <h2 key={ val.id } className="purple currentHeader">
                                    { val.value }
                                </h2> );
                        else if (val.element === 'contactSubHeader')
                            return (
                                <h1 key={ val.id } className="currentSubHeader">
                                    { val.value }
                                </h1> )
                        else if (val.element === 'contactDescription')
                            return (
                                <p key={val.id++} className="currentDescription">
                                    { val.value }
                                </p> )

                    })
                    }
                    <a className="showOnWebsite" href="https://samajabri.github.io/MrService/#Contact" target="_blank">
                        Show on website
                    </a>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;