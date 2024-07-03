import React from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Notify = (AlertPointSuccess) => {
    toast.success(AlertPointSuccess, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    })
};


export const NotifyError = (AlertPointSuccess) => {
    toast.error(AlertPointSuccess, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    })
};




export default function ModalDelete() {
  return (
    <>
    <ToastContainer position='top-center' />

    
    
    
    
    </>
  )
}
