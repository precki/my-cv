import './CV.scss'
import { Header } from '../Header';
import { Personal } from '../Personal';
import { Details } from '../Details';

const CV = () => {
    return (<main className='cv-main'>
      < Header />
      < Personal />
      < Details />
    </main>
    )
}

export { CV }