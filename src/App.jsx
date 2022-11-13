
import axios from 'axios';
import { useEffect, useState } from 'react'
import Modal from './components/Modal';
import './App.css'
import FormUsers from './components/FormUsers';

import UsersList from './components/UsersList';

function App() {
  const [usersList,setUsersList]= useState([]);
  // estado para seleccionar user
  const [selectedUser,setSelectedUser]=useState(null);
  // estados para ventanas modales
  const [modalOne,setModalOne]=useState(false)
  const [modalTwo,setModalTwo]=useState(false)
  const [modalThree,setModalThree]= useState(false)
  // useStatep para password
  const [password,setPassword]=useState(false);

  // useeffect para traer listado de api
  useEffect(()=>{
   axios.get("https://users-crud1.herokuapp.com/users/")
   .then((res)=>setUsersList(res.data))
  },[])
  // F para obtener user y pasarlo a Form
  const getUser =()=>{
   axios.get("https://users-crud1.herokuapp.com/users/")
 .then((res)=>setUsersList(res.data))
  }

  // F para seleccionar user
  const userSelect=(user)=>{
   setSelectedUser(user)
    }
    // F para delete
const deleteUser = (id) => {
 axios
   .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
   .then(() => getUser());
};

// F para volver al Null luego de actualizar

const deselectedUser=()=>{
 setSelectedUser(null)
 }

 // F para modal de usuario modificado
const modalTwoChange=()=>{
 setModalTwo(!modalTwo)
}
// F para modal de usuario agregado
const modalThreeAdd=()=>{
 setModalThree(!modalThree)
}



  return (
    <div className="App">
     <div className="element-left">
      <UsersList usersList={usersList} userSelect={userSelect} deleteUser={deleteUser} 
       modalOne={modalOne} setModalOne={setModalOne}  />
     </div>
     <div className="element-rigth">
      <FormUsers getUser={getUser} selectedUser={selectedUser} deselectedUser={deselectedUser} modalTwoChange={modalTwoChange} modalThreeAdd={modalThreeAdd}
      password={password} setPassword={setPassword}/>
     </div>
      
     <div className='modal-container'>
       <Modal
        state={modalOne}
        changeState={setModalOne} >
        <h2>Deleted User</h2>
        <div className="container">
         <div className="progress"></div>
        </div>
       </Modal>
       <Modal
        state={modalTwo}
        changeState={setModalTwo}>
        <h2>Modified User</h2>
        <div className="container">
         <div className="progress"></div>
        </div>
       </Modal>
       <Modal
        state={modalThree}
        changeState={setModalThree}>
        <h2>Added user</h2>
        <div className="container">
         <div className="progress"></div>
        </div>
       </Modal>
     </div>
     

    </div>

  )
}

export default App
