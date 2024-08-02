
 
import React from 'react'
 

const signUp = () => {
  return (
    <div className='bg-white min-h-[100vh] '>
          <div className=' flex flex-col items-center gap-3
                pt-9'>
            <div className=' flex flex-col items-center justify-center'>
                <img src='/images.png'
                    className='w-36' 
                />
                <h2 className='text-2xl font-bold mt-2'>
                    Join the Community
                </h2>
            </div>
             
          
            
            <div className='text-'>
                  <p>By signing up, you are agreeing to our privacy policy, terms of use and code of conduct.</p>
            </div>
        </div>

    </div>
  )
}

export default signUp
