import React from 'react'
import Card from '../Components/Card'

const List = ({cardData}) => {
  return (
    <div className='container mx-auto px-8 md:px-8 lg:px-12 mt-20' >
        <div className="">
             {
            cardData.map(card =>(
                 <div className=" mt-10 ">                
                    <Card cardDetail = {card} />
                </div>
            )
        )
        }
        </div>
       
       
    </div>
  )
}

export default List