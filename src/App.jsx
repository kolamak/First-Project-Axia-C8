import { useState } from 'react'
import { useEffect } from 'react'
import ContactWeb from './components/contactWeb'
import './App.css'

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [viewMore, setViewMore] = useState(false)

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
    <div className='header_name'>
      <h1>User Profile Directory</h1>
    </div>

     <div className='card'>
      {users.map((user) => (
        <div className='card' key={user.id}>
          <div className='container'>
            <img src="/user_icon.png" alt="user_icon" />
            <div>
            <h2>Name:{user.name}</h2>
            <h3>Email: {user.email}</h3>
            <h3>Company: {user.company.name}</h3>
            <h3>City:{user.address.city}</h3>
            </div>
            </div>
            <div>

            </div>
        </div>
      ))};
    </div>

    {/* {viewMore && <ContactWeb /> } */}

    {/* <button className='view_more' onClick={() => setViewMore(!viewMore)}> View more</button> */}

    </>
  )
}

export default App
