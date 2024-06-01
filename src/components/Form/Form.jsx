import { useId, useRef, useState } from 'react'
import './form.css'

function Form({
    onSendInfos = () => {}
}) {
    
    // States
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [age, setAge] = useState('');
    const [photo, setPhoto] = useState('');

    // useId
    const formId = useId();

    //useRef
    const formRef = useRef();

    const onFormSubmit = (e) => {

        e.preventDefault();
        const data = {
            "firstname" : first,
            "lastname" : last,
            "age" : age,
            "photo" : photo
        }
        onSendInfos(data);

        // Clean du form
        setFirst('');
        setLast('');
        setAge('');
        setPhoto('');

        // Focus
        formRef.current.focus()
    }


  return (
    <div className="form">
      <form action="" onSubmit={onFormSubmit}>
        <label htmlFor={formId +" first"}>First Name</label>
        <input type="text" ref={formRef} value={first} onChange={ e => setFirst(e.target.value)} id={formId +" first"} />
        <label htmlFor={formId +" last"}>Last Name</label>
        <input type="text" value={last} onChange={ e => setLast(e.target.value)} id={formId +" last"} />
        <label htmlFor={formId +" age"}>Age</label>
        <input type="text" value={age} onChange={ e => setAge(e.target.value)} id={formId +" age"} />
        <label htmlFor={formId +" photo"}>Photo</label>
        <input type="text" value={photo} onChange={ e => setPhoto(e.target.value)} id={formId +" photo"} />

        <button type="submit"> Submit</button>
      </form>
    </div>
  )
}

export default Form
