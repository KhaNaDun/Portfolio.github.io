import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

function ProgreesBar() {
  return (
   <div className="">
    <div class="mb-1 text-2xl font-bold text-white-700 text-white  ">Khmer</div>
<div class="w-full bg-gray-200 mt-5 rounded-full h-2.5 mb-4 dark:bg-gray-700">
<ProgressBar completed={100} />
</div>

<div class="mb-1 text-2xl font-bold text-white-700 text-white mt-10  ">English</div>
<div class="w-full bg-gray-200 mt-5 rounded-full h-2.5 mb-4 bg-black">
<ProgressBar completed={50} />
</div>
   </div>
  )
}

export default ProgreesBar