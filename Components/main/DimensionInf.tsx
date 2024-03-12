import React from 'react'

const DimensionInf = ({locationInf}) => {
  return (
    <div className='bg-[#030014] grid grid-cols-2 sm:flex sm:justify-around sm:flex-wrap p-4 gap-4'>
    <div className="text-center ">
      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-3xl font-bold">Name</h2> <p className='text-white text-base'>{locationInf.name} </p>
    </div>

    <div className="text-center ">
      <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-3xl font-bold">Type</h3> <p className='text-white text-base'>{locationInf.type}</p>
    </div>

    <div className="text-center ">
      <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-3xl font-bold"> Dimension</h3> <p className='text-white text-base'>{locationInf.dimension}</p>
    </div>

    <div className="text-center ">
      <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-3xl font-bold"> Population</h3> <p className='text-white text-base'>{locationInf.residents?.length}</p>
    </div>
  </div>
  )
}

export default DimensionInf