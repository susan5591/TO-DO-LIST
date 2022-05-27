import React from 'react'

const Form = ({func}) => {
    const {handleChange,handleFileChange,handleSubmit,names,edit} = func
  return (
    <form onSubmit={handleSubmit}>
            <h1>Uploading An Image</h1>
            <label>First</label>
            <input type="text" value={names.first} name="first" onChange={handleChange}/>
            <label>Last</label>
            <input type="text" value={names.last} name="last" onChange={handleChange}/>
            <label>Image Upload</label>
            <input type="file"  onChange={handleFileChange}/>
            <button >{edit?'Update':'Submit'}</button>
        </form>
  )
}

export default Form