import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import ContactWeb from './components/contactWeb/contactWeb'


const App = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [viewMore, setViewMore] = useState(false);
  const [userSearch, setUserSearch] = useState("");

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });


  // console.log(viewMore)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Something went wrong, try again!')
        } 
        return response.json()
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Something went wrong, try again!', error)
        setError(error);
        setLoading(false);
      }
    )
  }, [])
  if (loading) {return <div>Loading...</div>;
  }
  if (error) return (<div>{error.message}</div>
  );

  return (
    <>
    <Header
    darkMode={setDarkMode}
    setDarkMode={setDarkMode}
    userSearch={userSearch}
    setUserSearch={setUserSearch}
    />
    
     <div className='container'>
      {users.map((user) => (
        <div key={user.id}>
          <div className='card'>
            <img src="/user_icon.png" alt="user_icon" />
            <div>
            <h2>Name:{user.name}</h2>
            <h3>Email: {user.email}</h3>
            <h3>Company: {user.company.name}</h3>
            <h3>City: {user.address.city}</h3>
            </div>
            
            </div>
            <div className='button'>
              <button className='view_more' onClick={() => setViewMore(!viewMore)}> View more</button>

            </div>
        </div>
      ))};
    </div>

    {viewMore && <ContactWeb /> }

    <Footer 
      darkMode={darkMode} userSearch={userSearch} />

    </>
  )
}

export default App
