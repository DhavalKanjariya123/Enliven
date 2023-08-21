
import React, { useRef } from 'react';
import axios from 'axios';

function Formdata() {

    const name = useRef("")
    const job = useRef("")

    const Clk = () => {
        var insert = {
            name: name.current.value,
            job: job.current.value
        }

        axios.post("http://localhost:4000/formdetail", insert)
            .then(() => {
                alert("Thanks for submit the data")
                window.location="/login"
            });
    }

    return (
        <>
            <form className='form-detail mt-5'>
                <h3>Form Detail</h3>
                <label className='mt-3 mb-1'>Enter your Name :</label>
                <input ref={name} type="text" className='form-control' />
                <label className='mt-3 mb-1'>Enter your job role :</label>
                <input ref={job} type="text" className='form-control' />
                <button type='button' className='mt-3 bg-primary text-white' onClick={Clk}>Submit</button>
            </form>          
        </>
    )
}

export default Formdata;
