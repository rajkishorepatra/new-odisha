import { Button, Input } from '@nextui-org/react'
import React, { useState, useRef } from 'react'

function Register() {
    const [name, setName] = useState('');
    const [num, setNum] = useState('');
    const [id, setID] = useState('');
    const [link, setLink] = useState('');
    const formRef = useRef(null);
    const scriptUrl = "https://script.google.com/macros/s/AKfycbxnkA75lKN1ny3Le16c6m5gG4OReeDlKOYfMd411Oro6usOSQizAESrmMIYHMfzHavGgA/exec"

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thanks for Registering!😄');
        fetch(scriptUrl, {
            method: 'POST',
            'mode': 'no-cors',
            body: new FormData(formRef.current),

        }).then(res => {
            // console.log("SUCCESSFULLY SUBMITTED")
        })
            .catch(err => console.log(err));
        setNum('');
        setName('');
        setID('');
        setLink('');
    }

    return (
        <>
            <div className='regHead d-flex justify-content-center mt-5'>
                <h1>&nbsp;&nbsp;Register Now!&nbsp;&nbsp;</h1>
            </div>
            <form onSubmit={handleSubmit} method='post' ref={formRef} name="google-sheet">
                <div className="text-center my-4">
                    <div className='my-5'>
                        <Input name='name' onChange={(e) => setName(e.target.value)} value={name} labelPlaceholder='Enter Your Name' width='80vw' color='warning' clearable bordered required />
                    </div>
                    <div className='my-5'>
                        <Input name='number' onChange={(e) => setNum(e.target.value)} value={num} labelPlaceholder='Enter Your Phone Number' width='80vw' color='warning' clearable bordered required />
                    </div>
                    <div className='my-5'>
                        <Input name='insta-ID' onChange={(e) => setID(e.target.value)} value={id} labelPlaceholder='Enter Your Instagram ID' width='80vw' color='warning' clearable bordered required />
                    </div>
                    <div className='my-5'>
                        <Input name='insta-Link' onChange={(e) => setLink(e.target.value)} value={link} labelPlaceholder='Enter Your Instagram Link' width='80vw' color='warning' clearable bordered required />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <Button shadow bordered rounded flat color="warning" style={{ fontSize: "1.5em" }} type='submit'>Submit</Button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Register