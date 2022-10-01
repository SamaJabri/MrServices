import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import ImageInput from '../Components/ImageInput';
import FormInput from '../Components/FormInput';
import {useNavigate} from 'react-router-dom';

const Download = (props) =>
{
    const [downloadHeader, setDownloadHeader] = useState('');
    const [downloadSubHeader, setDownloadSubHeader] = useState('');
    const [downloadDescription, setDownloadDescription] = useState('');
    const [downloadGooglePlayLink, setDownloadGooglePlayLink] = useState('');
    const [downloadAppleStoreLink, setDownloadAppleStoreLink] = useState('');

    const [elementValueList, setElementValueList] = useState([]);

    const submitAndReview = () => {

        Axios.put(`${props.requestPath}update/`, {
            header: downloadHeader === '' ? elementValueList[0].value : downloadHeader,
            subHeader : downloadSubHeader === '' ? elementValueList[1].value : downloadSubHeader,
            description: downloadDescription === '' ? elementValueList[2].value : downloadDescription,
            linkOne : downloadGooglePlayLink === '' ? elementValueList[3].value : downloadGooglePlayLink,
            linkTwo : downloadAppleStoreLink === '' ? elementValueList[4].value : downloadAppleStoreLink,
            headerElement: 'downloadHeader',
            subHeaderElement: 'downloadSubHeader',
            descriptionElement: 'downloadDescription',
            linkOneElement : 'downloadGooglePlayLink',
            linkTwoElement : 'downloadAppleStoreLink',
        });
        setElementValueList([...elementValueList, {
            downloadHeader : downloadHeader,
            downloadSubHeader: downloadSubHeader,
            downloadDescription : downloadDescription,
            downloadGooglePlayLink : downloadGooglePlayLink,
            downloadAppleStoreLink : downloadAppleStoreLink,
        },]);
    };

    const navigate = useNavigate();

    useEffect( () => {
        Axios.get(`${props.requestPath}get`,{
            params : { element: 'download%' }
        }).then( (response) => {
            setElementValueList(response.data);
        });
        if(localStorage.getItem("authenticated") === "false") {
            navigate("/");
        }
    });

    return (
        <div className="flex-col download">
            <h1 className="purple title">Download</h1>
            <div className="flex forms">
                <form className="form">
                    <ImageInput id="downloadImage" alt="Download image" element="downloadImage"
                                requestPath={props.requestPath} />

                    <FormInput label="Title" id="downloadHeader" type="text"
                               onchange={(e) => {setDownloadHeader(e.target.value)}}/>
                    <FormInput label="Sub Title" id="downloadSubHeader" type="text"
                               onchange={(e) => {setDownloadSubHeader(e.target.value)}}/>
                    <FormInput label="Description" id="downloadDescription" type="textarea"
                               onchange={(e) => {setDownloadDescription(e.target.value)}}/>
                    <FormInput label="Google Play Link" id="downloadGooglePlayLink" type="text"
                               onchange={(e) => {setDownloadGooglePlayLink(e.target.value)}}/>
                    <FormInput label="Apple Store Link" id="downloadAppleStoreLink" type="text"
                               onchange={(e) => {setDownloadAppleStoreLink(e.target.value)}}/>

                    <button type="submit" onClick={submitAndReview} className="r-02 form-submit" >
                        Submit
                    </button>
                </form>

                <div className="flex-col r-02 currentInfo">
                    <h1>Current Values</h1>
                    <hr />
                    { elementValueList.map( (val) => {
                        if(val.element === 'downloadHeader')
                            return (
                                <h2 key={val.id} className="purple currentHeader">
                                    { val.value }
                                </h2> );
                        else if (val.element === 'downloadSubHeader')
                            return (
                                <h1 key={val.id} className="currentSubHeader">
                                    { val.value }
                                </h1> )
                        else if (val.element === 'downloadDescription')
                            return (
                                <p key={val.id} className="currentDescription">
                                    { val.value }
                                </p> )
                        else if (val.element === 'downloadGooglePlayLink')
                            return (
                                <a key={val.id} className="currentDownloadLink--header"
                                   href={val.value} target="_blank">
                                    - Google Play Download Link
                                </a> )
                        else if (val.element === 'downloadAppleStoreLink')
                            return (
                                <a key={val.id} className="currentDownloadLink--header"
                                   href={val.value} target="_blank">
                                   -  Apple Store Download Link
                                </a> )
                        else if (val.element === 'downloadImage')
                            return( <img key={val.id}
                                         src={`${process.env.PUBLIC_URL}/Images/${val.value}`}
                                         alt="Section Image" /> )
                        else
                            return(
                                <p key={val.id++} >No data Provided</p>
                            )
                    })
                    }
                    <a className="showOnWebsite" href="https://samajabri.github.io/MrService/#Download" target="_blank">
                        Show on website
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Download;