import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import FormInput from '../Components/FormInput';
import {useNavigate} from 'react-router-dom';

const Socials = () =>
{
    const [testimonialsHeader, setTestimonialsHeader] = useState('');
    const [testimonialsSubHeader, setTestimonialsSubHeader] = useState('');

    const [elementValueList, setElementValueList] = useState([]);

    const submitAndReview = () => {
        Axios.put('http://localhost:3001/update/',{
            header: testimonialsHeader === '' ? elementValueList[0].value : testimonialsHeader,
            subHeader : testimonialsSubHeader === '' ? elementValueList[1].value : testimonialsSubHeader,
            headerElement: 'testimonialsHeader',
            subHeaderElement: 'testimonialsSubHeader',
        });
        setElementValueList([...elementValueList, {
            testimonialsHeader : testimonialsHeader,
            testimonialsSubHeader: testimonialsSubHeader,

        },]);
    };

    const navigate = useNavigate();

    useEffect( () => {
        Axios.get('http://localhost:3001/get',{
            params : { element: 'testimonials%' }
        }).then( (response) => {
            setElementValueList(response.data);
        });
        if(localStorage.getItem("authenticated") === "false") {
            navigate("/");
        }
    });

    const updateFeed = () => {
        Axios.post('http://localhost:3001/update-posts')
        .then((r) => console.log(r));
    }

    return (
        <div className="flex-col about">
            <h1 className="purple title">Testimonials</h1>
            <div className="flex forms">
                <form className="form"
                      onSubmit={(event) => event.preventDefault()}>

                    <FormInput label="Title" id="testimonialsHeader" type="text"
                               onchange={(e) => {setTestimonialsHeader(e.target.value)}}/>
                    <FormInput label="Sub Title" id="testimonialsSubHeader" type="text"
                               onchange={(e) => {setTestimonialsSubHeader(e.target.value)}}/>


                    <button type="submit" onClick={submitAndReview} className="r-02 form-submit" >
                        Submit
                    </button>
                </form>

                <div className="flex-col r-02 currentInfo">
                    <h1>Current Values</h1>
                    <hr />
                    { elementValueList.map( (val) => {
                        if(val.element === 'testimonialsHeader')
                            return (
                                <h2 key={val.id} className="purple currentHeader">
                                    { val.value }
                                </h2> );
                        else if (val.element === 'testimonialsSubHeader')
                            return (
                                <h1 key={val.id} className="currentSubHeader">
                                    { val.value }
                                </h1> )
                    })
                    }
                    <a className="showOnWebsite" href="https://samajabri.github.io/MrService/#Review" target="_blank">
                        Show on website
                    </a>
                </div>

                <div className="updateFieldButton">
                    <button className="r-02 form-submit" onClick={ updateFeed }>Update feed</button>
                </div>
            </div>

        </div>

    );
};

export default Socials;