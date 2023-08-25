/* eslint-disable no-undef */
import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
// import axios from 'axios';

export default function Login() {

  const LoginForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [data, setData] = useState([]);

    const handleNameChange = (e) => {
      setName(e.target.value);
    };

    const handlePhoneChange = (e) => {
      setPhone(e.target.value);
    };
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
    let navigate = useNavigate();
    const routeChange = () => {
      let path = `/Home`;
      navigate(path);
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
      const newData = {
        name: name,
        email: email,
        phone: phone
      };
      setData([...data, newData]);
      setName('');
      setEmail('');
      setPhone('');
      console.log('Login successful');

      //   try {
      //   const response = await axios.post('https://dummyjson.com/auth/login', 
      //   { name,
      //     email,
      //     phone
      //   });
      //   console.log('Login successful');
      //   console.log('Response:', response.data);
      // }catch (error) {
      //   console.error('Login failed'); 
      //   console.error('Error:', error.response.data); // Handle login failure, e.g., display an error message }
      // };
    }
    const handleReset = () => {
      setData([]);
    };

    return (
      <>
        <br></br>
        <br></br>
        <div className='container border border-warning rounded shadow-lg p-3 mb-5 bg-white rounded '>
          <div className='row align-items-start text-center' >
            <form className='col-md-5 mx-auto' onSubmit={handleSubmit} >
              <div className='form-group'>
                <label ><b>Name</b> </label>
                <input className='form-control shadow p-3 mb-5 bg-light  rounded' type="text" value={name} onChange={handleNameChange} />
              </div>
              <div className='form-group'>
                <label><b>Email</b></label>
                <input className='form-control shadow p-3 mb-5 bg-light  rounded' type="email" value={email} onChange={handleEmailChange} />
              </div>

              <div className='form-group'>
                <label><b>Phone</b></label>
                <input className='form-control shadow p-3 mb-5 bg-light  rounded' type="text" value={phone} onChange={handlePhoneChange} />
              </div>
              <br />
              <button type="submit" className="btn btn-primary px-4" onClick={routeChange}>Log in</button>
            </form>
            <div className='col-md-1'>

            </div>
            <table className='border w-50 col-md-3 d-none'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button onClick={handleReset} className=' d-none'>Reset</button>
          </div>

        </div>
      </>
    );
  };

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <h1 className=" text-center">Login Form</h1>
      <LoginForm />
    </div>


  )
}
