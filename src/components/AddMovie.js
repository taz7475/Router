import { useState } from "react";
import { Button,Modal,Form } from "react-bootstrap";
import {v4 as uuidv4} from 'uuid'

import React from 'react'

const AddMovie = ({movieAdd}) => {

    const [show,setShow]=useState(false)

const handleClose =()=>setShow(false)
const handleShow =() => setShow(true)
//fields to add 

const [id,setId]=useState('')
const [title,setTitle]=useState('')
const [description,setDescription]=useState('')
const [posterUrl,setPoster]=useState('')
const [year,setYear]=useState('')
const [rate,setRate]=useState('')

  return (
    <>
      <Button variant ="primary" onClick={handleShow}>Add Movie</Button>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Control placeholder="title" onChange={(title)=>setTitle(title.target.value)}></Form.Control>
            <Form.Control placeholder="description" onChange={(description)=>setDescription(description.target.value)}></Form.Control>
            <Form.Control placeholder="posterUrl" onChange={posterUrl=>setPoster(posterUrl.target.value)}></Form.Control>
            <Form.Control placeholder="year" onChange={year=>setYear(year.target.value)}></Form.Control>
            <Form.Control placeholder="rate" onChange={rate=>setRate(rate.target.value)}></Form.Control>
            <Form.Control placeholder="id" onChange={id=>setId(uuidv4())}></Form.Control>
        </Modal.Body>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button  variant="primary" onClick={()=> {handleClose() 
            movieAdd(id,title,description,posterUrl,year,rate)}}> Save </Button>

    </Modal>
    </>
  )
}

export default AddMovie
