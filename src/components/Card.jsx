import React from 'react'

const Card = ({img, desc, price, name}) => {
  return (
    <div className='sm:w-[250px] h-auto rounded shadow hover:shadow-md'>
      <div className="img-container">
        <img src={img} alt="" className='p-1 rounded h-[230px] w-full' />
      </div>
      <div className="card-container p-1 ">
        <p>{name}</p>
        <p className='font-bold'>${price}</p>
        <p className='mt-1'>{desc}</p>
        <button className='w-full bg-gray-400 hover:bg-gray-500 text-white rounded py-2 mt-1'>Add To Cart</button>
      </div>
    </div>
  )
}

export default Card
