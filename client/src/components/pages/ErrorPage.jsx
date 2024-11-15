import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div style={{justifyItems: 'center', padding: '60px'}}> 
   <h2>Эта страница на отдыхе</h2>
   <Link to='/'>
   <Button>Назад</Button>
   </Link>
        <img src='../../../public/IMG_1857.jpg' style={{width: '600px', height: '800px',padding: '40px'}}/>
        </div>
  )
}
