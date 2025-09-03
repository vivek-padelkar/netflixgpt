import axios from 'axios'
import React, { useEffect } from 'react'
import { API_HEADERS, API_METHOD, API_MOVIES_NOW_PLAYING } from '../../utils/constants'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../../utils/store/slice/moviesSlice'

const BrowseContent = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const getNowPlaying = async () => {
            try {
                const config = {
                    method: API_METHOD.GET,
                    url: API_MOVIES_NOW_PLAYING,
                    headers: API_HEADERS.headers
                }
                const { data } = await axios(config)
                if (data?.results && data?.results.length > 0) {
                    dispatch(addNowPlayingMovies(data?.results))
                } else {
                    toast.error("Data not found")
                }

            } catch (error) {
                toast.error(error.message)
            }
        }
        getNowPlaying()
    }, [])

    return (
        <div className="pt-32 md:pt-24 px-10 bg-black text-white flex flex-row items-center justify-center">
            <div className='flex flex-col justify-center items-center gap-4'>
                <h2 className='text-2xl font-bold'>What would you like to watch today?</h2>
                <div className='flex gap-4'>
                    <input type="text" placeholder='Search for a movie or a show' className='bg-gray-800 p-2 rounded-md' />
                    <button className='bg-red-600 text-white p-2 rounded-md'>Search</button>
                </div>
            </div>
        </div>
    )
}

export default BrowseContent