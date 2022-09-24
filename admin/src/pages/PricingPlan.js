import React, {useEffect, useState} from 'react';
import FormInput from '../Components/FormInput';
import Axios from 'axios';
import PriceCard from '../Components/PriceCard';
import {useNavigate} from 'react-router-dom';

const PricingPlan = () =>
{
    const [pricingPlanHeader, setPricingPlanHeader] = useState('');
    const [pricingPlanSubHeader, setPricingPlanSubHeader] = useState('');

    const [elementValueList, setElementValueList] = useState([]);

    const submitAndReview = () => {

        Axios.put('http://localhost:3001/update/', {
            header: pricingPlanHeader === '' ? elementValueList[0].value : pricingPlanHeader,
            subHeader : pricingPlanSubHeader === '' ? elementValueList[1].value : pricingPlanSubHeader,
            headerElement: 'pricingPlanHeader',
            subHeaderElement: 'pricingPlanSubHeader',
        });
        setElementValueList([...elementValueList, {
            pricingPlanHeader : pricingPlanHeader,
            pricingPlanSubHeader: pricingPlanSubHeader,
        },]);
    };

    const navigate = useNavigate();

    useEffect( () => {
        Axios.get('http://localhost:3001/get',{
            params : { element: 'pricingPlan%' }
        }).then( (response) => {
            setElementValueList(response.data);
        });
        if(localStorage.getItem("authenticated") === "false") {
            navigate("/");
        }
    });

    const [comingSoon, setComingSoon] = useState('');

    const comingSoonValue = () => {

        Axios.put('http://localhost:3001/update/', {
            header: comingSoon,
            headerElement: 'comingSoon',
        });
    };


    return (
        <div className="flex-col how-it-works">
            <h1 className="purple title">Pricing Plan</h1>
            <label className="coming-soon">
                <input type="checkbox" className="coming-soon__input"
                       onClick={(event => {
                           setComingSoon(event.target.checked.toString());
                           comingSoonValue();
                       })} />
                <span className="slider round"></span>
                Coming Soon
            </label>
            {/*<button className="coming-soon">Coming Soon</button>*/}
            <div className="flex forms">
                <form className="form" onSubmit={(event) => event.preventDefault()}>

                    <FormInput label="Title" id="pricingPlanHeader" type="text"
                               onchange={(e) => {setPricingPlanHeader(e.target.value)}}/>
                    <FormInput label="Sub Title" id="pricingPlanSubHeader" type="text"
                               onchange={(e) => {setPricingPlanSubHeader(e.target.value)}}/>

                    <button type="submit" onClick={submitAndReview} className="r-02 form-submit" >
                        Submit
                    </button>
                </form>

                <div className="flex-col r-02 currentInfo">
                    <h1>Current Values</h1>
                    <hr />
                    { elementValueList.map( (val) => {
                        if(val.element === 'pricingPlanHeader')
                            return (
                                <h2 key={val.id} className="purple currentHeader">
                                    {val.value}
                                </h2> );
                        else if (val.element === 'pricingPlanSubHeader')
                            return (
                                <h1 key={val.id} className="currentSubHeader">
                                    { val.value }
                                </h1> )
                    })
                    }
                    <a className="showOnWebsite" href="https://samajabri.github.io/MrService/#Pricing" target="_blank">
                        Show on website
                    </a>
                </div>
            </div>

            <div className="flex switch-plans-buttons">
                <button className="r-02 form-submit" id="monthly-button"
                onClick={() => {
                    document.getElementById('pricing-plans-monthly').style.display = "flex";
                    document.getElementById('pricing-plans-yearly').style.display = "none";
                    document.getElementById('monthly-button').style.backgroundColor = '#6267DB';
                    document.getElementById('yearly-button').style.backgroundColor = 'var(--purple)';
                }}>
                    Monthly
                </button>

                <button className="r-02 form-submit" id="yearly-button"
                onClick={() => {
                    document.getElementById('pricing-plans-yearly').style.display = "flex";
                    document.getElementById('pricing-plans-monthly').style.display = "none";
                    document.getElementById('monthly-button').style.backgroundColor = 'var(--purple)';
                    document.getElementById('yearly-button').style.backgroundColor = '#6267DB';
                }}>
                    Yearly
                </button>
            </div>

            <div className="flex-col pricing-plans-monthly" id="pricing-plans-monthly">
                <PriceCard name="Plan One" nameId="firstPlanNameMonthly" descriptionId="firstPlanDescriptionMonthly"
                            priceId="firstPlanPriceMonthly" currencyId="firstPlanCurrencyMonthly"
                            item1="firstPlanItem1Monthly" item2="firstPlanItem2Monthly" item3="firstPlanItem3Monthly"
                            item4="firstPlanItem4Monthly" item5="firstPlanItem5Monthly" item6="firstPlanItem6Monthly"
                            item7="firstPlanItem7Monthly" item8="firstPlanItem8Monthly" element="firstPlanItem_Monthly" />

                <PriceCard name="Plan Two" nameId="secondPlanNameMonthly" descriptionId="secondPlanDescriptionMonthly"
                           priceId="secondPlanPriceMonthly" currencyId="secondPlanCurrencyMonthly"
                           item1="secondPlanItem1Monthly" item2="secondPlanItem2Monthly" item3="secondPlanItem3Monthly"
                           item4="secondPlanItem4Monthly" item5="secondPlanItem5Monthly" item6="secondPlanItem6Monthly"
                           item7="secondPlanItem7Monthly" item8="secondPlanItem8Monthly" element="secondPlanItem_Monthly"/>

                <PriceCard name="Plan Three" nameId="thirdPlanNameMonthly" descriptionId="thirdPlanDescriptionMonthly"
                           priceId="thirdPlanPriceMonthly" currencyId="thirdPlanCurrencyMonthly"
                           item1="thirdPlanItem1Monthly" item2="thirdPlanItem2Monthly" item3="thirdPlanItem3Monthly"
                           item4="thirdPlanItem4Monthly" item5="thirdPlanItem5Monthly" item6="thirdPlanItem6Monthly"
                           item7="thirdPlanItem7Monthly" item8="thirdPlanItem8Monthly" element="thirdPlanItem_Monthly" />
            </div>

            <div className="flex-col pricing-plans-yearly" id="pricing-plans-yearly">
                <PriceCard name="Plan One" nameId="firstPlanNameYearly" descriptionId="firstPlanDescriptionYearly"
                           priceId="firstPlanPriceYearly" currencyId="firstPlanCurrencyYearly"
                           item1="firstPlanItem1Yearly" item2="firstPlanItem2Yearly" item3="firstPlanItem3Yearly"
                           item4="firstPlanItem4Yearly" item5="firstPlanItem5Yearly" item6="firstPlanItem6Yearly"
                           item7="firstPlanItem7Yearly" item8="firstPlanItem8Yearly" element="firstPlanItem_Yearly"
                />

                <PriceCard name="Plan Two" nameId="secondPlanNameYearly" descriptionId="secondPlanDescriptionYearly"
                           priceId="secondPlanPriceYearly" currencyId="secondPlanCurrencyYearly"
                           item1="secondPlanItem1Yearly" item2="secondPlanItem2Yearly" item3="secondPlanItem3Yearly"
                           item4="secondPlanItem4Yearly" item5="secondPlanItem5Yearly" item6="secondPlanItem6Yearly"
                           item7="secondPlanItem7Yearly" item8="secondPlanItem8Yearly" element="secondPlanItem_Yearly"/>

                <PriceCard name="Plan Three" nameId="thirdPlanNameYearly" descriptionId="thirdPlanDescriptionYearly"
                           priceId="thirdPlanPriceYearly" currencyId="thirdPlanCurrencyYearly"
                           item1="thirdPlanItem1Yearly" item2="thirdPlanItem2Yearly" item3="thirdPlanItem3Yearly"
                           item4="thirdPlanItem4Yearly" item5="thirdPlanItem5Yearly" item6="thirdPlanItem6Yearly"
                           item7="thirdPlanItem7Yearly" item8="thirdPlanItem8Yearly" element="thirdPlanItem_Yearly"/>
            </div>
        </div>
    );
};

export default PricingPlan;