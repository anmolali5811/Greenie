import React, { useState } from 'react'
import Header from './components/Header'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const validateEmail = (email) => {
  return String(email)
  .toLowerCase()
  .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  const validatePhone = (phone) => {
  return String(phone)
    .toLowerCase()
    .match(
      /^[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{4,6}$/im
    );
};

const New = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    Username: '', Email: '', Phone: ''
  });
  const [error, setError] = useState(null);
  const handleClick = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }
  const handleSubmit = async () => {
    if(!data.Email || !data.Username || !data.Phone) {
      setError("Please enter all details...")
      return;
    }
    if(!validateEmail(data.Email)) {
      setError("Please enter valid email...")
      return;
    }
    if(!validatePhone(data.Phone)) {
      setError("Please enter valid Phone Number...")
      return;
    }

    setError('')
    try {
      await axios.post(`${process.env.REACT_APP_API}/users`, [data]);
      navigate('/');
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
    <div className='w-full min-h-screen'>
      <Header />
      <div className="flex justify-center mt-10">
      <div className="w-full max-w-sm">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Username">
              Username
            </label>
            <input onChange={handleClick} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Username" name='Username' value={data.Username} type="text" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Email">
              Email
            </label>
            <input onChange={handleClick} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Email" name='Email' value={data.Email} type="email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Phone">
              Phone
            </label>
            <input onChange={handleClick} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Phone" name='Phone' value={data.Phone} min={0} type="number" />
          </div>
          <p className="text-red-500 text-xs italic mb-4">{error}</p>
          <div className="flex items-center justify-between">
            <button onClick={handleSubmit} className="bg-teal-500 hover:bg-teal-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Create User
            </button>
          </div>
        </form>
      </div>
      </div>
    </div>
  )
}

export default New