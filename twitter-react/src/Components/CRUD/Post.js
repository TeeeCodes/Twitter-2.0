import React, { useEffect, useState } from 'react';
import './Post.css'

function TodoList() {
    const [data, setData] = useState([]);
    const [post, setPost] = useState("");
    const [id, setId] = useState("");

    const USERS_URL = "https://twitter-revised-default-rtdb.firebaseio.com/users"
    const POSTS_URL = "https://twitter-revised-default-rtdb.firebaseio.com/posts"

    useEffect(() => {
        fetchData();
    }, []);

    // FETCH METHOD
    const fetchData = async () => {
        const response = await fetch(POSTS_URL);
        const result = await response.json();
        setData(result)
    }

    // ADD METHOD
    const addData = async () => {
        const response = await fetch(POSTS_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "https://twitter-revised-default-rtdb.firebaseio.com/"
            },
            body: JSON.stringify({
                post,
            })
        })
        fetchData();
    }

        // UPDATE METHOD
    const updateData = async () => {
        const response = await fetch(POSTS_URL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "https://twitter-revised-default-rtdb.firebaseio.com/"
            },
            body: JSON.stringify({
                post,
            }),
        });
        fetchData();
    };

        // DELETE METHOD
    const deleteData = async (id) => {
        const response = await fetch(POSTS_URL, {
            method: "DELETE",
        });
        fetchData();
    };

    
  return (
    <div>
        <h1>Test</h1>
        <form className='main'>
            <input
                type='text'
                placeholder='Post'
                value={post}
                onChange={(e) => setPost(e.target.value)}
            />
            
            <button type='button' onClick={addData}>
                Post
            </button>
            <button type='button' onClick={updateData}>
                Update
            </button>
        </form>
        <ul>
            {data.map((item) => (
                <li key={item.id}>
                    {item.name} - {item.age}
                    <button type='button' onClick={() => deleteData(item.id)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
        <div class="event">
                <div class="left-event">
                    <h3>22</h3>
                    <span>June</span>
                </div>
                <div class="right-event">
                    <h4>Mobile Marketing</h4>
                    <p>Wilson Tech Park</p>
                    <a href="#">More Info</a>
                </div>
        </div>
        <div class="event">
                <div class="left-event">
                    <h3>18</h3>
                    <span>March</span>
                </div>
                <div class="right-event">
                    <h4>Social Media</h4>
                    <p>Wilson Tech Park</p>
                    <a href="#">More Info</a>
                </div>
            </div>
    </div>
  )
}

export default TodoList