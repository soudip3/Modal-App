import React from 'react'
import classes from '../UI/Button.module.css'

const Button= (props) =>{
    const onClickHandler = () => {
        props.error()
    }
    return (
        <button
            className={classes.button}
            type = {props.type || 'button'}
            onClick = {onClickHandler}
        >
            {props.children}
        </button>
        
    )
}

export default Button;