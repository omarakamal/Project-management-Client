import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const API_URL = process.env.REACT_APP_API_URL ||'http://localhost:5005' ;

function EditProjectPage() { 
    const [title, setTitle] = useState('')
const [description,setDescription] = useState('')
const {projectId} = useParams()
const navigate = useNavigate()
function handleSubmit(e){
    e.preventDefault()
    const bodyUpdate = {title,description}
    //put is similar to the post method
    //has two parameters:
    //1. the url where we are updating (put)
    //2. what is the data to be updated
    axios.put(`${API_URL}/api/projects/${projectId}`,bodyUpdate)
    .then(response=>{
        console.log(response.data)
        navigate(`/projects/${response.data._id}`)
    })

  
}
function handleDelete(){
    axios.delete(`http://localhost:5005/api/projects/${projectId}`)
    .then(()=>{
        navigate('/projects')
    })
}

useEffect(()=>{
    axios.get(`http://localhost:5005/api/projects/${projectId}`)
    .then(result=>{
        console.log(result.data)
        setTitle(result.data.title)
        setDescription(result.data.description)
        console.log(description)
        console.log(title)
        

    })
},[])
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

    <button onClick={handleDelete}>Delete Project</button>
</div>
)
}

export default EditProjectPage