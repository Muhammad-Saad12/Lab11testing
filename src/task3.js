import { Component } from "react"

const Task3=()=>{
    
    const array = [1,2,3,4,5,6,7,8,9,10]
    return(
        
        <div data-testid='task3' className='Task3'>
            <h1>Task 3</h1>
                {array.map((item,index)=>{
                    return <li key={index}>{item}</li>
                })}
           
        </div>
    

    )};

export default Task3;