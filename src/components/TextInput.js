import React from "react";
 export default function TextInput(props){
  return (
    <>
      <input 
      type = 'text'
      className = 'input' 
      required 
      autoComplete = "off" 
      onChange = {props.onChange}
      />
    </>
  )
 }
