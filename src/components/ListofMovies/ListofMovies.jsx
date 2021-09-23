import React, { useState } from 'react'
import axios from "axios"
import Movies from '../Movies/Movies'
const ListofMovies = () => {
    const [movies, setMovies] = useState({})
    const [keyword, setKeyword] = useState("")


    const inputChange = (e) => {
        setKeyword(e.target.value)
    }
    const onSearch = (e) => {
        e.preventDefault();

        if (keyword) {
            const getRequest = async () => {
                try {
                    const res = await axios.get(`https://omdbapi.com/?t=${keyword}&apikey=6a56382`);
                    setMovies(res.data)
                }
                catch (error) {
                    console.log(error)
                }
            }
            getRequest();
        }
        setKeyword("");
    }


    return (
        <div>
            <form onSubmit={onSearch}>
                <input type="text" value={keyword} onChange={inputChange} />
            </form>
            <Movies data={movies} />
            <a href={`https://cuevana3.io/?s=${movies.Title}`} target="_blank">Watch the movie in cuevana... if it's there👀</a>
        </div>
    )
}

export default ListofMovies
