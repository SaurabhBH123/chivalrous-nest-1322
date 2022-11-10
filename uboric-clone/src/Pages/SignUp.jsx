import React from "react";
// import { useContext } from "react";
// import { AuthContext } from "../Context/AuthContext/AuthContextProvider";
import {Alert, AlertIcon, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Container, FormControl,FormLabel, Link} from '@chakra-ui/react'
import { Input,Button } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'
import {ChevronRightIcon} from "@chakra-ui/icons"
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  // const [state,dispatch]= useContext(AuthContext)
  const [name,setName] = useState("")
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  
  const postData=()=>{
    axios.post('http://localhost:8080/users', {
      email: {email},
      password: {password}
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  useEffect(()=>{
    postData();
  },[])

  const handleSubmit=()=>{
    postData()

  }
  return (
    <>
    <Container>
    <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
  <BreadcrumbItem>
    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='/SignIn'>SignUp</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
</Container>
  <Container mb={6} mt={6}>
    <FormControl>
      <FormLabel>Full Name</FormLabel>
      <Input type="text" onChange={(e)=>setName(e.target.value)}/>
      <FormLabel>Email address</FormLabel>
      <Input type='email' onChange={(e)=>setEmail(e.target.value)}/>
      <FormLabel>Password</FormLabel>
      <Input type='password' onChange={(e)=>setPassword(e.target.value)}/>
      <Button colorScheme='teal' size='md' onClick={handleSubmit} mt={2}>
        Sign Up
      </Button>
    </FormControl>
  </Container>
  {/* <Alert status='success'>
    <AlertIcon />
    Registered Successfully!
  </Alert> */}
  </>
  )
};

export default SignUp;
