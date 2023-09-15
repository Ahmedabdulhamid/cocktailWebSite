import React from 'react'
import {Link, useNavigate}from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import Navbar from 'react-bootstrap/Navbar';
import './header.css'
import { search } from './Redux/getAllData';
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import {AiOutlineSearch}from 'react-icons/ai'
import {useDispatch} from 'react-redux';

const Header = () => {
    const [show, setShow] = useState(false);
    const dispacth=useDispatch()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [search1,setSearch1]=useState('')
    const navigate=useNavigate()
    const handleForm=(e)=>{
        e.preventDefault();
        dispacth(search(search1))
        navigate(`/searchbox/${search1}`)
        setSearch1('')

    }
    return (

        <>
            {['sm'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body mb-3 fixed-top">
                    <Container fluid>
                      
                        <Navbar.Brand as={Link} to='/'> cocktail website</Navbar.Brand>
                                    
                       
                        <>
                           
                            <Navbar.Brand ><AiOutlineSearch onClick={handleShow} className='fs-3'/></Navbar.Brand>
                            
                            
                            

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Search</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    
                                    <Form onKeyUp={handleForm}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            
                                            <Form.Control
                                                type="search"
                                                placeholder="search with first letter"
                                                autoFocus
                                                value={search1}
                                                onChange={(e)=>setSearch1(e.target.value)}
                                            />
                                        </Form.Group>
                                        
                                    </Form>
                                </Modal.Body>
                               
                            </Modal>
                        </>
                    </Container>
                    
                </Navbar>
            ))}
        </>
    )
}

export default Header
