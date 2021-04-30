import React from 'react'
import classes from '../UI/Button.module.css'

const Button= (props) =>{
    return (
        <button
            className={classes.button}
            type = {props.type || 'button'}
            onClick = {props.onError}
        >
            {props.children}
        </button>
        
    )
}

export default Button;