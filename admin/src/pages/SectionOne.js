import React, {useEffect, useState} from 'react';
import FormInput from '../Components/FormInput';
import Axios from 'axios';
import ImageInput from '../Components/ImageInput';
import {useNavigate} from 'react-router-dom';


function SectionOne (props)
{
    const [sectionOneHeader, setSectionOneHeader] = useState('');
    const [sectionOneDescription, setSectionOneDescription] = useState('');
    const [sectionOneSearch, setSectionOneSearch] = useState('');

    const [elementValueList, setElementValueList] = useState([]);

    const submitAndReview = () => {

        Axios.put('http://localhost:3001/update/', {
            header: sectionOneHeader === '' ? elementValueList[1].value : sectionOneHeader,
            description: sectionOneDescription === '' ? elementValueList[2].value : sectionOneDescription,
            search : sectionOneSearch === '' ? elementValueList[3].value : sectionOneSearch,
            headerElement: 'sectionOneHeader',
            descriptionElement: 'sectionOneDescription',
            searchElement: 'sectionOneSearch',
        });
        setElementValueList([...elementValueList, {
            sectionOneHeader : sectionOneHeader,
            sectionOneDescription : sectionOneDescription,
            sectionOneSearch: sectionOneSearch,
        },]);
    };

    const navigate = useNavigate();

    useEffect( () => {

        Axios.get('http://localhost:3001/get',{
        params : { element: 'sectionOne%' }
        }).then( (response) => {
            setElementValueList(response.data);
        });
        if(localStorage.getItem("authenticated") === "false") {
            navigate("/");
        }
    });


    return (
        <div className="flex-col section-one" style={{ marginLeft: props.margin }}>
            <h1 className="purple title">Section One</h1>
            <div className="flex forms">
                <form className="form" onSubmit={(event) => event.preventDefault()}>
                    <ImageInput id="sectionOneImage" alt="Section One image"
                                element="sectionOneImage"
                    />

                    <FormInput label="Title" id="sectionOneHeader" type="text"
                               onchange={(e) => {setSectionOneHeader(e.target.value)}}/>
                    <FormInput label="Description" id="sectionOneDescription" type="textarea"
                               onchange={(e) => {setSectionOneDescription(e.target.value)}}/>
                    <FormInput label="Search bar" id="sectionOneSearch" type="text"
                               onchange={(e) => {setSectionOneSearch(e.target.value)}}/>

                    <button type="submit" onClick={submitAndReview} className="r-02 form-submit" >
                        Submit
                    </button>
                </form>

                <div className="flex-col r-02 currentInfo">
                    <h1>Current Values</h1>
                    <hr />
                    { elementValueList.map( (val) => {
                        if(val.element === 'sectionOneHeader')
                            return (
                                <h1 key={val.id} className="purple currentHeader">
                                    { val.value }
                                </h1> );
                        else if (val.element === 'sectionOneDescription')
                            return (
                                <p key={val.id} className="currentDescription">
                                    { val.value }
                                </p> )
                        if (val.element === 'sectionOneImage')
                            return( <img key={val.id} style={{ marginTop: '2rem' }}
                                         src={`${process.env.PUBLIC_URL}/Images/${val.value}`}
                                         alt="Section Image" /> )
                        return(
                            <p key={val.id}>{ val.value }</p>
                        )

                    })
                    }
                    <a className="showOnWebsite" href="https://samajabri.github.io/MrService/#" target="_blank">
                        Show on website
                    </a>
                </div>
            </div>



                {/*<form method="post">*/}
                {/*    <FormInput label="Title" id="SectionOneHeader" type="text" />*/}
                {/*    <FormInput label="Description" id="SectionOneDescription" type="textarea" />*/}
                {/*</form>*/}
        </div>
    );
}

export default SectionOne;