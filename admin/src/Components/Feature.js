import React, {useEffect, useState} from 'react';
import FormInput from './FormInput';
import Axios from 'axios';
import { AiOutlineDelete } from 'react-icons/ai';
import ImageInput from './ImageInput';

const Feature = (props) =>
{
    const [featureHeader, setFeatureHeader] = useState('');
    const [featureDescription, setFeatureDescription] = useState('');

    const [elementValueList, setElementValueList] = useState([]);

    const submitAndReview = () => {

        Axios.put(`${props.requestPath}update/`, {
            header: featureHeader === '' ? elementValueList[0].value : featureHeader,
            description : featureDescription === '' ? elementValueList[1].value : featureDescription,
            headerElement: props.nameId,
            descriptionElement: props.descriptionId,
        });
        setElementValueList([...elementValueList, {
            featureHeader : featureHeader,
            featureDescription: featureDescription,
        },]);
    };

    useEffect( () => {
        Axios.get(`${props.requestPath}get`,{
            params : { element: props.getElement }
        }).then( (response) => {
            setElementValueList(response.data);
        })
    });

    const [openFeature, setOpenFeature] = useState(false);

    const openFeatureSetting = () => {
        let feature = document.getElementById(props.nameId + "Button");
        if(openFeature) {
            feature.style.display = 'flex';
            feature.style.marginTop = '4rem';
        }
        else {
            feature.style.marginTop = '0rem';
            feature.style.display = 'none';
        }
        setOpenFeature(!openFeature);
    }

    const [openDelete, setOpenDelete] = useState(false);

    let deleteScreen = document.getElementById(props.nameId + "Delete");

    const closeDeleteScreen = () => {
        if(openDelete) {
            deleteScreen.style.display = 'none';
        }
        setOpenDelete(!openDelete);
    }

    const deleteInsertion = () => {
        Axios.put(`${props.requestPath}update/`, {
            header: ' ',
            description : ' ',
            headerElement: props.nameId,
            descriptionElement: props.descriptionId,
        });
        setElementValueList([...elementValueList, {
            featureHeader : ' ',
            featureDescription: ' ',
        },]);

        deleteScreen.style.display = 'none';
    }

    window.onclick = function (event) {
        if(event.target === deleteScreen) {
            deleteScreen.style.display = 'none';
        }
    }

    return (
        <div className="flex-col features-list">
            <button className="feature" onClick={openFeatureSetting}>{ props.name }</button>

            <div className="flex feature-form" id={props.nameId + "Button"}>

                <button className="purple delete-feature" onClick={ () => {
                    document.getElementById(props.nameId + "Delete").style.display = 'flex';
                    setOpenDelete(true);
                }
                }>
                    <AiOutlineDelete />
                </button>

                {
                    <div id={props.nameId + "Delete"} className="delete-popup">

                        <span className="helper" />
                        <div>

                            <div onClick={closeDeleteScreen} className="delete-popup close-button">&times;</div>

                            <p>Are you sure you want to delete this item?</p>
                            <br />
                            <p>The deleted item can't be retrieved</p>

                            <button className="r-02 form-submit" type="button"
                                    onClick={ deleteInsertion }>
                                Delete
                            </button>

                        </div>
                    </div>
                }

                <form className="form">

                    <ImageInput id={props.imageId} alt element={props.imageId} requestPath={props.requestPath} />

                    <FormInput label="Title" id={props.nameId} type="text"
                               onchange={(e) => { setFeatureHeader(e.target.value) }} />
                    <FormInput label="Description" id={props.descriptionId} type="textarea"
                               onchange={(e) => { setFeatureDescription(e.target.value) }} />

                    <button type="submit" onClick={submitAndReview} className="r-02 form-submit">
                        Submit
                    </button>
                </form>

                <div className="flex-col r-02 currentInfo">
                    { elementValueList.map( (val) => {
                        if(val.element === props.nameId)
                            return (
                                <h2 key={val.id} className="purple currentHeader">
                                    { val.value }
                                </h2> );
                        else if (val.element === props.descriptionId)
                            return (
                                <p key={val.id} className="currentDescription">
                                    { val.value }
                                </p> )
                    })
                    }
                    <a className="showOnWebsite" target="_blank"
                       href={`https://samajabri.github.io/MrService/${props.link}`} >
                        Show on website
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Feature;