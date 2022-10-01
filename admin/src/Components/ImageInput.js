import React, {useState} from 'react';
import DefaultImage from '../data/default-image.jpg'
import  Axios from 'axios';
import { RiAttachment2 } from 'react-icons/ri';

const ImageInput = (props) =>
{
    const [aboutImage, setAboutImage] = useState({
        file:[],
        filePreview: null,
    });
    let image = new Image();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('photo', aboutImage.file);
        formData.append('element', props.element);

        const config = {
            headers: {
                'Accept': 'application/json, text/plain, /',
                'Content-Type': 'multipart/form-data'
            }
        };

        const url = `${props.requestPath}user/upload`;

        Axios.post(url, formData, config)
        .then((response) =>
        {
            console.log(response);
            alert('Successful');
        })
        .catch((err) => {
            console.log('err', err);
        })
    }

    return (
        <div className="flex-col image-div" style={props.style}>
            <img className="image" alt={props.alt} id="t" src={
                aboutImage.filePreview != null ? aboutImage.filePreview : DefaultImage
            } />
            <input onChange = {(e) => {
                setAboutImage({
                    ...aboutImage,
                    file: e.target.files[0],
                    filePreview: URL.createObjectURL(e.target.files[0]),
                })
                image.src = aboutImage.filePreview;
                let i = document.getElementById('t');
                i.style.height = 'auto';
                i.style.width = 'auto';

            }}
                   accept = "image/*" type="file" id={props.id} name='photo'
                    style={{ display: 'none' }}/>

                    <div className="flex image-buttons">
                        <label htmlFor={props.id} className="purple r-02 choose-image" >
                            <RiAttachment2 style={{ marginBottom: '-0.2rem' }} /> Choose File
                        </label>

                        <button type='submit'
                                className="r-02 form-submit"
                                onClick={ handleSubmit } >
                            Upload Photo
                        </button>
                    </div>

        </div>
    );
};

export default ImageInput;