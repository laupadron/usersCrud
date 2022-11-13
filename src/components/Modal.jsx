import React from 'react';

const Modal = ({children, state, changeState}) => {
 return (
  <>
  {state&&
   
     <div className='modal-item'>
    
    <i class="fa-solid fa-circle-xmark" onClick={()=>changeState(false)}></i>
      {children}
   
     </div>

   
}
   </>
 );
};

export default Modal;