import React, {useEffect, useState} from 'react';
import FormInput from '../Components/FormInput';
import Feature from '../Components/Feature';
import Axios from 'axios';
import {useNavigate} from 'react-router-dom';

const HowItWorks = () =>
{
    const [howItWorksHeader, setHowItWorksHeader] = useState('');
    const [howItWorksSubHeader, setHowItWorksSubHeader] = useState('');

    const [elementValueList, setElementValueList] = useState([]);

    const submitAndReview = () => {
        // const formData = new FormData();
        // formData.append("file", file);
        // formData.append("fileName", fileName);

        Axios.put('http://localhost:3001/update/', {
            header: howItWorksHeader === '' ? elementValueList[0].value : howItWorksHeader,
            subHeader : howItWorksSubHeader === '' ? elementValueList[1].value : howItWorksSubHeader,
            headerElement: 'howItWorksHeader',
            subHeaderElement: 'howItWorksSubHeader',
        });
        setElementValueList([...elementValueList, {
            howItWorksHeader : howItWorksHeader,
            howItWorksSubHeader: howItWorksSubHeader,
        },]);
    };

    const navigate = useNavigate();

    useEffect( () => {
        Axios.get('http://localhost:3001/get',{
            params : { element: 'howItWorks%' }
        }).then( (response) => {
            setElementValueList(response.data);
        });
        if(localStorage.getItem("authenticated") === "false") {
            navigate("/");
        }
    });

    return (
        <div className="flex-col how-it-works">
            <h1 className="purple title">How It Works</h1>
            <div className="flex forms">
                <form className="form" onSubmit={(event) => event.preventDefault()}>

                    <FormInput label="Title" id="howItWorksHeader" type="text"
                               onchange={(e) => {setHowItWorksHeader(e.target.value)}}/>
                    <FormInput label="Sub Title" id="howItWorksSubHeader" type="text"
                               onchange={(e) => {setHowItWorksSubHeader(e.target.value)}}/>

                    <button type="submit" onClick={submitAndReview} className="r-02 form-submit" >
                        Submit
                    </button>
                </form>

                <div className="flex-col r-02 currentInfo">
                    <h1>Current Values</h1>
                    <hr />
                    { elementValueList.map( (val) => {
                        if(val.element === 'howItWorksHeader')
                            return (
                                <h2 key={val.id} className="purple currentHeader">
                                    {val.value}
                                </h2> );
                        else if (val.element === 'howItWorksSubHeader')
                            return (
                                <h1 key={val.id} className="currentSubHeader">
                                    { val.value }
                                </h1> )
                        return(
                            <p key={val.id} >{ val.value }</p>
                        )
                    })
                    }
                    <a className="showOnWebsite" href="https://samajabri.github.io/MrService/#HowItWorks" target="_blank">
                        Show on website
                    </a>
                </div>
            </div>

            <div className="flex-col how-it-works-steps">
                <Feature name="Step One" getElement='_%Step%' link="#HowItWorks"
                         nameId="firstStepHeader" descriptionId="firstStepDescription"
                         imageId="firstStepImage"/>

                <Feature name="Step Two" getElement='_%Step%' link="#HowItWorks"
                         nameId="secondStepHeader" descriptionId="secondStepDescription"
                         imageId="secondStepImage"/>

                <Feature name="Step Three" getElement='_%Step%' link="#HowItWorks"
                         nameId="thirdStepHeader" descriptionId="thirdStepDescription"
                         imageId="thirdStepImage"/>

            </div>
        </div>
    );
};

export default HowItWorks;