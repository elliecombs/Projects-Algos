import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";
import Form from './Form';

const Update = (props) => {
    const {setSafariList} = props;
    const { id } = useParams(); 
    const [name, setName] = useState("");
    const [safari, setSafari] = useState(null)
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    useEffect( () => {
        axios.get(`http://localhost:8000/api/safari/${id}`)
        .then(res => {
            setName(res.data.name);
            console.log('Safari to update', res);
            setSafari(res.data);
            setLoaded(true);
        })
        .catch(err => console.log(err));
    }, [id]);

    const updateSafari = (safariUpdate) => {
        axios.put('http://localhost:8000/api/safari/' + id, {
            animal: safariUpdate.safariAnimal, 
            number: safariUpdate.safariNumber,
            location: safariUpdate.safariLocation,
            description: safariUpdate.description,
        })
            .then(res => {
                setName('');
                setSafariList(arr => {
                    const _arr = [...arr];
                    const i = _arr.findIndex(item => item._id === id)
                    if (i === -1) return _arr;
                    _arr[i] = {_id: id, ...safariUpdate};
                    return _arr;
                });
                navigate("/"); // this will take us back to the Main.js
            })
            .catch((err) => {
                setErrors(err.response.data.error.errors)
                })
    }
    return (
        <div>
            <h1>Edit </h1>
            {/* {errors?.name? <span>{ errors.name.message }</span>: null} */}
            { loaded && <Form onSubmitProps = {updateSafari} initialName={name} safari={safari} errors = {errors} isUpdate = {true} /> }
        </div>
    )
}

export default Update;