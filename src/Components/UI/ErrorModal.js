import React, { Fragment } from 'react'
import ReactDom from 'react-dom'
import Card from './Card'
import Button from './Button'
import classes from '../UI/ErrorModal.module.css'

const BackDrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onError}></div>
}

const Modal = (props) => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.header}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.content}</p>
            </div>
            <footer className={classes.actions}>
                <Button onError={props.onError}>Okay</Button>
            </footer>
        </Card> 
    )
}

const ErrorModal = (props) => {
    return (
        <Fragment>
            { ReactDom.createPortal(
                <BackDrop onError={props.onError}/>, 
                document.getElementById('backdrop-root'))
            }
            {ReactDom.createPortal(
                <Modal onError={props.onError}
                content={props.content}
                header={props.header}/>,
                document.getElementById('modal-root')
            )}
        </Fragment>    
    )
}

export default ErrorModal;