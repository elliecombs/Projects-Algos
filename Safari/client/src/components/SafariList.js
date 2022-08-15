//Displays below renders data from database 
import React from 'react';
import {Link} from 'react-router-dom';
import DeleteButton from './Delete';

const SafariList = (props) => {
    const {safariList, removeFromDom} = props;
    
    return (
            <div>
                <h1>My Safari</h1>
                {/* <header>Safari</header> */}
                <Link to = {'/safari/create'}>Add a safari to the shelter</Link>
                <table className="table table-bordered border-secondary">
                    <thead>
                        <tr>
                            <th>
                                Animal
                            </th>
                            <th>
                                Number
                            </th>
                            <th>
                                Location
                            </th>
                            <th>
                                Description
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
            <tbody>{
                safariList.map((safari, index)=>{
                return (
                <tr key={index}>
                <td>
                    {safari.animal}
                </td>
                <td>
                    {safari.number}
                </td>
                <td>
                    {safari.location}
                </td>
                <td>
                    {safari.description}
                </td>
                <td>
                    <Link key={index} to={`/safari/show/${safari._id}`}>Details</Link>
                </td>
                <td>
                    <DeleteButton safariId = {safari._id} successCallBack = {() => removeFromDom(safari._id)}  />
                    <Link key={index} to={`/safari/update/${safari._id}`}>Edit</Link>
                </td>
                </tr>
                )})
            }
            </tbody>
            </table>
        </div>
    )
}

export default SafariList;