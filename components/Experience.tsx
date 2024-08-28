

import React from 'react'
import { Button } from './ui/MovingBorders'

const Experience = () => {
  return (
    <div className=" py-20">
      <h1 className="heading text-white">
        My <span className="text-purple">Experience</span>
      </h1>
      <div className="w-full mt-12 flex justify-center ">
        <Button className="" duration={1}>
          <div className="p-3 py-6 md:p-5 lg:p-10 gap-2">
            <h1 className="text-lg font-extrabold ">
              NetMex
            </h1>
            <h2 className="text-base  text-purple">
              Fullstack Developer
            </h2>

            <h3 className="text-base">Jan. 2021 – Present</h3>
            <p className="font-light">San Luis Potosi, MX </p>
          </div>
        </Button>
        
      </div>
    </div>
  )
}

export default Experience