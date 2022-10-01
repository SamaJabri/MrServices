import React, {useEffect, useState} from 'react';
import FormInput from './FormInput';
import Axios from 'axios';

const ListItem = (props) =>
{
    const [listItem1, setListItem1] = useState('');
    const [listItem2, setListItem2] = useState('');
    const [listItem3, setListItem3] = useState('');
    const [listItem4, setListItem4] = useState('');
    const [listItem5, setListItem5] = useState('');
    const [listItem6, setListItem6] = useState('');
    const [listItem7, setListItem7] = useState('');
    const [listItem8, setListItem8] = useState('');

    const [listItemsInputs, setListItemsInputs] = useState([]);

    // Update List Items
    const submitAndReview = () => {

        Axios.put(`${props.requestPath}update-list/`, {
            listItem1: listItem1 === '' ? listItemsInputs[0].value : listItem1,
            listItem2: listItem2 === '' ? listItemsInputs[1].value : listItem2,
            listItem3: listItem3 === '' ? listItemsInputs[2].value : listItem3,
            listItem4: listItem4 === '' ? listItemsInputs[3].value : listItem4,
            listItem5: listItem5 === '' ? listItemsInputs[4].value : listItem5,
            listItem6: listItem6 === '' ? listItemsInputs[5].value : listItem6,
            listItem7: listItem7 === '' ? listItemsInputs[6].value : listItem7,
            listItem8: listItem8 === '' ? listItemsInputs[7].value : listItem8,
            listItem1Id: props.item1,
            listItem2Id: props.item2,
            listItem3Id: props.item3,
            listItem4Id: props.item4,
            listItem5Id: props.item5,
            listItem6Id: props.item6,
            listItem7Id: props.item7,
            listItem8Id: props.item8,
        });

        setListItemsInputs([...listItemsInputs, {
            listItem1 : listItem1,
            listItem2 : listItem2,
            listItem3 : listItem3,
            listItem4 : listItem4,
            listItem5 : listItem5,
            listItem6 : listItem6,
            listItem7 : listItem7,
            listItem8 : listItem8,
        },]);
    };

    useEffect( () => {
        Axios.get(`${props.requestPath}get`,{
            params : { element: props.element }
        }).then( (response) => {
            setListItemsInputs(response.data);
        })
    });


    return (
        <div className="flex-col list" style={{ marginTop: '2rem' }}>
            <h2 className="purple title">{props.header}</h2>
            <div className="flex forms">

                <form className="form" onSubmit={(event) => event.preventDefault()}>
                    <FormInput type="text" id={props.item1}
                               onchange={(e) => setListItem1(e.target.value)} />
                    <FormInput type="text" id={props.item2}
                               onchange={(e) => setListItem2(e.target.value)} />
                    <FormInput type="text" id={props.item3}
                               onchange={(e) => setListItem3(e.target.value)} />
                    <FormInput type="text" id={props.item4}
                               onchange={(e) => setListItem4(e.target.value)} />
                    <FormInput type="text" id={props.item5} display={props.display5}
                               onchange={(e) => setListItem5(e.target.value)} />
                    <FormInput type="text" id={props.item6} display={props.display6}
                               onchange={(e) => setListItem6(e.target.value)} />
                    <FormInput type="text" id={props.item7} display={props.display7}
                               onchange={(e) => setListItem7(e.target.value)} />
                    <FormInput type="text" id={props.item8} display={props.display8}
                               onchange={(e) => setListItem8(e.target.value)} />

                    <button type="submit" className="r-02 form-submit"
                            onClick={ submitAndReview }>
                        Submit
                    </button>

                </form>


                {/*Current List Items*/}
                <ul className="flex-col r-02 currentInfo"
                    style={{ marginTop: '2rem', gap: '1rem', listStyle: 'decimal', padding: '2rem'}}>
                    { listItemsInputs.map( (val) => {

                        if(val.value !== ' ') {
                            return(
                                <div className="flex items-center item-input-div">
                                    <li key={ val.id }>  { val.value } </li>
                                </div>
                            )
                        }
                    })
                    }
                </ul>
            </div>
        </div>
    );
};

export default ListItem;