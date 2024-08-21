'use client'

import React, { useEffect, useState, Suspense } from 'react'
import { Post, PostModel } from '../../../nobox-baas/record-structure/post';
import { ReturnObject } from 'nobox-client';
import { useRouter, useSearchParams } from 'next/navigation'

export default function Page() {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState<(ReturnObject<Post>)[]>([]);
    const router = useRouter()


    useEffect(() => {
        PostModel.find().then((postsFromNobox: (ReturnObject<Post>)[]) => {
            setLoading(false);
            setPosts(postsFromNobox)
        })
    }, [])


    const handleDelete = async (id: any) => {
        // use nobox delete call here and pass in the right data
        // await PostModel.delete(id);
        router.push('/')
    }
    return (
        <div className='container mx-auto'>
            <div className='p-5'>   {
                posts.map((post) => {
                    return (
                        <div key={post.id} className="py-1">
                            <div className=" bg-white py-6 px-4 lg:rounded-xl lg:border sm:bg-gray-200">

                                <h2 className='font-bold'>Title : <span className='font-normal'>{post.title}</span></h2>
                                <p className='font-bold'>Content : <span className='font-normal'>{post.content}</span></p>

                                <div className='flex justify-between items-center mt-2 font-semibold'>
                                    <a href={`/update?id=${post.id}`} className='px-3 py-2  bg-zinc-800 rounded-md text-white'>Update</a>
                                    <button className='px-3 py-2 bg-zinc-800 rounded-md text-red-500' onClick={() => handleDelete(post.id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>

    )
}


