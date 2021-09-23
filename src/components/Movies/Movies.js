import react from "react";


const Movies = ({data}) => {
    return (
<>
<p>{data.Title}</p>
<img src={data.Poster} />
<p>{data.Released}</p>
<p>{data.Plot}</p>
</>
    )
}

export default Movies;