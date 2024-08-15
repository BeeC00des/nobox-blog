'use client'

import React from 'react'

import { useRouter } from 'next/navigation'


export default function Item() {

    const router = useRouter()

    const handleDelete = async (id: number) => {
        await fetch('/api/post?id=' + id, {
            method: 'DELETE'
        })

        router.refresh()
    }

    return (
        <div className='border-2 border-black p-3 rounded-md'>
            <h2 className='mb-2'>ID:</h2>  
            <h1 className='text-xl font-semibold'>Title:</h1>
            <p>Content:</p>
            <div className='flex justify-end gap-3 mt-4 text-sm'>
            {/* onClick={() => router.push(`/update/${post.id}`)} *
                <button className='font-semibold' >Update</button>
                {/* onClick={() => handleDelete(post.id)} *
                <button className='font-semibold text-red-500' >Delete</button>
            </div> 
            {/* {post.title}
            //{post.id}
            {post.content}
            */}
        </div>
    /</div>
    )
}