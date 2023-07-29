import { useRouter } from 'next/router'
import React from 'react'

const ProductCategory = ({ products }) => {
  return (
    <div>
      <h1 className='text-4xl'>{JSON.stringify(products)}</h1>
    </div>
  )
}

export default ProductCategory

export const getStaticPaths = async () => {
  const res = await fetch('https://pc-builder-json.vercel.app/api/categories')
  const categories = await res.json()
  const paths = categories.map((category) => ({
    params: { category }, 
  }))

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://pc-builder-json.vercel.app/products?category=${params.category}`
  )
  const products = await res.json()

  return {
    props: {
      products,
    },
  }
}
