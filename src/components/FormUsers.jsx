import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';


      
      const FormUsers = ({getUser,selectedUser,deselectedUser,modalTwoChange,modalThreeAdd }) => {
 // variable para vaciar libreria formulario
 const { register, handleSubmit, reset } = useForm();
 // constante para meter valores iniciales
//la usamos para deseleccionar en el useEffect
const initialValues= {
 first_name: "",
 last_name: "",
  email: "",
  password: "",
  birthday: ""
}

 //useeffect para recibir auto seleccionado y 
//imprimirlo en el formulario
useEffect(()=>{
 if(selectedUser){
  reset(selectedUser)
  }else{
  reset(initialValues)
 }
 },[selectedUser])
// F post y put
const submit =(data)=>{
 if(selectedUser){
  axios.put(`https://users-crud1.herokuapp.com/users/${selectedUser.id}/`, data)
  .then(()=>{getUser()
   modalTwoChange()
   deselectedUser()
  })
  .catch(error=>console.log(error.response?.data))
 }else{
axios.post('https://users-crud1.herokuapp.com/users/', data)
.then(()=>{getUser()
 modalThreeAdd()
 deselectedUser()
reset(initialValues)
})
.catch(error=>console.log(error.response?.data))
}
}
 return (
  <form className='form-users'
    onSubmit={handleSubmit(submit)}>
   <h2><b>New User</b></h2>
   <div className="item-user">
    <div className="users-container">
     <label htmlFor="name"><i className="fa-solid fa-user"></i></label>
     <input {...register("first_name")}type="text" id='name' placeholder='name'/>
    </div>
    <div className="users-container">
     <label htmlFor="lastName"></label>
     <input {...register("last_name")}type="text" id='lastName'placeholder='last name'/>
    </div>
   </div>
   
   <div className="users-container">
    <label htmlFor="email"><i className="fa-solid fa-envelope"></i></label>
    <input {...register("email")}type="text" id='email'placeholder='email'/>
   </div>
   <div className="users-container">
    <label htmlFor="password"><i className="fa-solid fa-lock"></i></label>
    <input {...register("password")}type="password" id='password'placeholder='password'/>
   </div>
   <div className="users-container">
    <label htmlFor="birthday"><i className="fa-solid fa-cake-candles"></i></label>
    <input {...register("birthday")}type="date" id='birthday'/>
   </div>
   <div className="btn">
    <button><i className="fa-solid fa-circle-arrow-up"></i></button>
   </div>
   
  </form>
 );
};

export default FormUsers;