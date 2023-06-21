import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { usernames } from './nameSlice'

const Name = () => {
    const count = useSelector((state) => state.counter.tasks)
    const dispatch = useDispatch()

    useEffect(() => {
        setTimeout(() => { dispatch(usernames())
            //could declare the function outside the useeffect
            //the function will populate the new empty array(initial state) with data from the old one(create and array) 
            //and display the result on the screen
            //array.push or concat inside the function
        }, 7000);
    }, [])


   

  return (
    <div>
    {users.map((use) => {
        <h1>{use}</h1>
    })}
       
    </div>
  )
}

export default Name
