import { useRef, useState } from 'react'
import Form from '../../components/Form/Form'
import Header from '../Header/Header'
import './webapp.css'
import List from '../../components/List/List';

function WebApp() {
  
    const [person, setPerson] = useState([]);
    
    const personId = useRef(0);

    const handleNewPerson = (newPerson) => {

        const newPersonWithId = {
            ...newPerson,
            id : personId.current,
        };
        
        personId.current++

        setPerson(prevPerson => [...prevPerson, newPersonWithId])
    }

    const handleDeletePerson = (personId) => {
        setPerson(person => person.filter(target => target.id !== personId))
    }
    
  return (
    <div className='webapp'>
      <Header/>
      <Form onSendInfos={handleNewPerson}/>
      <List listOfPeople={person} onDeletePerson={handleDeletePerson}/>
    </div>
  )
}

export default WebApp
