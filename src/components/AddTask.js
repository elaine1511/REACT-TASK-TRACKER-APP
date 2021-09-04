import {useState} from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setreminder] = useState('false')

    const onSubmit=(event)=>{
        event.preventDefault()
        if(!text){
            alert('Please add a task')
            return
        }
        onAdd({text,day,reminder})
        setText('')
        setDay('')
        setreminder('')

    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task Tracker</label>
                <input 
                type='text' 
                placeholder='Add Task' 
                value={text} 
                onChange={(event)=>setText(event.target.value)}
                ></input>
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input 
                type='text' 
                placeholder='Add Day & Time' 
                value={day} 
                onChange={(event)=>setDay(event.target.value)}
                ></input>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input 
                type='checkbox' 
                checked={reminder} 
                value={reminder} 
                onChange={(event)=>setreminder(event.currentTarget.checked)}
                ></input>
            </div>
            <input 
            type='submit' 
            value='Save Task' 
            className='btn btn-block'
            ></input>

        </form>
    )
}

export default AddTask
