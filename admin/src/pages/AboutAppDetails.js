import React, {useEffect, useState} from 'react';
import ImageInput from '../Components/ImageInput';
import Axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {useNavigate} from 'react-router-dom';

const AboutAppDetails = () =>
{
    const [aboutDetailsDescription, setAboutAppDetailsDescription] = useState('');

    const [elementValueList, setElementValueList] = useState([]);

    const submitAndReview = () => {

        Axios.put('http://localhost:3001/update/', {
            description: aboutDetailsDescription === '' ? elementValueList[2].value : aboutDetailsDescription,
            descriptionElement: 'aboutDetailsDescription',
        });
        setElementValueList([...elementValueList, {
            aboutDetailsDescription : aboutDetailsDescription,
        },]);
    };

    const navigate = useNavigate();

    useEffect( () => {
        Axios.get('http://localhost:3001/get',{
            params : { element: 'aboutDetails%' }
        }).then( (response) => {
            setElementValueList(response.data);
        });
        if(localStorage.getItem("authenticated") === "false") {
            navigate("/");
        }
    });

    return (
        <div className="flex-col about">
            <h1 className="purple title">About App Page</h1>
            <div className="flex forms" style={{ width: '100%', height: '100vh' }}>
                <form className="flex-col form" encType="multipart/form-data"
                      style={{ height: '60rem', width: '80%', justifyContent: 'flex-start' }}
                      onSubmit={(event) => event.preventDefault()}>
                    <ImageInput id="aboutDetailsImage" alt="About app details image"
                                element="aboutDetailsImage" style={{ width: '45%'}}
                    />

                    {/*<FormInput label="Description" id="aboutDetailsDescription" type="textarea"*/}
                    {/*           onchange={(e) => {setAboutAppDetailsDescription(e.target.value)}}/>*/}

                    <ReactQuill onChange={setAboutAppDetailsDescription} style={{ height: '55rem', width:'100%', }}
                    placeholder="Write Description..."/>

                    <button type="submit" onClick={submitAndReview} className="r-02 form-submit"
                    style={{ marginTop: '5rem', width: '20%' }}>
                        Submit
                    </button>
                </form>

                {/*<div className="flex-col r-02 currentInfo">*/}
                {/*    <h1>Current Value</h1>*/}
                {/*    <hr />*/}
                {/*    { elementValueList.map( (val) => {*/}
                {/*        // if(val.element === 'aboutDetailsDescription')*/}
                {/*        //     return (*/}
                {/*        //         <p key={val.id++}>*/}
                {/*        //             { val.value }*/}
                {/*        //         </p> );*/}
                {/*        //*/}
                {/*        // else if (val.element === 'aboutImage')*/}
                {/*        //     return( <img key={val.id++} src={ val.value } alt="Section Image" /> )*/}
                {/*        return (*/}
                {/*            <div>*/}
                {/*                {val.value}*/}
                {/*            </div>*/}
                {/*        )*/}

                {/*    })*/}
                {/*    }*/}
                {/*    <a className="showOnWebsite" href="https://samajabri.github.io/MrService/AboutApp.html" target="_blank">*/}
                {/*        Show on website*/}
                {/*    </a>*/}
                {/*</div>*/}
            </div>

        </div>
    );
};

export default AboutAppDetails;