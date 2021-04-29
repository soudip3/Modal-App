import React from 'react'
import Card from './Card'
import Button from './Button'
import classes from '../UI/ErrorModal.module.css'
const ErrorModal = (props) => {
    const setError = () =>{
        props.onError()
    }
    return (
        <div>
            <div className={classes.backdrop} onClick={setError}>
                <Card className={classes.modal}>
                    <header className={classes.header}>
                        <h2>{props.header}</h2>
                    </header>
                    <div className={classes.content}>
                        <p>{props.content}</p>
                    </div>
                    <footer className={classes.actions}>
                        <Button error={setError}>Okay</Button>
                    </footer>
                </Card> 
            </div>
        </div>    
    )
}

export default ErrorModal;