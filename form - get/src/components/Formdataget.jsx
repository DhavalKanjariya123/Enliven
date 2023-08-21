import React, { useEffect, useState } from 'react';
import axios from 'axios'

function Formdataget() {
   
    const [getdetail, setgetdetail] = useState(0);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                setgetdetail(res.data)
            })
    })
    return (
        <>
            <h2>Get Data from API</h2>
            <table className='table table-dark table-striped border-0'>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Description</th>
                    </tr>
                </thead>
                {getdetail && getdetail.map((item) => {
                            return (
                                <>
                                    <tbody  >
                                        <tr >          
                                            <td width="15%">{item.title}</td>
                                            
                                            <td width="30%">{item.description}</td>
                                        </tr>
                                    </tbody>
                                </>
                            )
                        })
                        }
            </table>

        </>
    )
}

export default Formdataget;
