import Link from 'next/link'
import React, { useState } from 'react'

const Categories = ({ products }) => {
  const [showCard, setShowCard] = useState('all')
  const [visibleProducts, setVisibleProducts] = useState(3)

  const handleCategory = (category) => {
    setShowCard(category)
    setVisibleProducts(3) // Reset visible products when changing categories
  }

  const filteredProducts =
    showCard === 'all'
      ? products
      : products?.filter((product) => product.category === showCard)

  console.log(filteredProducts)

  return (
    <section className='pt-16 pb-12 lg:pb-[90px]'>
      <div className='container mx-auto'>
        <div className='w-full flex flex-wrap justify-center -mx-4'>
          <div className='w-full px-4'>
            <ul className='flex flex-wrap justify-center mb-12 space-x-1'>
              <li className='mb-1'>
                <button
                  onClick={() => handleCategory('all')}
                  className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                    showCard === 'all'
                      ? 'activeClasses bg-primary text-white'
                      : 'inactiveClasses'
                  }`}
                >
                  All
                </button>
              </li>
              <li className='mb-1'>
                <button
                  onClick={() => handleCategory('cpu_processor')}
                  className={`inline-block  rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                    showCard === 'cpu_processor'
                      ? 'activeClasses bg-primary text-white'
                      : 'inactiveClasses'
                  }`}
                >
                  CPU / Processor
                </button>
              </li>
              <li className='mb-1'>
                <button
                  onClick={() => handleCategory('motherboard')}
                  className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                    showCard === 'motherboard'
                      ? 'activeClasses bg-primary text-white'
                      : 'inactiveClasses'
                  }`}
                >
                  Motherboard
                </button>
              </li>
              <li className='mb-1'>
                <button
                  onClick={() => handleCategory('ram')}
                  className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                    showCard === 'ram'
                      ? 'activeClasses bg-primary text-white'
                      : 'inactiveClasses'
                  }`}
                >
                  RAM
                </button>
              </li>
              <li className='mb-1'>
                <button
                  onClick={() => handleCategory('storage_device')}
                  className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                    showCard === 'storage_device'
                      ? 'activeClasses bg-primary text-white'
                      : 'inactiveClasses'
                  }`}
                >
                  Storage Device
                </button>
              </li>{' '}
              <li className='mb-1'>
                <button
                  onClick={() => handleCategory('power_supply_unit')}
                  className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                    showCard === 'power_supply_unit'
                      ? 'activeClasses bg-primary text-white'
                      : 'inactiveClasses'
                  }`}
                >
                  Power Supply Unit
                </button>
              </li>{' '}
              <li className='mb-1'>
                <button
                  onClick={() => handleCategory('monitor')}
                  className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                    showCard === 'monitor'
                      ? 'activeClasses bg-primary text-white'
                      : 'inactiveClasses'
                  }`}
                >
                  Monitor
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex flex-wrap -mx-4'>
          {filteredProducts?.slice(0, visibleProducts).map((product, index) => (
            <PortfolioCard
              key={index}
              category={product.category}
              ImageHref={product.image}
              title={product.productName}
              button='View Products'
              buttonHref={`/product/${product.category}/${product.id}`}
              showCard={showCard}
            />
          ))}
        </div>
        <div className='flex justify-center mt-8'>
          <button
            onClick={() => setVisibleProducts((prevCount) => prevCount + 3)}
            className={`btn btn-primary ${
              visibleProducts < filteredProducts?.length ? 'block' : 'hidden'
            }`}
          >
            Load More
          </button>
        </div>
      </div>
    </section>
  )
}

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
}) => {
  return (
    <div
      className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
        showCard === 'all' || showCard === category.toLowerCase()
          ? 'block'
          : 'hidden'
      }`}
    >
      <div className='relative mb-12'>
        <div className='overflow-hidden rounded-lg'>
          <img src={ImageHref} alt='portfolio' className='w-full' />
        </div>
        <div className='relative z-10 px-3 -mt-20 text-center bg-white rounded-lg shadow-lg mx-7 py-9'>
          <span className='block mb-2 text-sm font-semibold text-primary'>
            {category}
          </span>
          <h3 className='mb-4 text-xl font-bold text-dark'>{title}</h3>
          <Link
            href={buttonHref}
            className='inline-block py-3 text-sm font-semibold transition border rounded-md px-7 text-body-color hover:border-primary hover:bg-primary hover:text-white'
          >
            {button}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Categories