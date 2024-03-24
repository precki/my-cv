import './Personal.scss'

interface CVData {
    photo: string;
    name: string;
    lastName: string;
    position: string;
}
  
const cvData: CVData = {
    photo: 'https://dummyimage.com/400x400/d6d6d6/000000.jpg&text=Photo+cover',
    name: 'Mariusz',
    lastName: 'Kowalski',
    position: 'UI Designer',
}

const Personal = () => {
    return (
    <aside className='cv-personal'>
        <h2>Personal data</h2>
        <img className="cv-photo" src={cvData.photo} alt={`${cvData.name} ${cvData.lastName} profile photo`} />
        <p>{ cvData.name } { cvData.lastName }</p>
        <small>{ cvData.position }</small>
    </aside>
    )
}

export { Personal }