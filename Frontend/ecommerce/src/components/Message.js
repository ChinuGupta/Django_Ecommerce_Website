import React from 'react'
import {Alert} from 'react-bootstrap'
export default function Message({variant,children}) {
  return (
    <Alert varient={variant}>
        {children}
    </Alert>
  )
}
