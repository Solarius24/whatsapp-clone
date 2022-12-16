import React, { useRef } from 'react'
import { Button, Form, ModalBody, ModalHeader } from 'react-bootstrap'
import { useContacts } from 'contexts/ContactsContext'

export default function NewContactModal({closeModal}) {
  const idRef = useRef()
  const nameRef = useRef()
  const {createContact} = useContacts()
  function handleSubmit(e){
    e.preventDefault()
    createContact(idRef.current.value,nameRef.current.value)
    closeModal()
  }
  return (
    <div>
      <ModalHeader closeButton>Create Contact</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Id</Form.Label>
            <Form.Control type='text' ref={idRef} required/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' ref={nameRef} required/>
          </Form.Group>
          <Button type='submit'>Create</Button>
        </Form>
      </ModalBody>
    </div>
  )
}
