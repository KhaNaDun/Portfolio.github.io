import React from 'react'
import Tab from '../Components/Tab'

const Skill = ({skillData}) => {
  return (
    <div className="container mx-auto px-8 md:px-8 lg:px-12 mt-20 ">
        <h1 className='text-4xl font-bold  text-center text-start  text-white'  >SKill Programming</h1>
        <div className="flex justify-evenly items-center ">
           {
          skillData.map(skill =>(
          <div class="  ">
                      <Tab skillDetail = {skill} />
                  </div>
          )
         )
        }
        </div>
       
       

        </div>
   
  )
}

export default Skill