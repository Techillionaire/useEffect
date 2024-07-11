import React, { useEffect, useState } from 'react'
import Card from './components/Card'

const App = () => {
  const [productData, setProductData] = useState(null)

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:3000/products")
      const data = await res.json()
      setProductData(data)
    } catch (error) {
      conosole.err(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <main>
      <h2 className='text-3xl font-bold py-5 ml-[130px] text-gray-600'>All Products</h2>
      <button onClick={fetchData}>fetch products</button>
      <section className='flex items-center flex-wrap gap-5 justify-center'>
        {
          productData && productData.map((product) => (
            <Card key={product.id} img={product.img} desc={product.description} price={product.price} name={product.name} />
          ))
        }
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </section>
      
    </main>
  )
}

export default App
