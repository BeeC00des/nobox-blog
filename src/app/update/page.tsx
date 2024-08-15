"use client"

import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { updatePostModel } from '../../../nobox-baas/record-structure/updatePost';

const Page = () => {
// define parameters
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const router = useRouter()

    const [blogData, setBlogData] = useState({
        title: '',
        content: '',
        // id:"show"
    })
  

//define input function
    const handleInputChange = async (e:any) => {
        const { name, value } = e.target;

        setBlogData((prevState: any) => ({
            ...prevState,
            [name]: name === "Goals" ? Number(value) : value,
        }));

        //console.log(setBlogData);
        setIsLoading(false)
    };

    //define submit action and renew data stored in database

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        // Nobox was used here
        const insertedData = await updatePostModel.insertOne(blogData);
        console.log({ insertedData }); // console.log(blogData);

        
      
        const returnedData = await updatePostModel.findOne({id: insertedData.id}); 
        console.log('Got post from Db with that id:', returnedData);

        const id = insertedData.id;

        setTimeout(() => {
            const updatedData = updatePostModel.updateOneById(id, { title: "You changed me"})
        console.log({ updatedData})
          }, 300000);

        // const updatedData = await updatePostModel.updateOneById(id, { title: "You changed me"})
        // console.log({ updatedData})
       
         // router.push('/posts')
    };
    

return (
    <div className="flex h-screen flex-col items-center justify-between p-10">
        
        <form className='w-[500px] mx-auto flex flex-col gap-2' onSubmit={handleSubmit} >
            <p className='font-bold text-black text-center py-2'>Update Post</p> 
            <input type="text" placeholder='Edit blog post title' id="title" name="title" value={blogData.title} onChange={handleInputChange} className='w-full border p-3 rounded-md outline-none text-black' />

            <textarea rows={10} placeholder='Edit your blog content' id="content" name="content"  value={blogData.content} onChange={handleInputChange} className='w-full border p-3 rounded-md my-3 outline-none text-black' />

            <button className='bg-gray-500 hover:bg-gray-700 hover:text-white text-black font-bold py-2 px-4 rounded-lg' disabled={isLoading}> {isLoading ? 'Loading ...' : 'Update'}</button>
        </form>
    </div>
)
}

export default Page