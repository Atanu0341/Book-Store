import React from 'react'
import ShowCase from '../../components/layouts/showcase/ShowCase'
import ProductListing from '../../components/layouts/productlisting/ProductListing'

const HomePage = () => {
  return (
    <section>
        <ShowCase />
        <ProductListing />
    </section>
  )
}

export default HomePage