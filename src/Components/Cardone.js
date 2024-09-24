import React from 'react'

const Cardone = ({cardDetail}) => {
  return (
       <div className="items-center">
        <div className=" flex justify-between gap-52 items-center ">

            <div className="transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110  duration-500">
                <img src={cardDetail.image} className=''  alt="" />
            </div>
            <div className="">
                <h1 className='font-extrabold font-mono text-5xl ' >{cardDetail.title}</h1>
                <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-300"></hr>
                <p className='mt-2 text-xl' >{cardDetail.description}</p>
            </div>
        </div>
       </div>
        
  
  )
}

export default Cardone