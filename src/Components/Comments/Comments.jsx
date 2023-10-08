import React from "react";
import { useState, useEffect } from 'react'


function Comments() {

    const [ comments, setComments ] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((response) => response.json())
            .then((data) => {
                setComments(data)
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
              });
    }, []) 

    return (
        <div>
            {
                comments.map((comment) => {
                    return (
                        <div>
                            <li>{comment.postId}</li>
                            <li>{comment.id}</li>
                            <li>{comment.name}</li>
                            <li>{comment.email}</li>
                            <li>{comment.body}</li>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Comments