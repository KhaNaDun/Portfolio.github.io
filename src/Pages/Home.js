import React from 'react'

const Home = () => {
  return (
    <div class="container mx-auto px-8 md:px-8 lg:px-12 mt-10">
       <div className=" flex justify-between items-center ">
        <div className="">
        <p className='font-mono font-semibold text-gray-400 ' >Branding | Image making</p>
         <h1 className='text-6xl mt-3 font-bold text-white ' >My awesome portfolio</h1>
         <p className='mt-5 text-gray-400 ' >And I make it myseft! iIn Figma with Anima </p>
        </div>
        <div className="">
            <img src="https://static.vecteezy.com/system/resources/previews/012/658/272/original/3d-character-illustration-of-front-end-developer-free-png.png" className=' '  alt="" />
        </div>
       </div>
    </div>      
  )
}

export default Home