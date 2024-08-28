import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'



const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [concern, setConcern] = useState('')
  const handleSubmit = (e)=>{
    e.preventDefault()
  }
  const handleChange = (e)=>{
   if(e.target.name == 'name'){
    setName(e.target.value)
   }
   else if(e.target.name == 'email'){
    setEmail(e.target.value)
   }
   else if(e.target.name == 'phone'){
    setPhone(e.target.value)
   }
   else if(e.target.name == 'concern'){
    setConcern(e.target.value)
   }

  }
  return <div className={styles.container}>
    <h1>Contact Us</h1>
    <form>
    <div className={styles.mb-3}>
      <label htmlFor="name" className={styles.formlabel}>Enter your Name</label>
      <input type="text" value={name} onChange={handleChange} className="form-control" id="name" name="name" />
    </div>
    <div className={styles.mb-3}>
      <label htmlFor="email" className={styles.formlabel}>Enter your Email</label>
      <input type="email" value={email} onChange={handleChange} className="form-control" id="email" name="email" aria-describedby='emailHelp'/>
    </div>
    <div className={styles.mb-3}>
      <label htmlFor="phone" className={styles.formlabel}>Enter your Phone Number</label>
      <input type="text" value={phone} onChange={handleChange} className="form-control" id="phone" name="phone" />
    </div>
    <div className={styles.mb-3}>
      <label htmlFor="concern" className={styles.formlabel}>Enter your Concern</label>
      <textarea type="text" value={concern} onChange={handleChange} className="form-control" id="concern" name="concern" />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
 
}

export default Contact