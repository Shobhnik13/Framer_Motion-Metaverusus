import { motion } from 'framer-motion'
import React from 'react'
import { fadeIn } from '../utils/Motion'

function Explorecards({imgUrl,title,key,active,handleClick}) {
  return (
    <motion.div
    // key*0.5 bcoz to delay dynamically (one after another -> ex-> 1*0.5 ,2*0.5 )
     variants={fadeIn('right', 'spring', key * 0.5, 0.75)}
    className={`relative ${
      active === key ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}>
          <img
      src={imgUrl}
      alt="planet-04"
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    </motion.div>
  )
}

export default Explorecards