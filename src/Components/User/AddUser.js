import React,{useState, useRef} from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import Wrapper from '../Helpers/Wrapper'
const AddUser = (props) =>{
    const nameInputRef = useRef()
    const ageInputRef = useRef()
    const [error, setError] = useState()
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const enterName = nameInputRef.current.value
        const enterAge = ageInputRef.current.value
        if(enterAge<0){
            setError({
                header : "Invalid Input",
                content : "Please put correct age!!!"
            })

        }
        else if(enterName.trim().length===0 || enterAge.length === 0){
            setError({
                header : "Invalid Input",
                content : "Please enter valid username and age!!!"
            })
        }
        else{
            const data = {
                username :enterName,
                age :enterAge,
                id: Math.random()
            }
            props.addUser(data)
            nameInputRef.current.value=''
            ageInputRef.current.value=''
        }
    }
    const changeError = () =>{
        setError()
    }
    return (
        <Wrapper>
            {error && <ErrorModal onError = {changeError} content={error.content} header={error.header}></ErrorModal>}
            <Card className={classes.card}>
                <form onSubmit={onSubmitHandler}> 
                    <label htmlFor="Username">Username</label>
                        <input id="username" 
                        type="text" 
                        placeholder="Username" 
                        ref={nameInputRef}>
                    </input>
                    <label htmlFor="Age">Age</label>
                    <input id="age" 
                        type="number" 
                        placeholder="Age" 
                        ref={ageInputRef}>
                    </input>
                    <Button type="submit" error={changeError}>Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
}

export default AddUser;