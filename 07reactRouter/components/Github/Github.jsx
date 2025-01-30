import { useState } from "react";
import { useEffect } from "react";
import {useLoaderData} from 'react-router-dom';


function Github(){

    const data = useLoaderData()

//     const [data, setData] = useState([])

//     useEffect(() => {
//    fetch('://api.github.com/users/TOHIDKHAhttpsN4844')
//    .then(res => res.json())
//    .then(data => {
//     setData(data)
//    })
//     }, [])


   
    return (
        <>
       
       <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>GitHub Followers: {data.following}
        </div>
         <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>GitHub Repos: {data.public_repos}
        </div>

        </>
    )
}

export default Github;

export const githubInfoLoader = async () => {
    const res= await fetch('https://api.github.com/users/TOHIDKHAN4844')
    return res.json()
}