import './Details.scss';

interface CVData {
    experience: Experience[];
    education: string[]
}
  
interface Experience {
    year: number;
    description: string 
}
  
const cvData: CVData = {
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

const Details = () => {
    return (
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
    )
}

export { Details }