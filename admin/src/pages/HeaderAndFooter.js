import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import FormInput from '../Components/FormInput';
import ImageInput from '../Components/ImageInput';
import {useNavigate} from 'react-router-dom';

const HeaderAndFooter = (props) =>
{
    const [facebookLink, setFacebookLink] = useState('');
    const [twitterLink, setTwitterLink] = useState('');
    const [instagramLink, setInstagramLink] = useState('');
    const [linkedInLink, setLinkedInLink] = useState('');
    const [youtubeLink, setYoutubeLink] = useState('');

    const [elementValueList, setElementValueList] = useState([]);

    const [footerDescription, setFooterDescription] = useState('');
    const [footerAddress, setFooterAddress] = useState('');
    const [footerPhone, setFooterPhone] = useState('');
    const [footerEmail, setFooterEmail] = useState('');
    const [footerPrivacyPolicy, setFooterPrivacyPolicy] = useState('');
    const [footerTermsAndConditions, setFooterTermsAndConditions] = useState('');
    const [footerAddressLink, setFooterAddressLink] = useState('');

    const [footerValueList, setFooterValueList] = useState([]);
    const [headerValueList, setHeaderValueList] = useState([]);

    const submitAndReview = () => {

        Axios.put(`${props.requestPath}update/`, {
            linkOne: facebookLink === '' ? elementValueList[0].value : facebookLink,
            linkTwo: twitterLink === '' ? elementValueList[1].value : twitterLink,
            linkThree: instagramLink === '' ? elementValueList[2].value : instagramLink,
            linkFour: linkedInLink === '' ? elementValueList[3].value : linkedInLink,
            linkFive: youtubeLink === '' ? elementValueList[4].value : youtubeLink,
            linkOneElement : 'facebookLink',
            linkTwoElement : 'twitterLink',
            linkThreeElement : 'instagramLink',
            linkFourElement : 'linkedInLink',
            linkFiveElement : 'youtubeLink',
        });
        setElementValueList([...elementValueList, {
            facebookLink : facebookLink,
            twitterLink: twitterLink,
            instagramLink: instagramLink,
            linkedInLink: linkedInLink,
            youtubeLink: youtubeLink,
        },]);

        setFacebookLink('');
        setInstagramLink('');
        setLinkedInLink('');
        setTwitterLink('');
        setYoutubeLink('');
    };

    useEffect( () => {
        Axios.get(`${props.requestPath}get`,{
            params : { element: '%Link' }
        }).then( (response) => {
            setElementValueList(response.data);
        })
    });

    const submitAndReviewFooter = () => {

        Axios.put(`${props.requestPath}update/`, {
            description: footerDescription === '' ? footerValueList[0].value : footerDescription,
            linkOne: footerAddress === '' ? footerValueList[1].value : footerAddress,
            linkTwo: footerPhone === '' ? footerValueList[2].value : footerPhone,
            linkThree: footerEmail === '' ? footerValueList[3].value : footerEmail,
            linkFour: footerPrivacyPolicy === '' ? footerValueList[4].value : footerPrivacyPolicy,
            linkFive: footerTermsAndConditions === '' ? footerValueList[5].value : footerTermsAndConditions,
            linkSix: footerAddressLink === '' ? footerValueList[6].value : footerAddressLink,
            descriptionElement : 'footerDescription',
            linkOneElement : 'footerAddress',
            linkTwoElement : 'footerPhone',
            linkThreeElement : 'footerEmail',
            linkFourElement : 'footerPrivacyPolicy',
            linkFiveElement : 'footerTermsAndConditions',
            linkSixElement : 'footerAddressLink',
        });
        setFooterValueList([...footerValueList, {
            footerDescription : footerDescription,
            footerAddress: footerAddress,
            footerPhone: footerPhone,
            footerEmail: footerEmail,
            footerPrivacyPolicy: footerPrivacyPolicy,
            footerTermsAndConditions: footerTermsAndConditions,
            footerAddressLink: footerAddressLink,
        },]);
    };

    const navigate = useNavigate();

    useEffect( () => {
        Axios.get(`${props.requestPath}get`,{
            params : { element: 'footer%' }
        }).then( (response) => {
            setFooterValueList(response.data);
        });
        if(localStorage.getItem("authenticated") === "false") {
            navigate("/");
        }
    });

    useEffect( () => {
        Axios.get(`${props.requestPath}get`,{
            params : { element: 'header%' }
        }).then( (response) => {
            setHeaderValueList(response.data);
        });
    });

    return (
        <div className="flex-col about">
            <h1 className="purple title">Header & Footer</h1>
            <div className="flex forms">
                <form className="form" onSubmit={(event) => event.preventDefault()}>

                    <FormInput label="Facebook Link" id="facebookLink" type="text"
                               onchange={(e) => {setFacebookLink(e.target.value)}}/>
                    <FormInput label="Instagram Link" id="instagramLink" type="text"
                               onchange={(e) => {setInstagramLink(e.target.value)}}/>
                    <FormInput label="Twitter Link" id="twitterLink" type="text"
                               onchange={(e) => {setTwitterLink(e.target.value)}}/>
                    <FormInput label="LinkedIn Link" id="linkedInLink" type="text"
                               onchange={(e) => {setLinkedInLink(e.target.value)}}/>
                    <FormInput label="Youtube Link" id="youtubeLink" type="text"
                               onchange={(e) => {setYoutubeLink(e.target.value)}}/>

                    <button type="submit" onClick={submitAndReview} className="r-02 form-submit" >
                        Submit
                    </button>
                </form>

                <div className="flex-col r-02 currentInfo" style={{ lineBreak: 'anywhere' }}>
                    <h1>Current Values</h1>
                    <hr />
                    { elementValueList.map( (val) => {
                        if (val.element === 'facebookLink')
                            return (
                                <a key={val.id} className="currentDownloadLink--header"
                                   href={val.value} target="_blank">
                                    - Facebook Link
                                </a> )
                        else if (val.element === 'instagramLink')
                            return (
                                <a key={val.id} className="currentDownloadLink--header"
                                   href={val.value} target="_blank">
                                    - Instagram Link
                                </a> )
                        else if (val.element === 'twitterLink')
                            return (
                                <a key={val.id} className="currentDownloadLink--header"
                                   href={val.value} target="_blank">
                                    - Twitter Link
                                </a> )
                        else if (val.element === 'linkedInLink')
                            return (
                                <a key={val.id} className="currentDownloadLink--header"
                                   href={val.value} target="_blank">
                                    - LinkedIn Link
                                </a> )
                        else if (val.element === 'youtubeLink')
                            return (
                                <a key={val.id} className="currentDownloadLink--header"
                                   href={val.value} target="_blank">
                                    - Youtube Link
                                </a> )

                    })
                    }
                    <a className="showOnWebsite" href="https://samajabri.github.io/MrService/#Footer" target="_blank">
                        Show on website
                    </a>
                </div>
            </div>

            <h1 className="purple title">Footer</h1>

            <div className="flex forms">
                <form className="form" acceptCharset="utf-8"
                      onSubmit={(event) => event.preventDefault()}>

                    <ImageInput id="footerImage" alt="Logo" element="footerImage"
                                requestPath={props.requestPath} />

                    <FormInput label="Description" id="footerDescription" type="text"
                               onchange={(e) => {setFooterDescription(e.target.value)}}/>
                    <FormInput label="Address" id="footerAddress" type="text"
                               onchange={(e) => {setFooterAddress(e.target.value)}}/>
                    <FormInput label="Address Link on Google Maps" id="footerAddressLink" type="text"
                               onchange={(e) => {setFooterAddressLink(e.target.value)}}/>
                    <FormInput label="Phone" id="footerPhone" type="text"
                               onchange={(e) => {setFooterPhone(e.target.value)}}/>
                    <FormInput label="Email" id="footerEmail" type="email"
                               onchange={(e) => {setFooterEmail(e.target.value)}}/>
                    <FormInput label="Privacy Policy Link" id="footerPrivacyPolicy" type="text"
                               onchange={(e) => {setFooterPrivacyPolicy(e.target.value)}}/>
                    <FormInput label="Terms & Conditions Link" id="footerTermsAndConditions" type="text"
                               onchange={(e) => {setFooterTermsAndConditions(e.target.value)}}/>

                    <button type="submit" onClick={submitAndReviewFooter} className="r-02 form-submit" >
                        Submit
                    </button>
                </form>

                <div className="flex-col r-02 currentInfo" style={{ lineBreak: 'anywhere' }}>
                    <h1>Current Values</h1>
                    <hr />
                    { footerValueList.map( (val) => {
                        if (val.element === 'footerDescription')
                            return (
                                <p key={val.id} className="currentFooterValues">
                                    { val.value }
                                </p> )
                        else if (val.element === 'footerAddress')
                            return (
                                <a key={val.id} className="currentFooterValues">
                                    - <strong> Address : </strong>{val.value}
                                </a> )
                        else if (val.element === 'footerAddressLink')
                            return (
                                <a key={val.id} className="currentDownloadLink--header"
                                   href={val.value} target="_blank">
                                    - Address Google Maps Link
                                </a> )
                        else if (val.element === 'footerPhone')
                            return (
                                <a key={val.id} className="currentFooterValues">
                                    - <strong> Phone : </strong> { val.value }
                                </a> )
                        else if (val.element === 'footerEmail')
                            return (
                                <p key={val.id} className="currentFooterValues">
                                    - <strong> Email : </strong> { val.value }
                                </p> )
                        else if (val.element === 'footerPrivacyPolicy')
                            return (
                                <a key={val.id} className="currentDownloadLink--header"
                                   href={val.value} target="_blank">
                                    -  Privacy Policy Link
                                </a> )
                        else if (val.element === 'footerTermsAndConditions')
                            return (
                                <a key={val.id} className="currentDownloadLink--header"
                                   href={val.value} target="_blank">
                                    - Terms & Conditions Link
                                </a> )
                        else if (val.element === 'footerImage')
                            return( <img key={val.id} style={{ marginTop: '2rem' }}
                                         src={`${process.env.PUBLIC_URL}/Images/${val.value}`}
                                         alt="Section Image" /> )

                    })
                    }
                    <a className="showOnWebsite" href="https://samajabri.github.io/MrService/#Footer" target="_blank">
                        Show on website
                    </a>
                </div>
            </div>

            <h1 className="purple title">Header</h1>

            <div className="flex forms">
               <ImageInput id="headerImage" alt="Logo" element="headerImage"
                           requestPath={props.requestPath} />

                <div className="flex-col r-02 currentInfo">
                    <h1>Current Values</h1>
                    <hr />
                    { headerValueList.map( (val) => {
                        if (val.element === 'headerImage')
                            return( <img key={val.id} style={{ marginTop: '2rem' }}
                                         src={`${process.env.PUBLIC_URL}/Images/${val.value}`}
                                         alt="Section Image" /> )

                    })
                    }
                    <a className="showOnWebsite" href="https://samajabri.github.io/MrService/#" target="_blank">
                        Show on website
                    </a>
                </div>
            </div>

        </div>
    );
};

export default HeaderAndFooter;