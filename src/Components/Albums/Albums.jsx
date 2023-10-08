import React from "react";
import { useState, useEffect } from "react";


function Albums() {

    const [albums, setAlbums] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then((response) => response.json())
        .then((data) => {
            setAlbums(data);
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
        })
    }, [])

    return (
        <div>
            {
              albums.map((album) => {
                return (
                    <div>
                        <li>{album.userId}</li>
                        <li>{album.id}</li>
                        <li>{album.title}</li>
                    </div>
                )
              })  
            }
        </div>
    )
}

export default Albums;