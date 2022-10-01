import React, {useEffect, useState} from 'react';
import FormInput from '../Components/FormInput';
import Axios from 'axios';
import Feature from '../Components/Feature';
import {useNavigate} from 'react-router-dom';

const Features = (props) =>
{
    const [featuresHeader, setFeaturesHeader] = useState('');
    const [featuresSubHeader, setFeaturesSubHeader] = useState('');

    const [elementValueList, setElementValueList] = useState([]);

    const submitAndReview = () => {

        Axios.put(`${props.requestPath}update/`, {
            header: featuresHeader === '' ? elementValueList[0].value : featuresHeader,
            subHeader : featuresSubHeader === '' ? elementValueList[1].value : featuresSubHeader,
            headerElement: 'featuresHeader',
            subHeaderElement: 'featuresSubHeader',
        });
        setElementValueList([...elementValueList, {
            featuresHeader : featuresHeader,
            featuresSubHeader: featuresSubHeader,
        },]);
    };

    const navigate = useNavigate();

    useEffect( () => {
        Axios.get(`${props.requestPath}get`,{
            params : { element: 'features%' }
        }).then( (response) => {
            setElementValueList(response.data);
        });
        if(localStorage.getItem("authenticated") === "false") {
            navigate("/");
        }
    });

    return (
        <div className="flex-col features">
            <h1 className="purple title">Features</h1>
            <div className="flex forms">
                <form className="form" onSubmit={(event) => event.preventDefault()}>

                    <FormInput label="Title" id="featuresHeader" type="text"
                               onchange={(e) => {setFeaturesHeader(e.target.value)}}/>
                    <FormInput label="Sub Title" id="featuresSubHeader" type="text"
                               onchange={(e) => {setFeaturesSubHeader(e.target.value)}}/>

                    <button type="submit" onClick={submitAndReview} className="r-02 form-submit" >
                        Submit
                    </button>
                </form>

                <div className="flex-col r-02 currentInfo">
                    <h1>Current Values</h1>
                    <hr />
                    { elementValueList.map( (val) => {
                        if(val.element.endsWith('sHeader'))
                            return (
                                <h2 key={val.id} className="purple currentHeader">
                                    {val.value}
                                </h2> );
                        else if (val.element.endsWith('SubHeader'))
                            return (
                                <h1 key={val.id} className="currentSubHeader">
                                    { val.value }
                                </h1> )
                        return(
                            <p key={val.id} >{ val.value }</p>
                        )
                    })
                    }
                    <a className="showOnWebsite" href="https://samajabri.github.io/MrService/#Feature" target="_blank">
                        Show on website
                    </a>
                </div>
            </div>

            <div className="flex-col features-list">
                <Feature name="Feature One" getElement='_%Feature%' link="#Feature"
                    nameId="firstFeatureHeader" descriptionId="firstFeatureDescription"
                    imageId="firstFeatureImage" requestPath={props.requestPath} />

                <Feature name="Feature Two" getElement='_%Feature%' link="#Feature"
                         nameId="secondFeatureHeader" descriptionId="secondFeatureDescription"
                         imageId="secondFeatureImage" requestPath={props.requestPath} />

                <Feature name="Feature Three" getElement='_%Feature%' link="#Feature"
                         nameId="thirdFeatureHeader" descriptionId="thirdFeatureDescription"
                         imageId="thirdFeatureImage" requestPath={props.requestPath} />

                <Feature name="Feature Four" getElement='_%Feature%' link="#Feature"
                         nameId="fourthFeatureHeader" descriptionId="fourthFeatureDescription"
                         imageId="fourthFeatureImage" requestPath={props.requestPath} />

                <Feature name="Feature Five" getElement='_%Feature%' link="#Feature"
                         nameId="fifthFeatureHeader" descriptionId="fifthFeatureDescription"
                         imageId="fifthFeatureImage" requestPath={props.requestPath} />

                <Feature name="Feature Six" getElement='_%Feature%' link="#Feature"
                         nameId="sixthFeatureHeader" descriptionId="sixthFeatureDescription"
                         imageId="sixthFeatureImage" requestPath={props.requestPath} />

            </div>

        </div>
    );
};

export default Features;