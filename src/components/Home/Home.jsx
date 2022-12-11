import { Button, TextField } from '@mui/material'
import React from 'react'
import "./HomeStyles.css"

const Home = () => {
  return (
      <div className='home-content'>
          <TextField variant='outlined' sx={{ backgroundColor: "white", width: "40%" }} />
          <Button variant='contained' sx={{height:"55px", backgroundColor:"#FFD733", color:"black", margin:"10px"}}>Search</Button>
    </div>
  )
}

export default Home