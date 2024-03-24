import './Header.scss'

interface CVData {
    name: string;
    lastName: string;
}

const cvData: CVData = {
    name: 'Mariusz',
    lastName: 'Kowalski',
}

const Header = () => {
    return (
    <header className='cv-header'>
        <h1>CV {cvData.name} {cvData.lastName}</h1>
    </header>
    )
}

export { Header }