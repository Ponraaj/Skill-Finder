import React, { useEffect } from 'react';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PageNotFound = () => {

    const notify = () => {
        
        toast.error("Page Not Found", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
        });

        
    }
    
    useEffect(() => {
        notify();
    }, []); // Correct placement of the comma

    return (
        <>
        <ToastContainer 
            // position="top-right"
            // autoClose={5000}
            // hideProgressBar={false}
            // newestOnTop={false}
            // closeOnClick
            // rtl={false}
            // pauseOnFocusLoss
            // draggable
            // pauseOnHover
            // theme="light"
            // transition: Bounce
            className={"p-0 m-0"}
            >
        </ToastContainer>
        <div className='text-center pt-[300px]'>
            
        <h1 className='text-5xl'><b>Error 404</b></h1>
        <h1 className='text-5xl'><b>Page Not Found</b></h1>
    </div>

    </>
    );
}


export default PageNotFound