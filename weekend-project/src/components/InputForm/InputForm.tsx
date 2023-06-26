import { useState, FormEvent } from 'react'
import './InputForm.css'
import { RiDeleteBin2Fill } from 'react-icons/ri'

    const InputForm = () => {
        const [input, setInput] = useState({
            task: ''
        })
        const [newTask, setNewTask] = useState<string[]>([])
        
        const handleSubmit = (event: FormEvent) => {
            event.preventDefault()
            setNewTask([...newTask, input.task])
            setInput({
                task: ''
            })
        }

        const handleDelete = (index: number) => {
            const updateToDo = newTask.filter((_, i) => i !== index)
            setNewTask(updateToDo)
        }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='container'>
                    <div className='input-form'>
                        <div>
                            <label id='label-name'>Enter Task: </label>
                            <input
                                id='task'
                                type='text'
                                name='task'
                                placeholder='Enter Task Here!'
                                value={input.task}
                                onChange={(event) => {
                                    setInput({...setInput, task: event.target.value})
                                    
                                }}
                            />
                        </div>
                        <button 
                            className='btn btn-primary rounded-pill d-block mx-auto' 
                            id='add-btn'
                        >
                            Add Task
                        </button>
                    </div>
                </div>
            </form>
                <div id='list'>
                    <ol>
                        {newTask.map((task: string, index: number) => (
                            <li key={index}>{task}
                            <button className='del-btn' onClick = {() => handleDelete(index)}> <RiDeleteBin2Fill size={25} color='red' /> </button>
                            </li>
                        ))}
                    </ol>
                </div>
        </>
    )
}

export default InputForm