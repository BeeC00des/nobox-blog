'use client'
import Image from "next/image";
import Posts from '../app/posts/page';
import Link from 'next/link';
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter()

  const viewpost = async () => {
    router.push('/posts')
  }

  return (
    <div className="flex h-screen flex-col items-center justify-between p-10">
      <div className="w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="font-bold py-5 text-base">
          Get started by creating data,updating, delete With Nobox , Mini blog sample;
        </p>
      </div>
      <div className="w-full max-w-5xl flex items-center justify-between font-mono text-sm lg:flex pt-1">
        <div className='py-10'>
          <p className="py-5">Click the button below to get started</p>
          <Link href={"/create"} className='px-3 py-3 bg-zinc-900 hover:bg-zinc-800 rounded-md text-white'>Create Post </Link>

        </div>

        <div className='py-10'>
          <p className="py-4">Click here to view all post made by you</p>
            <button className="px-3 py-2 bg-zinc-900 hover:bg-zinc-800 rounded-md text-white" onClick={viewpost}> All post</button>
        </div>
      </div>

      <div className="w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex pt-32">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Made with passion from &nbsp; 
          <Link href="https://medium.com/@nobox.devrel" className="font-mono font-bold text-green-400 ">Nobox Devrel Team </Link> &nbsp; follow Us for more.  </p>
      </div>
    </div>
  );
}


