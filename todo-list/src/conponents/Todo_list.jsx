import React, { useState } from 'react'
import { Todo_form } from './Todo_form'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Navigate, useNavigate } from 'react-router-dom';




const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });


export const Todo_list = () => {
    const navigate = useNavigate()
    const [Todo, setTodo] = useState([])
    const [editText, setEditText] = useState('');
    const [editIndex, setEditIndex] = useState(-1);



    const addTodo = (todos) => {
        const result = [todos, ...Todo];
        setTodo(result);
        console.log(result)
    }

    const handleEdit = (index) => {
        setEditText(Todo[index].text)
        setEditIndex(index)
    }
    const handleSaveEdit = () => {
        if (editIndex !== -1) {
            const updated_todo = [...Todo];
            updated_todo[editIndex].text = editText
            setEditIndex(-1);
            setEditText('');

            setTodo(updated_todo)
        }
    }

    const Delet_todo = (to) => {
        const filterdata = Todo.filter((items, index) => {
            return index !== to

        })
        setTodo(filterdata)
    }
    const Delet_all = () => {
        setTodo([])
    }

    const LogOut = () => {
     localStorage.clear('isLoggetdIn')
     navigate('login')
    }
    return (
        <>
     <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{backgroundColor:"black",color:"white"}}  position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NavBar
          </Typography>
      <Typography>
      <button 
            onClick={LogOut}
            style={{
            padding: "8px", backgroundColor: "pink",
            borderRadius: "5px", marginRight: "20px", marginLeft: "10px" }}
           >Logout</button>
  
      </Typography>
        </Toolbar>
      </AppBar>
    </Box>
        <div  className='justify-center text-center ' >
            <Todo_form onSubmit={addTodo} />
           <div style={{marginRight:"100px",marginTop:"5px",marginBottom:"5px"}} >
           <button onClick={Delet_all} style={{
           padding: "8px", backgroundColor: "pink",
           borderRadius: "5px", marginRight: "20px", marginLeft: "10px"
           }}
           >Delet all</button>
           </div>
         
            <ul>
                {Todo.map((todo, index) => (
               <div className='flex justify-center text-center' >
                <li className='p-1 mb-3'
                 style={{ backgroundColor: "lightblue",width:"600px",borderRadius:"7px" }} 
                 key={todo.id}>
                   {editIndex === index ? (
                            <>
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                />
                                <button style={{
                                    padding: "8px", backgroundColor: "pink",
                                    borderRadius: "5px", marginRight: "20px", marginLeft: "10px"
                                }}
                                  onClick={handleSaveEdit}  >Update Todo</button>
                                

                            </>
                   ) : (
                       <>
                          <div className='flex justify-between text-center' >
                          <div>
                           {todo.text}
                           </div>
                           <div>
                           <button style={{
                               padding: "8px", backgroundColor: "pink",
                               borderRadius: "5px", marginRight: "20px", marginLeft: "10px"
                           }}
                               onClick={() => handleEdit(index)}>Edit</button>

                           <button style={{
                                    padding: "8px", backgroundColor: "pink",
                                    borderRadius: "5px", marginRight: "20px", marginLeft: "10px"
                                }}
                                    onClick={() => Delet_todo(index)} >Delet todo</button>
                           </div>
                          </div>

                            </>
                        )}
                    </li>
               </div>
                ))}
            </ul>
        </div>
    </>
    );
};


