import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import ImageInput from '../Components/ImageInput';
import FormInput from '../Components/FormInput';
import ListItem from '../Components/ListItem';
import {useNavigate} from 'react-router-dom';

const Screenshot = (props) =>
{
    const [screenshotHeader, setScreenshotHeader] = useState('');
    const [screenshotSubHeader, setScreenshotSubHeader] = useState('');
    const [screenshotDescription, setScreenshotDescription] = useState('');

    const [elementValueList, setElementValueList] = useState([]);

    const submitAndReview = () => {

        Axios.put(`${props.requestPath}update/`, {
            header: screenshotHeader === '' ? elementValueList[8].value : screenshotHeader,
            subHeader : screenshotSubHeader === '' ? elementValueList[9].value : screenshotSubHeader,
            description : screenshotDescription === '' ? elementValueList[10].value : screenshotDescription,
            headerElement: 'screenshotHeader',
            subHeaderElement: 'screenshotSubHeader',
            descriptionElement: 'screenshotDescription',
        });
        setElementValueList([...elementValueList, {
            screenshotHeader : screenshotHeader,
            screenshotSubHeader: screenshotSubHeader,
            screenshotDescription: screenshotDescription,
        },]);
    };

    const navigate = useNavigate();

    useEffect( () => {
        Axios.get(`${props.requestPath}get`,{
            params : { element: 'screenshot%' }
        }).then( (response) => {
            setElementValueList(response.data);
        });
        if(localStorage.getItem("authenticated") === "false") {
            navigate("/");
        }
    });

    return (
        <div className="flex-col about">
            <h1 className="purple title">Screenshot</h1>
            <div className="flex forms">
                <form className="form" onSubmit={(event) => event.preventDefault()}>
                    <ImageInput id="screenshotImage" alt="Screenshot image" element="screenshotImage"
                                requestPath={props.requestPath} />

                    <FormInput label="Title" id="screenshotHeader" type="text"
                               onchange={(e) => {setScreenshotHeader(e.target.value)}}/>
                    <FormInput label="Sub Title" id="screenshotSubHeader" type="text"
                               onchange={(e) => {setScreenshotSubHeader(e.target.value)}}/>
                    <FormInput label="Description" id="screenshotDescription" type="textarea"
                               onchange={(e) => {setScreenshotDescription(e.target.value)}}/>

                    <button type="submit" onClick={submitAndReview} className="r-02 form-submit" >
                        Submit
                    </button>
                </form>

                <div className="flex-col r-02 currentInfo">
                    <h1>Current Values</h1>
                    <hr />
                    { elementValueList.map( (val) => {
                        if(val.element === 'screenshotHeader')
                            return (
                                <h2 key={ val.id } className="purple currentHeader">
                                    { val.value }
                                </h2> );
                        else if (val.element === 'screenshotSubHeader')
                            return (
                                <h1 key={ val.id } className="currentSubHeader">
                                    { val.value }
                                </h1> )
                        else if(val.element === 'screenshotDescription')
                            return (
                                <p key={val.id} className="currentDescription">
                                    { val.value }
                                </p> )
                        else if (val.element === 'screenshotImage')

                            return( <img key={val.id}
                                         src={`${process.env.PUBLIC_URL}/Images/${val.value}`}
                                         alt="Section Image" /> )

                    })
                    }
                    <a className="showOnWebsite" href="https://samajabri.github.io/MrService/#Screenshot" target="_blank">
                        Show on website
                    </a>
                </div>
            </div>

            <ListItem item1="screenshotListItemOne"
                      item2="screenshotListItemTwo"
                      item3="screenshotListItemThree"
                      item4="screenshotListItemFour"
                      item5="screenshotListItemFive"
                      item6="screenshotListItemSix"
                      item7="screenshotListItemSeven"
                      item8="screenshotListItemEight"
                      header="List items"
                      element="screenshotListItem%"
                      requestPath={props.requestPath}
            />

        </div>
    );
};

export default Screenshot;