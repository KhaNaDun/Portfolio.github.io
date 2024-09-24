import React from 'react'

const Main = () => {
  return (
    <div className="container mx-auto px-8 md:px-8 lg:px-12 ">
        <div className="flex justify-evenly items-center ">
            <div className="">
                <h1 className='text-4xl font-bold  text-white   '>BE</h1>
            </div>
            <div className="">
                <h1 className='text-4xl text-white '>GOODLE</h1>
            </div>
            <div className="">
                <img src="https://freepngimg.com/download/apple/58687-logo-computer-apple-icons-free-hd-image.png" className='max-w-28 '  alt="" />
            </div>
            <div className="">
                <img src="http://pngimg.com/uploads/microsoft/microsoft_PNG10.png"  className='max-w-32 text-white '   alt="" />
            </div>
        </div>
    </div>
  )
}

export default Main