import React,{useState} from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
const AddUser = (props) =>{
    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')
    const [error, setError] = useState()
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(age<0){
            setError({
                header : "Invalid Input",
                content : "Please put correct age!!!"
            })

        }
        else if(username.length===0 || age.length === 0){
            setError({
                header : "Invalid Input",
                content : "Please enter valid username and age!!!"
            })
        }
        else{
            setUsername(username)
            setAge(age)
            const data = {
                username :username,
                age :age,
                id: Math.random()
            }
            props.addUser(data)
            setUsername('')
            setAge('')
        }
    }
    const changeUsername = (e) => {
        setUsername(e.target.value)
    }
    const changeAge = (e) => {
        setAge(e.target.value)
    }
    const changeError = () =>{
        setError()
    }
    return (
        <div>
            {error && <ErrorModal onError = {changeError} content={error.content} header={error.header}></ErrorModal>}
            <Card className={classes.card}>
                <form onSubmit={onSubmitHandler}> 
                    <label htmlFor="Username">Username</label>
                    <input id="username" type="text" placeholder="Username" value={username} onChange={changeUsername}></input>
                    <label htmlFor="Age">Age</label>
                    <input id="age" type="number" placeholder="Age" value={age} onChange={changeAge}></input>
                    <Button type="submit" error={changeError}>Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;