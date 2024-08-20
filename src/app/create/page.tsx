"use client"

import { useRouter } from 'next/navigation' // install use router.
import React, { useState } from 'react'
import { PostModel } from "../../../nobox-baas/record-structure/post";

interface ReturnObject<T> {
    title:string,
    content:string
}

interface Post {
    title:string,
    content:string
 }

const Page = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const router = useRouter()

const handleSubmit = async (e: any) => {
    e.preventDefault()

    setIsLoading(true)

  // use nobox here ---- this sends data to nobox dashboard  the function route call are different
    try {
        // Call UserModel.insertOne with form data
        const post: ReturnObject<Post> = await PostModel.insertOne({
          title,
          content
        });
  
      } catch (error) {
        console.error('Error adding user:', error);
      }

        setIsLoading(false)
        router.push('/posts')
    }

    return (
        <div className="flex h-screen flex-col items-center justify-between p-10">
            <form className='w-[500px] mx-auto flex flex-col gap-2' onSubmit={handleSubmit}>
                <p className='font-bold text-black text-center py-2'>Create Post</p>
                <input type="text" placeholder='Enter your blog post title'  value={title} onChange={(e) => setTitle(e.target.value)} className='w-full border p-3 rounded-md outline-none' />

                <textarea rows={10} placeholder='Enter your blog content' value={content} onChange={(e) => setContent(e.target.value)} className='w-full border p-3 rounded-md my-3 outline-none' />

                <button className='bg-gray-500 hover:bg-gray-700 hover:text-white text-black font-bold py-2 px-4 rounded-lg' disabled={isLoading}>{isLoading ? 'Loading ...' : 'Submit'}</button>
            </form>
        </div>
    )
}

export default Page