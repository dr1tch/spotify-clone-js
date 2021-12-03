import { ChevronDownIcon, ChevronRightIcon, ChevronLeftIcon, PauseIcon, DotsHorizontalIcon } from "@heroicons/react/outline"
import { HeartIcon } from "@heroicons/react/solid";
export default function Layout() {
    return (
        <div className='flex-grow overflow-y-scroll h-screen scrollbar-hide'>
           <header className='absolute top-3 right-10'>
                <div className="text-xs font-semibold flex items-center gap-3 pr-4 rounded-full ring-2 ring-black bg-black opacity-90 hover:opacity-80 cursor-pointer">
                    <img src="/img/profile.png" alt="user-profile-image" className='w-8 h-8 rounded-full' />
                    <p>Youssouf Kacemi</p>
                    <ChevronDownIcon className='w-3 h-3' />
                </div>
           </header>
            <header className='absolute top-3 ml-7'>
                <div className="flex items-center gap-3">
                    <button className='bg-black bg-opacity-90 hover:bg-opacity-80 w-8 h-8 flex justify-center items-center rounded-full shadow'>
                        <ChevronLeftIcon className='w-6 h-6 font-semibold' />
                    </button>
                    <button className="bg-black bg-opacity-90 hover:bg-opacity-80 w-8 h-8 flex justify-center items-center rounded-full shadow">
                        <ChevronRightIcon className='w-6 h-6 font-semibold' />
                    </button>
                </div>
            </header>
           <section className={`w-full flex items-end gap-7 bg-gradient-to-b from-purple-900 to-black h-80 text-white p-8`}>
                <div className='flex justify-start items-end gap-7'>
                    <img src="/img/playlist-cover.jpg" alt="playlist cover" className=' w-60 shadow-2xl rounded' />
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-xs text-white font-semibold'>PLAYLIST</h1>
                        <h1 className="text-8xl font-extrabold">Tropical Feelz</h1>
                        <p className='text-xs text-gray-400 font-medium'>Summer is a mere click away with ‘Tropical Feelz’. Smile and embrace the good life with these happy and uplifting tunes.</p>
                        <p className='text-xs text-gray-400'><span className='cursor-pointer text-white font-semibold hover:underline'>Epidemic Sounds</span> - 1,078 likes - 66 songs, 3 hr 34 min</p>
                    </div>
                </div>
           </section>
           <section>
               <div className='px-6  flex justify-start items-center gap-7'>
                   <div className='bg-green-700 w-16 h-16 rounded-full flex justify-center items-center cursor-pointer'>
                        <PauseIcon className='w-10 h-10 text-white' />
                   </div>
                   <div>
                       <HeartIcon className='w-10 h-10 text-green-400 cursor-pointer' />
                   </div>
                   <div>
                       <DotsHorizontalIcon className='w-7 h-7 cursor-pointer' />
                   </div>
               </div>
           </section>
           <div className='space-y-3 text-sm'>
                    {/* Here we'll display our recent playlists */}
                    <p className='cursor-pointer hover:text-white'>
                        Playlist .....
                    </p>
                    <p className='cursor-pointer hover:text-white'>
                        Playlist .....
                    </p>
                    <p className='cursor-pointer hover:text-white'>
                        Playlist .....
                    </p>
                    <p className='cursor-pointer hover:text-white'>
                        Playlist .....
                    </p>
                    <p className='cursor-pointer hover:text-white'>
                        Playlist .....
                    </p>
                    <p className='cursor-pointer hover:text-white'>
                        Playlist .....
                    </p>
                    <p className='cursor-pointer hover:text-white'>
                        Playlist .....
                    </p>
                    <p className='cursor-pointer hover:text-white'>
                        Playlist .....
                    </p>
                    <p className='cursor-pointer hover:text-white'>
                        Playlist .....
                    </p>
                    <p className='cursor-pointer hover:text-white'>
                        Playlist .....
                    </p>
                    <p className='cursor-pointer hover:text-white'>
                        Playlist .....
                    </p>
                    <p className='cursor-pointer hover:text-white'>
                        Playlist .....
                    </p>
                    <p className='cursor-pointer hover:text-white'>
                        Playlist .....
                    </p>
                    <p className='cursor-pointer hover:text-white'>
                        Playlist .....
                    </p>
                </div>
        </div>
    )
};
