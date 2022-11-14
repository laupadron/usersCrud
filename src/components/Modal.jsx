import React from 'react';

const Modal = ({children, state, changeState}) => {
 return (
  <>
  {state&&
   
     <div className='modal-item' onClick={()=>changeState(false)}>
    
    <i class="fa-solid fa-circle-xmark" ></i>
      {children}
   
     </div>

   
}
   </>
 );
};

export default Modal;