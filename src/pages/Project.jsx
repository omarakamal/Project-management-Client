import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom'

const API_URL = process.env.REACT_APP_API_URL ||'http://localhost:5005' ;


function Project() {
  const [project, setProject] = useState('')
  const { projectId } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    axios.get(`${API_URL}/api/projects/${projectId}`)
      .then(project => {
        console.log(project.data)
          setProject(project.data)

    
      })
  }, [])
  function handleDelete(){
    axios.delete(`http://localhost:5005/api/projects/${projectId}`)
    .then(()=>{
      navigate('/projects')
    })
  }
  return (
    <div>
      {!project && <h2>Loading...</h2>}
      {project && (
        <div>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <h2>Tasks:</h2>
          {project.tasks.map(taskindividual => {
            return (
              <div key={taskindividual._id}>
                <h4>Task: {taskindividual.title}</h4>
                <h4>Description: {taskindividual.description}</h4>
              <hr />
              </div>
            )
          })}
        </div>)}
          <Link to='/projects'>go back to projects</Link>
          <br />
          <br />
          <Link to={`/projects/edit/${project._id}`}>Edit Project</Link>
          <br />
          <br />
          <button onClick={handleDelete}>Delete project</button>
    </div>
  )
}

export default Project