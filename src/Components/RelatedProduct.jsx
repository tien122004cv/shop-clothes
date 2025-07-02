import React from 'react'
import { useEffect, useState } from 'react'
import Title from './Title'
import ProductItem from './ProductItem'

export default function RelatedProduct({ productCurrent }) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log("Error fetch product latest: " + err))
    }, [])

    const productRelated = products.filter(prod => prod.subCategory === productCurrent.subCategory)

    return (
        <div className='mt-15'>
            <div className='flex items-center justify-center text-3xl text-gray-500 my-3'>
                <Title text1={"RELATED"} text2={"PRODUCTS"} />
            </div>
            <ProductItem products={productRelated.slice(0, 5)} />
        </div>
    )
}
