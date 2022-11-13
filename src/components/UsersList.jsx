import React from 'react';

const UsersList = ({usersList,userSelect,deleteUser,modalOne,setModalOne}) => {
 return (
  <ul className='user-list'>
   {usersList.map((user)=>(
    
    <li key={user.id} className='user-container'>
     <div className="items-left">
      <h3><b>{user.first_name}</b>{" "} <b> {user.last_name}</b></h3>
      <p><i className="fa-solid fa-envelope"></i> {user.email}</p>
      <p><i className="fa-solid fa-cake-candles"></i> {user.birthday}</p>
     </div>
     <div className='btn'>
      <button onClick={()=>{userSelect(user)}}><i className="fa-solid fa-check"></i></button>
      <button onClick={() => {deleteUser(user.id), setModalOne(!modalOne)}}><i className="fa-solid fa-trash-can" style={{color:"#D2001A"}}></i></button>
     </div>

    </li>
   )

   )

   }
  </ul>
 );
};

export default UsersList;