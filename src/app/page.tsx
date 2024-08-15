import Image from "next/image";
import Posts from '../app/posts/page';
import Link from 'next/link';


export default function Home() {



  // const getPosts = async () => {
  //   // Because this is server components, we have to define the URL with http
  //   const res = await fetch(process.env.BASE_URL + '/api/post', { next: { revalidate: 0 } })

  //   // Define the output to json, because if only res, it will return by any type
  //   const json = await res.json()
  //   return json

  // }

  // const getdata = async () => {
  //   const posts = await getPosts()
  //   console.log(posts);
  // }




  return (
    <div className="flex h-fit flex-col items-center justify-between p-10">
      <div className="w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by creating data,updating, delete and general data from db&nbsp;
          <code className="font-mono font-bold">With Nobox blog, view data.</code>
        </p>
      </div>
      <div className="w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex pt-1">
        <div className='w-[1200px] mx-auto py-10'>
          <p className="py-2">Click the button below to get started</p>
          <Link href={"/create"} className='px-3 py-2 bg-zinc-900 hover:bg-zinc-800 rounded-md text-white'>Create</Link>
          <div className='grid grid-cols-3 gap-5 mt-8'>
            <span>All post from nobox is store here:</span>
            {/* {posts?.posts?.map((post: any, i: number) => (
              <Item key={i} post={post} />
            )).sort().reverse()} */}
          </div>
        </div>
      </div>

      <div className="w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex pt-32">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Made with passion from nobox&nbsp;
          <code className="font-mono font-bold">Devrel Team</code>
        </p>
      </div>
    </div>
  );
}


