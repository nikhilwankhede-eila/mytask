
/* =========================================== AVOID THIS FILE CURRENTLY =================================================*/


import React from 'react'

const Movie = ({image, release_date, title, vote_average,viewMovieInfo, movieId}) => {
    return (
        <div className = "col s12 m6 l3">
            <div className="card" >
                <div className="card-image waves-effect waves-block waves-light">
                    {
                        image == null ? <img src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="card image"
                        style = {{width:"100%", height :300}} /> :
                        <img src = {`http://image.tmdb.org/t/p/w185${image}`}
                        alt = "card image" style = {{width: "100%", height:300}}
                        />  
                    }   
                </div>   
                <div>
                <p style = {{textAlign:"center", fontWeight : "bold"}} > Rating : {vote_average}</p>
                </div> 
                   
                <div className="card-content details">
                    <p><a className = "detail" href="#" onClick = {() => viewMovieInfo(movieId)}>More Info</a></p>
                </div>
            </div>   
        </div>
    )
}

export default Movie

