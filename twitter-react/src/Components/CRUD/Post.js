import React, { useEffect, useState } from 'react';

function TodoList() {
    const [data, setData] = useState([]);
    const [post, setPost] = useState("");
    const [id, setId] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    // FETCH METHOD
    const fetchData = async () => {
        const response = await fetch("enter URL here");
        const result = await response.json();
        setData(result)
    }

    // ADD METHOD
    const addData = async () => {
        const response = await fetch("URL here", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                post,
            })
        })
        fetchData();
    }

        // UPDATE METHOD
    const updateData = async () => {
        const response = await fetch("URL HERE/${id}", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                post,
            }),
        });
        fetchData();
    };

        // DELETE METHOD
    const deleteData = async (id) => {
        const response = await fetch("URL HERE/${id}", {
            method: "DELETE",
        });
        fetchData();
    };

    
  return (
    <div>
        <h1>Test</h1>
        <form>
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
    </div>
  )
}

export default TodoList