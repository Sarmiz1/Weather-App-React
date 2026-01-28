import Form from './Components/Form'
import { useState } from 'react'

function Contact () {

  const [formData, setFormData] = useState({
    type: '',
    comment: '',
    email: '',
    fn: '',
    ln: '',
    zip: ''
  })


  const handleChange = (e) => {
    const {name, value} = e.target

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(formData);
    
    setFormData({
    type: '',
    comment: '',
    email: '',
    fn: '',
    ln: '',
    zip: ''
    })
  }


  return (
    <div className="lg:px-[15%] pt-4 md:p-8 lg:py-4 bg-slate-100 dark:bg-slate-200
      text-black dark:text-black/90 min-h-screen"
    >
        <Form 
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
    </div>
  )
} 


export default Contact