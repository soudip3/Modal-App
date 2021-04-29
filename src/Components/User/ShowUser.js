import React from 'react'
import Card from '../UI/Card'
import classes from '../User/ShowUser.module.css'
const ShowUser = (props) => {
    return(
        <Card className={classes.users}>
            <ul>
                {
                   props.users.map( user=> {
                        return (
                            <li key={user.id}>{user.username} is {user.age} years old</li>
                        )
                    }) 
                }
            </ul>
        </Card>
    )
}

export default ShowUser;