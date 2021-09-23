import React, { useState } from 'react'
import axios from "axios"
import Movies from '../Movies/Movies'
import { TextField } from '@mui/material'
import "./listofmovies.css"
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
        <div className="ui">
            <form onSubmit={onSearch}>
                <div className="nav">
                    <TextField id="standard-basic" label="Search a movie..." variant="standard" value={keyword} onChange={inputChange} />
                </div>
            </form>
            {movies.Title && (
                <>
            <Movies data={movies} />
            <a href={`https://cuevana3.io/?s=${movies.Title}`} target="_blank">Watch the movie in cuevana... if it's there👀</a>
            </>)}
        </div>
    )
}

export default ListofMovies
