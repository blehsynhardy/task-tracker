import { useState } from "react"


const AddTasks = ({onAdd}) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text) {
            alert('Please enter a task');
        }

        onAdd({text, day, reminder});

        setText('');
        setDay('');
        setReminder(false);

    }

  return (
    <form onSubmit={onSubmit}>
        <div className="add-form">
            <div className="form-control">
                <label>Task</label>
                <input type='text' placeholder='Enter task' value={text} onChange={(e) => setText(e.target.value)} />
            </div>

            <div className="form-control">
                <label>Day & Time</label>
                <input type='text' placeholder='Enter day and Time ' value={day} onChange={(e) => setDay(e.target.value)} />
            </div>

            <div className="form-control form-control-check">
                <label>Set Remainder </label>
                <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <div className="form-control">
               <input type='submit' value='Submit Task' className="btn btn-block" />
            </div>
        </div>
    </form>
  )
}

export default AddTasks