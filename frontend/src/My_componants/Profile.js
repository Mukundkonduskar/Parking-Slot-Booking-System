import React, { useEffect, useState } from 'react'
import Header from './Header';
import { Footer } from './Footer'
// import { useHistory } from 'react-router-dom';

const Profile = () => {

  // const history = useHistory();
  const [userData, setUserData]=useState({});

  const callProfilePage = async () =>{
    try {
      const res = await fetch('/profile',{
        method:'GET',
        headers:{
          Accept:"application/json",
          "Content-Type": "application/json"
        },
        credentials:"include"
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if(!res.status === 200){
        const error = new Error(res.error)
        throw error;
      }

    } catch (err) {
      console.log(err);
      // history.push('/login')
    }
  }

  useEffect(()=>{
  callProfilePage();
  },[]);



  return (
    <>
    <Header></Header>
    <div className='container user-profile'>
    <form method='GET'>
      <div className='row'>

          <div className='profile-head'></div>
          <h5>{userData.name}</h5>
          <h5>{userData.email}</h5>
          <h5>{userData.phone}</h5>
          <h5>{userData.vehicle}</h5>        

      </div>
    </form>
   </div>
   <Footer></Footer>
   </>
  )
}

export default Profile
