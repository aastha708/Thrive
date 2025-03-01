import React from 'react'
import { useState } from 'react';

function signup() {
  const [input,setInput]= useState({
    name:"",
    email:"",
    date:"",
    password:"",
});

const [data,setData]=useState([]);

function getdata(e)
{
    const {value,name}=e.target;

    setInput(()=>
    {
        return{
            ...input,
            [name]:value
        }
    }
    )
}

function adddata(e)
{
    e.preventDefault();//default behaviour will be stop,page will not load once u enter value in input box.

    const {name,email,date,password}=input;

    if(name === "")
    {
        alert("Name field is required!")
    }
    else if(email=== "")
    {
        alert("Email field is required!")

    }
    else if(email=== "")
    {
        alert("Email field is required!")

    }
    else if(!email.includes("@"))
    {
        alert("Enter valid Email address")
    }
    else if(date=== "")
    {
        alert("date field is required!")

    }
    else if(password === "")
    {
        alert("password field is required!")

    }
    else if(password.length < 5 )
    {
        alert("password should be greater than 5")

    }
    else{
        console.log("successfully added");

        localStorage.setItem("useryoutube",JSON.stringify([...data,input]));
    }
    
    
}
  return (
    <div className='signup'>
      
    </div>
  )
}

export default signup
