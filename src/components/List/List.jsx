import './list.css'

const ListOfOneGuy = ({firstname, lastname, age, photo, id, onDelete}) => {
    return (
        <div className='oneGuy'>
            <img src={photo} alt="" />
            <p>{firstname}</p>
            <p>{lastname}</p>
            <p>{age} ans</p>
            <button className='delete' onClick={()=>onDelete(id)}>❌</button>
        </div>
    )
}

const List = ({
    listOfPeople = [],
    onDeletePerson = () => {}

}) => {
  

  return (
    <div className="list">
     {listOfPeople.map((guy) => <ListOfOneGuy {...guy} key={guy.id} onDelete={onDeletePerson}/>)}
    </div>
  )
}

export default List
