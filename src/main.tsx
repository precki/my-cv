import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.scss'

interface CVData {
  photo: string;
  name: string;
  lastName: string;
  position: string;
  experience: Experience[];
  education: string[]
}

interface Experience {
  year: number;
  description: string 
}

const cvData: CVData = {
  photo: 'https://dummyimage.com/400x400/d6d6d6/000000.jpg&text=Photo+cover',
  name: 'Mariusz',
  lastName: 'Kowalski',
  position: 'UI Designer',
  experience: [
    { year: 2020, description: 'Lorem ipsum' },
    { year: 2022, description: 'Ala ma kota' },
    { year: 2024, description: 'Jakaś fajna robota' },
  ],
  education: [
    'Lorem ipsum',
    'Uniwersytet trzeciego wieku',
    'Szkoła zycia'
  ]
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main className='cv-main'>
      <header className='cv-header'>
        <h1>CV {cvData.name} {cvData.lastName}</h1>
      </header>
      <aside className='cv-personal'>
        <h2>Personal data</h2>
        <img className="cv-photo" src={cvData.photo} alt={`${cvData.name} ${cvData.lastName} profile photo`} />
        <p>{ cvData.name } { cvData.lastName }</p>
        <small>{ cvData.position }</small>
      </aside>
      <section className='cv-details'>
        <h2>Experience</h2>
        <ul>
          {cvData.experience.map(experience => (
            <li key={experience.year}>
              <strong>{experience.year}</strong> - {experience.description}
            </li>
          ))}
        </ul>
        <h2>Education</h2>
        <ul>
          {cvData.education.map((education, index) => <li key={index}>{education}</li>)}
        </ul>
      </section>
    </main>
  </React.StrictMode>,
)
