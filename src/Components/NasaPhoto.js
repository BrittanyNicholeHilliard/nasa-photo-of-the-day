import React from 'react';





const NasaPhoto = (props) => {
    return (
<div className='nasa-photo-wrapper'>
    <h1>{props.photo.date}</h1>
    <img src={props.photo.hdurl} />
    <p> { props.photo.explanation } </p>
</div>
    )
}

export default NasaPhoto;