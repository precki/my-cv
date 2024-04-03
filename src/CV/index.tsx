import { Header } from '../Header';
import { Personal } from '../Personal';
import { Details } from '../Details';
import { CVData } from '../type';
import './CV.scss'

const CV = () => {
  const cvData: CVData = {
    personal: { 
    photo: 'https://dummyimage.com/400x400/d6d6d6/000000.jpg&text=Photo+cover',
    name: 'Mariusz',
    lastName: 'Kowalski',
    position: 'UI Designer',
    },
    details: {
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
  }

  return <main className='cv-main'>
    < Header data={cvData.personal}/>
    < Personal data={cvData.personal} />
    < Details data={cvData.details}/>
  </main>
}

export { CV }