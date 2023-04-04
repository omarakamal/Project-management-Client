import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const API_URL = process.env.REACT_APP_API_URL ||'http://localhost:5005' ;

function ProjectList() {
    const [projects,setProjects] = useState([])

    console.log(    localStorage.getItem('name')
    )

    useEffect(()=>{
        axios.get(`${API_URL}/api/projects`)
        .then(response=>{
            console.log(response.data)
          
                setProjects(response.data)

        })
    },[])
  return (
    <div>
       
       {projects.length===0 && <h2>Loading...</h2>}
       
        {projects.length>0 && projects.map(individualProject=>{
            return(
                <div key={individualProject._id}>
                    <h2>{individualProject.title}</h2>
                    <p>{individualProject.description}</p>
                    <Link to={`/projects/${individualProject._id}`}>Link to Project</Link>
                    <br />
                    <br />
                    <Link to={`/projects/edit/${individualProject._id}`}>Edit Project</Link>
                </div>
            )
        })}
    </div>
  )
}

export default ProjectList