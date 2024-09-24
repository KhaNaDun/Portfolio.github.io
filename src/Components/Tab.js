import React from 'react'

function Tab({skillDetail}) {
  return (
    <div className="">
       <div className="mt-10 items-center">
        <div className="transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110  duration-500">
            <img className='w-36 ' src={skillDetail.image} alt="" />
        </div>
        <div className="">
            
        </div>
    </div>
    </div>
  )
}

export default Tab