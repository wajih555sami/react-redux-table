import React from 'react'
import OurForm from './OurForm'

function EditForm() {
    function onFinish(data){
        console.log("Edit:", data)
    }
  return (
    <OurForm title='Edit Country' onFinish={onFinish} />
  )
}

export default EditForm