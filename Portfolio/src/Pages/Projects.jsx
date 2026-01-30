import React from 'react'
import Header from '../Components/Header'
import styles from '../Pages/Projects.module.css'
import Footer from '../Components/Footer'

import projects from '../Data/projects.json'

const Projects = () => {

  console.log(projects)
  return (
    <>
        <Header />
          <main>
            <div className={styles.projectHead}>
              <h1>Ta en titt på hva jeg har laget!</h1>
            </div>
            <div className={styles.parentContainer}>
              <div className={styles.container}>

                {projects.map(project =>  (
                  <div className={`${styles.projects} ${styles.item}`} key={project.id}>
                    <h2>{project.name}</h2>
                    <img src={project.image} />
                    <p>
                      <span>Beskrivelse: </span><br />{project.Description}
                    </p>
                    <p>
                      <span>Status:</span><br /> {project.Status}
                    </p>
                    <p>
                      <span>Tech stack:</span><br />{project.Tech}
                    </p>
                    <p>
                      <span>Github: </span><a href={project.Github}><br />Trykk her!</a>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </main>
        <Footer />
    </>
  )
}

export default Projects