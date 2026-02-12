"use client";
import { useState } from "react"
import Loader from "../shared/loader";

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false)
    const [loader, setLoader] = useState(false)
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        number: '',
        email: '',
        message: '',
    })
    const handleChange = (e: any) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const reset = () => {
        formData.firstname = ''
        formData.lastname = ''
        formData.number = ''
        formData.email = ''
        formData.message = ''
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setLoader(true)

        fetch('https://formsubmit.co/ajax/bhainirav772@gmail.com', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                name: formData.firstname,
                email: formData.lastname,
                interest: formData.number,
                budget: formData.email,
                message: formData.message,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)

                setSubmitted(data.success)
                setLoader(false)
                reset()
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    return (
        <div className="w-full">
            <form
                onSubmit={handleSubmit}
                className='flex flex-col w-full bg-white dark:bg-surfaceDark rounded-md shadow-card p-5 sm:p-8 gap-8'>
                <div className='flex flex-col md:flex md:flex-row gap-6'>
                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor='name'>First Name</label>
                        <input
                            className='input-class'
                            id='firstname'
                            type='text'
                            name='firstname'
                            value={formData.firstname}
                            onChange={handleChange}
                            placeholder='First Name'
                        />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor='email'>Last Name</label>
                        <input
                            className='input-class'
                            id='lastname'
                            type='name'
                            name='lastname'
                            value={formData.lastname}
                            onChange={handleChange}
                            placeholder='Last Name'
                        />
                    </div>
                </div>
                <div className='flex flex-col md:flex md:flex-row gap-6'>
                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor='email'>Phone Number</label>
                        <input
                            className='input-class'
                            id='number'
                            type='number'
                            name='number'
                            value={formData.number}
                            onChange={handleChange}
                            placeholder='Phone Number'
                        />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor='email'>Email</label>
                        <input
                            className='input-class'
                            id='email'
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Email'
                        />
                    </div>
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor='message'>Message</label>
                    <textarea
                        className='input-class'
                        name='message'
                        id='message'
                        value={formData.message}
                        onChange={handleChange}
                        placeholder='Let tell us know your project about'
                        rows={4}
                    />
                </div>
                <div>
                    <button
                        type='submit'
                        className='flex items-center bg-transparent hover:bg-black dark:hover:bg-white px-6 py-3 border border-black dark:border-white font-medium text-black dark:text-white hover:text-white dark:hover:text-black rounded-md transition-colors duration-500 ease-in-out cursor-pointer'>
                        Send Message {loader && <Loader />}
                    </button>
                    {submitted && <p className="font-medium text-primary mt-5">Thank you for Submitting !</p>}

                </div>
            </form>
        </div>
    )
}

export default ContactForm