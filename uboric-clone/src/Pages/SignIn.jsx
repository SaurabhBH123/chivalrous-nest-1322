import React from "react";
// import { useContext } from "react";
// import { AuthContext } from "../Context/AuthContext/AuthContextProvider";
import {Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Container, FormControl,FormLabel, Link} from '@chakra-ui/react'
import { Input,Button } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'
import {ChevronRightIcon} from "@chakra-ui/icons"


const SignIn = () => {
  // const [state,dispatch]= useContext(AuthContext)
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  
  const getData=()=>{
    axios.get('http://localhost:8080/users', {
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
    getData();
  },[])

  const handleSubmit=()=>{
    getData()
  }
  return (
    <>
    <Container>
    <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
  <BreadcrumbItem>
    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='/SignIn'>SignIn</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
</Container>
  <Container mb={6} mt={6}>
    <FormControl>
      <FormLabel>Email address</FormLabel>
      <Input type='email' onChange={(e)=>setEmail(e.target.value)}/>
      <FormLabel>Password</FormLabel>
      <Input type='password' onChange={(e)=>setPassword(e.target.value)}/>
      <Box paddingTop="50px">
            Are you new here 💅?{" "}
            <Link color="teal.500" href="sign-up">
              Sign Up
            </Link>
      </Box>
      <Button colorScheme='teal' size='md' onClick={handleSubmit} mt={2}>
        Login
      </Button>
    </FormControl>
  </Container>
  </>
  )
};

export default SignIn;
