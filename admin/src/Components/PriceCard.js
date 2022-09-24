import React, {useEffect, useState} from 'react';
import FormInput from './FormInput';
import Axios from 'axios';
import ListItem from './ListItem';
import {AiOutlineDelete} from 'react-icons/ai';

const PriceCard = (props) =>
{
    const [planName, setPlanName] = useState('');
    const [planDescription, setPlanDescription] = useState('');
    const [planPrice, setPlanPrice] = useState('');
    const [planPriceCurrency, setPlanPriceCurrency] = useState('');

    const [elementValueList, setElementValueList] = useState([]);

    const submitAndReview = () => {

        Axios.put('http://localhost:3001/update/', {
            header: planName === '' ? elementValueList[0].value : planName,
            description : planDescription === '' ? elementValueList[1].value : planDescription,
            price : planPrice === '' ? elementValueList[2].value : planPrice,
            currency : planPriceCurrency === '' ? elementValueList[3].value : planPriceCurrency,
            headerElement: props.nameId,
            descriptionElement: props.descriptionId,
            priceElement: props.priceId,
            currencyElement: props.currencyId,
        });
        setElementValueList([...elementValueList, {
            planName : planName,
            planDescription: planDescription,
            planPrice: planPrice,
            planPriceCurrency: planPriceCurrency,
        },]);
    };

    useEffect( () => {
        Axios.get('http://localhost:3001/get',{
            params : {
                element: props.nameId.split('Name')[0] + "%",
            }
        }).then( (response) => {
            setElementValueList(response.data);
        })
    });

    const [openPlan, setOpenPlan] = useState(false);

    const openPlanSetting = () => {
        let plan = document.getElementById(props.nameId + "Button");
        if(openPlan) {
            plan.style.display = 'flex';
            plan.style.marginTop = '4rem';
        }
        else {
            plan.style.marginTop = '0rem';
            plan.style.display = 'none';
        }
        setOpenPlan(!openPlan);
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
        Axios.put('http://localhost:3001/update/', {
            header: ' ',
            description : ' ',
            price : ' ',
            currency : ' ',
            listItem1: ' ',
            listItem2: ' ',
            listItem3: ' ',
            listItem4: ' ',
            listItem5: ' ',
            listItem6: ' ',
            listItem7: ' ',
            listItem8: ' ',
            headerElement: props.nameId,
            descriptionElement: props.descriptionId,
            priceElement: props.priceId,
            currencyElement: props.currencyId,
            listItem1Id: props.item1,
            listItem2Id: props.item2,
            listItem3Id: props.item3,
            listItem4Id: props.item4,
            listItem5Id: props.item5,
            listItem6Id: props.item6,
            listItem7Id: props.item7,
            listItem8Id: props.item8,
        });
        setElementValueList([...elementValueList, {
            planName : ' ',
            planDescription: ' ',
            planPrice: ' ',
            planCurrency: ' ',
        },]);

        deleteFeatures();

        deleteScreen.style.display = 'none';
    }

    const deleteFeatures = () => {
        Axios.put('http://localhost:3001/update-list/', {
            listItem1: ' ',
            listItem2: ' ',
            listItem3: ' ',
            listItem4: ' ',
            listItem1Id: props.item1,
            listItem2Id: props.item2,
            listItem3Id: props.item3,
            listItem4Id: props.item4,
        });
    }

    window.onclick = function (event) {
        if(event.target === deleteScreen) {
            deleteScreen.style.display = 'none';
        }
    }

    return (
        <div>
            <button className="feature" onClick={openPlanSetting} >{ props.name }</button>
            <div className="flex-col price-card-list"  id={ props.nameId + "Button" }>
                <div className="flex price-card-form">

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
                        <FormInput type="text" label="Plan Name" id={props.nameId}
                                   onchange={(e) => setPlanName(e.target.value)} />

                        <FormInput type="text" label="Plan Description" id={props.descriptionId}
                                   onchange={(e) => setPlanDescription(e.target.value)} />

                        <FormInput type="text" label="Price" id={props.priceId}
                                   onchange={(e) => setPlanPrice(e.target.value)} />

                        <FormInput type="text" label="Currency" id={props.currencyId}
                                   onchange={(e) => setPlanPriceCurrency(e.target.value)} />

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
                            else if (val.element === props.priceId)
                                return (
                                    <h1 key={val.id} className="currentSubHeader" style={{ marginTop: '1rem' }}>
                                       Price: { val.value }
                                    </h1> )
                            else if (val.element === props.currencyId)
                                return (
                                    <p key={val.id} className="currentCurrency">
                                        Currency: { val.value }
                                    </p> )
                        })
                        }
                        <a className="showOnWebsite" target="_blank"
                           href={`https://samajabri.github.io/MrService/#Pricing`} >
                            Show on website
                        </a>
                    </div>
                </div>

                <ListItem item1={props.item1}
                          item2={props.item2}
                          item3={props.item3}
                          item4={props.item4}
                          display5="none"
                          display6="none"
                          display7="none"
                          display8="none"
                          header="Features"
                          element={props.element}
                />
            </div>
        </div>

    );
};

export default PriceCard;