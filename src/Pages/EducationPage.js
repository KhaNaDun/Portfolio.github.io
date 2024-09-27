import React from 'react'
import Cardone from '../Components/Cardone'
import ProgreesBar from '../Components/ProgreesBar'

const EducationPage = ({EducationData}) => {
  return (
    <div className="container mx-auto px-8 md:px-8 lg:px-12 mt-5 ">
        <h1 className='text-4xl font-bold text-white' >Education</h1>
        <div className=" mt-10 items-center sm:flex">
        {
            EducationData.map(education =>(
                <div className="">
                    <Cardone EducationDetail = {education} />
                </div>
            ))
        }
        </div>

         <h1 className='text-4xl font-bold text-white mt-10 ' >Languages</h1>
            <div className="mt-5">
                 <ProgreesBar  />
            </div>
           
    </div>
  )
}


export default EducationPage