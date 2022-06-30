import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import {data}from './data'

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(1)

  // const fetchJobs = async () => {
  //   const response = await fetch(url);
  //   const newJobs = await response.json();
  //   setJobs(newJobs)
  //   setLoading(false)
  // }

  const liar = () => {
    setJobs(data)
    setLoading(false)
  }

  useEffect(() => {
    liar()
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }
  const { id, dates, title, duties,company} = jobs[value]
  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item,index) => { 
            return(
              <button 
              className= {`job-btn ${index === value && 'active-btn'}` }
              onClick={() => setValue(index)}
              key = {item.id}>
                {item.company}
              </button>
            );
          })}
        </div>      
        <article className="job-info" key={id}>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className="job-date">{dates}</p>
        {duties.map((duty, index) => {
          return (
            <div className="job-desc" key = {index}>
              <FaAngleDoubleRight className ='job-icon'/>
              <p>{duty}</p>
            </div>
          );
        })}
      </article>
      </div>

    </section>
  );
}

export default App;
 