import React from 'react'

const Rout3 = ({children}) => {
  return (
    <div className='flex'>
        {children}
        <p>
            
            <span className='mx-[8px]'>(150 Reviews)</span>|<span className='ml-[8px] text-[#0F6] '>In Stock</span>
        </p>

    </div>
  )
}

export default Rout3
