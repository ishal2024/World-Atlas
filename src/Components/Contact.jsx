import React from 'react'

function Contact() {
  return (
    <>
  <div className='overflow-x-hidden box-border'>
      <div className='text-4xl text-center bg-[#1f1b1b] pt-20 text-white pb-8'>Contact Us</div>
      <div className='w-full bg-[#1f1b1b] text-white overflow-x-hidden px-4'>
        <form className='w-full max-w-lg mx-auto flex flex-col gap-6 pb-14'>
          <div className='flex flex-col gap-2 w-full'>
            <label>Name:</label>
            <input className='border-2 border-white rounded-lg px-2 py-1.5' placeholder='Enter your Name' type='text' name='name' required />
          </div>
          <div className='flex flex-col gap-2 w-full'>
            <label>Email:</label>
            <input className='border-2 border-white rounded-lg px-2 py-1.5' placeholder='Enter Your Email' type='email' name='email' required />
          </div>
          <div className='flex flex-col gap-2 w-full'>
            <label>Message:</label>
            <textarea className='border-2 border-white h-[150px] rounded-lg px-2 py-1.5' name='message' placeholder='Enter Text Here' required />
          </div>
          <button type='submit' className='border-2 border-white bg-blue-800 w-32 mx-auto rounded-lg p-2 hover:bg-blue-700 transition'>Submit</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Contact