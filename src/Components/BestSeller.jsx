import React, { useEffect, useState } from 'react'
import Title from './Title'
import ProductItem from './ProductItem'

export default function LatestCollection() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log("Error fetch product latest: " + err))
    }, [])

    return (
        <>
            <div className='py-8'>
                <Title text1={"BEST"} text2={"SELLERS"} />
            </div>
            <ProductItem products={products.slice(0, 5)} />
        </>
    )
}
