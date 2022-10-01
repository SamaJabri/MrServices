import React, {useEffect, useState} from 'react';
import ImageInput from '../Components/ImageInput';
import FormInput from '../Components/FormInput';
import Axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const AboutApp = (props) =>
{
    const [aboutHeader, setAboutHeader] = useState('');
    const [aboutSubHeader, setAboutSubHeader] = useState('');
    const [aboutDescription, setAboutDescription] = useState('');
    const [aboutInstallations, setAboutInstallations] = useState('');

    const [elementValueList, setElementValueList] = useState([]);

    const submitAndReview = () => {
        Axios.put(`${props.requestPath}update/`,{
            header: aboutHeader === '' ? elementValueList[1].value : aboutHeader,
            subHeader : aboutSubHeader === '' ? elementValueList[2].value : aboutSubHeader,
            description: aboutDescription === '' ? elementValueList[3].value : aboutDescription,
            installations : aboutInstallations === '' ? elementValueList[4].value : aboutInstallations,
            headerElement: 'aboutHeader',
            subHeaderElement: 'aboutSubHeader',
            descriptionElement: 'aboutDescription',
            installationsElement : 'aboutInstallations',
        });
        setElementValueList([...elementValueList, {
            aboutHeader : aboutHeader,
            aboutSubHeader: aboutSubHeader,
            aboutDescription : aboutDescription,
            aboutInstallations : aboutInstallations,
        },]);
    };

    const navigate = useNavigate();

    useEffect( () => {
        Axios.get(`${props.requestPath}get/`,{
            params : { element: 'about%' }
        }).then( (response) => {
            setElementValueList(response.data);
        });
        if(localStorage.getItem("authenticated") === "false") {
            navigate("/");
        }
    });

    return (
        <div className="flex-col about">
            <h1 className="purple title">About App</h1>
            <div className="flex forms">
                <form className="form"
                      onSubmit={(event) => event.preventDefault()}>
                    <ImageInput id="aboutImage" alt="About app image" element="aboutImage"
                                requestPath={props.requestPath} />

                    <FormInput label="Title" id="aboutHeader" type="text"
                               onchange={(e) => {setAboutHeader(e.target.value)}}/>
                    <FormInput label="Sub Title" id="aboutSubHeader" type="text"
                               onchange={(e) => {setAboutSubHeader(e.target.value)}}/>
                    <FormInput label="Description" id="aboutDescription" type="textarea"
                               onchange={(e) => {setAboutDescription(e.target.value)}}/>
                    <FormInput label="Active Installs" id="aboutInstallations" type="text"
                               onchange={(e) => {setAboutInstallations(e.target.value)}}/>


                    <button type="submit" onClick={submitAndReview} className="r-02 form-submit" >
                        Submit
                    </button>
                </form>

                <div className="flex-col r-02 currentInfo">
                    <h1>Current Values</h1>
                    <hr />
                    { elementValueList.map( (val) => {
                        if(val.element === 'aboutHeader')
                            return (
                                <h2 key={val.id} className="purple currentHeader">
                                    { val.value }
                                </h2> );
                        else if (val.element === 'aboutSubHeader')
                            return (
                                <h1 key={val.id} className="currentSubHeader">
                                    { val.value }
                                </h1> )
                        else if (val.element === 'aboutDescription')
                            return (
                                <p key={val.id} className="currentDescription">
                                    { val.value }
                                </p> )
                        else if (val.element === 'aboutInstallations')
                            return (
                                <h3 key={val.id} className="currentInstallations">
                                    { val.value }
                                </h3> )
                        else if (val.element === 'aboutImage')

                            return( <img key={val.id}
                                         src={`${process.env.PUBLIC_URL}/Images/${val.value}`}
                                         alt="Section Image" /> )
                    })
                    }
                    <a className="showOnWebsite" href="https://samajabri.github.io/MrService/#About" target="_blank">
                        Show on website
                    </a>
                </div>

                <div className="aboutDetailsButton">
                    <Link to="/home/about-details">
                        <button className="r-02 form-submit" >Show Details Page</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default AboutApp;