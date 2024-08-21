"use client"
import React, { Suspense } from 'react'
import UpdatePostPage from '../components/postUpdate';

const Page = () => {

    return (
        <Suspense>
            <UpdatePostPage />
        </Suspense>
    )
}

export default Page