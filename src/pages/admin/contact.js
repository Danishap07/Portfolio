import axios from 'axios'
import React, { useState, useEffect } from 'react'

function Contact({ data }) {

    // const [contact_list, set_contact_list] = useState(data)

    // useEffect(() => {
    //     getContacts()
    // }, [])

    // const getContacts = async () => {
    //     const res = await axios.get("https://authentication-system-tz0c.onrender.com/api/contact", {
    //         Hearders: { "Content-Type": "application/json" }
    //     })
    //     if (res.data.status) {
    //         console.log(res.data.message);
    //         set_contact_list(res.data.message)
    //     }
    // }
    return (
        <div className='md:py-2 md:px-20'>
            <h3 className="uppercase text-center mt-8 text-4xl font-semibold ">Contact Messages</h3>
            <div className="flex flex-wrap md:py-4">
            
                {
                    data ? data.map((e, i) => (
                <div className="max-w-sm md:w-[28%] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-6 my-6 " key={i} >
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{e.fullname}</h5>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{e.email}</p>

                    <p className="mb-3 font-normal text-gray-100 dark:text-gray-100">{e.message}</p>

                </div>
                ))
                : 
                null
                }

            </div>
        </div>
    )
}

export const getServerSideProps = (async (req, res) => {
    // Fetch data from external API
    const response = await axios.get('https://authentication-system-tz0c.onrender.com/api/contact', {
             Hearders: { "Content-Type": "application/json" }
         })
    // console.log(response.data.message)
    const data = response.data.message
    // console.log("first:", data)
    // Pass data to the page via props
    return { props: { data } }
  })

export default Contact

