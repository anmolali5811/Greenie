import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Header({query, setQuery}) {
  const location = useLocation();
  const [input, setInput] = useState({
    search: query?.search || '',
    field: query?.field || 'Username'
  });
  const handleSubmit = () => {
    setQuery(input);
  } 
  const handleChange = (e) => {
    setInput({
      ...input, [e.target.name]: e.target.value
    })
  } 
  
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1 items-baseline">
          <Link to="/" className="text-2xl font-bold leading-7 text-teal-500 sm:truncate sm:text-3xl sm:tracking-tight">
            Greenie
          </Link>
          <Link to='/' className="ml-10 text-sm font-bold  text-teal-500 sm:truncate sm:text-xl sm:tracking-tight">
            All Users
          </Link>
          <Link to='/new' className="ml-10 text-sm font-bold  text-teal-500 sm:truncate sm:text-xl sm:tracking-tight">
            New User
          </Link>
        </div>
        {
          location.pathname === '/' &&
          <div className="lg:flex lg:flex-1 lg:justify-end">
          <form className="w-full max-w-sm">
            <div className="flex items-center border-b border-teal-500 py-2">
              <select name='field' value={input.field} onChange={handleChange} className="bg-transparent border-none text-gray-500 mr-1 py-1 leading-tight focus:outline-none" >
                <option value="Username">Username</option>
                <option value="Email">Email</option>
                <option value="Phone">Phone</option>
              </select>
              <input name='search' value={input.search} onChange={handleChange} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-1 leading-tight focus:outline-none" type="text" placeholder="Search..." />
              <button onClick={handleSubmit} className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>
              <button onClick={()=>{setInput({...input, search: ''}); setQuery({...input, search: ''});} } className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </form>
          </div>
        }
      </nav>
    </header>
  )
}
