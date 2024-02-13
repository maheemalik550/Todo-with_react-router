import { Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'

export const Todo_form = (props) => {
const [input,setInput] = useState('')

const handleChange = (e)=>{
    setInput(e.target.value)
}


const handleSubmit = (e)=>{
e.preventDefault();

props.onSubmit({id:Math.floor(Math.random() * 1000),
text:input
})
setInput("")
}

  return (
    <>
    <Grid container className='flex justify-center text-center align-center 'style={{marginTop:"200px"}} >
  <Grid items >
  <form onSubmit={handleSubmit} >
    <Typography sx={{marginRight:"100px"}} variant='h5'>Todo List</Typography>
   <input className='w-100 p-4'
   style={{borderRadius:"10px",width:"400px"}}
   type="text"
   placeholder='add a todo'
   value={input}
   onChange={handleChange}
    />
     <button style={{
      padding: "8px", backgroundColor: "pink",
      borderRadius: "5px", marginRight: "20px", marginLeft: "10px"
      }}
    >Add todo</button>
    {/* <button>Add todo</button> */}
   </form>
  </Grid>
    </Grid>
 </>
  )
}
