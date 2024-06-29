import React from 'react'

const capitalize = (word) => {
  let lower = word.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1)
} 
export default function Alert(props) {
  return (
    <div style={{height:"20px"}}>
    {props.alert && 
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}:</strong> {capitalize(props.alert.msg)}
      </div>}
      </div>
  )
}
