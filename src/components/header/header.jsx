import { useEffect } from 'react'
import './header.css'

const Header = ({darkMode,}) => {
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // function getUserSearch(event) {
  //   setUserSearch(event.target.value);
  // }

  return (
    <>
     <div className='header_name'>
      <h1>User Profile Directory</h1>
    </div>
    <div className='nav'>
      <div>
        <label htmlFor="search">Search by:</label>
        <input type="text" id='search' placeholder='name, city or company' />
      </div>
      
      <div>
        <button className='dark_mode'>dark-mode</button>
      </div>
    </div>
    </>
  )
}

export default Header