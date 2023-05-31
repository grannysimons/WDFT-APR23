import React from 'react'

export default function Alert({message}) {
  return (
    <div className="alert alert-danger" role="alert">
        {message}
    </div>
  )
}
