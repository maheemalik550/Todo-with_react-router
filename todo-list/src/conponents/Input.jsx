import { TextField } from '@mui/material'
import React from 'react'

export const Input_component = ({ placeholder, type, id, required, onChange }) => {

  return (
    <TextField type={type}
    sx={{width:"300px",marginTop:"10px"}}
    id={id}
    onChange={onChange}
    placeholder={placeholder}
    required={required} />
  )
}
