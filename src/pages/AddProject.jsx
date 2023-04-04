import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const API_URL = process.env.REACT_APP_API_URL ||'http://localhost:5005' ;

function AddProject() {
    const [title, setTitle] = useState('')
    const [description,setDescription] = useState('')
    const navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault()
        const bodyToPost = {title,description}
        axios.post(`${API_URL}/api/projects`,bodyToPost)
        .then(()=>{
            setTitle('')
            setDescription('')
            alert("Project Created")
            navigate('/projects')

        })
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">
                Title
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            </label>
            <label htmlFor="">
                Description
                <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>
            </label>
            <button>Submit Project</button>
        </form>
    </div>
  )
}

export default AddProject