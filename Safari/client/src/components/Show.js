import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
// import DeleteButton from './Delete';

const Show = (props) => {
    const { id } = useParams();
    const [safari, setSafari] = useState(null);
    // const {safariList, removeFromDom} = props;

    useEffect( () => {
        axios.get(`http://localhost:8000/api/safari/${id}`)
        .then(res => {
            console.log('show', res.data);
            setSafari(res.data);
        })
        .catch(err => console.log(err));
    }, [id]);


    return (
        <div>
            <h1>My Safari</h1>
            <h3>My Animal: {safari?.animal}</h3>
            {safari && Object.keys(safari).map((k, index) => <div key={index}>
                <h3>{k}</h3>
                <p>{safari[k]}</p>
            </div>)}
            <Link to={'/'}>Back to Home</Link>
        </div>
    )
}

export default Show;