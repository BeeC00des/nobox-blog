"use client"

import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { PostModel } from '../../../nobox-baas/record-structure/post';

const Page = () => {
    // define parameters
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter()

    const query = useSearchParams();

    const id = query.get('id')

    const [blogData, setBlogData] = useState({
        title: '',
        content: '',
    })

    console.log({ id })

    useEffect(() => {
        if (!id) {
            alert("Page error, Go back and try again.")
        }
        // Nobox was used here
        if (id) {
            PostModel.findOne({
                id
            }).then((postFromNobox) => {
                setBlogData(postFromNobox)
            })
        }
    }, [])


    //define input function
    const handleInputChange = async (e: any) => {
        const { name, value } = e.target;
        console.log({ name, value, id })

        if (id) {
            setBlogData({
                ...blogData,
                [name]: value
            })
            // Nobox was used here
            PostModel.updateOne({ id: id }, { [name]: value })
        }
    };


    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setIsLoading(true);
        router.push('/posts')
        
    };


    return (
        <div className="flex h-screen flex-col items-center justify-between p-10">

            <form className='w-[500px] mx-auto flex flex-col gap-2' onSubmit={handleSubmit} >
                <p className='font-bold text-black text-center py-2'>Update Post</p>
                <input type="text" placeholder='Edit blog post title' id="title" name="title" value={blogData.title} onChange={handleInputChange} className='w-full border p-3 rounded-md outline-none text-black' />

                <textarea rows={10} placeholder='Edit your blog content' id="content" name="content" value={blogData.content} onChange={handleInputChange} className='w-full border p-3 rounded-md my-3 outline-none text-black' />

                <button className='bg-gray-500 hover:bg-gray-700 hover:text-white text-black font-bold py-2 px-4 rounded-lg' disabled={isLoading}> {isLoading ? 'Loading ...' : 'Update'}</button>
            </form>
        </div>
    )
}

export default Page