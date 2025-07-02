import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import starIcon from '../assets/star_icon.png'
import starIconBlur from '../assets/star-blur_icon.png'
import RelatedProduct from "../Components/RelatedProduct";
import { toast } from "react-toastify";

export default function ProductDetail() {
    const [products, setProducts] = useState([])
    const [size, setSize] = useState('')
    const [image, setImage] = useState(0)
    const [activeTab, setActiveTab] = useState('description')
    const { productId } = useParams()

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log("Error fetch product latest: " + err))
    }, [])

    const productData = products.find(product => product._id === productId)

    return productData ? (
        <div className='border-t pt-10 transition-opacity ease-in duration-500 opacity-100'>
            {/* product data */}
            <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
                {/* product image */}
                <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
                    <div className="flex sm:flex-col justify-between sm:justify-normal sm:w-[18.7%] w-full">
                        {productData.image.map((item, index) => (
                            <img src={item} alt="" key={index}
                                className="w-[24%] sm:w-full sm:mb-2.5 cursor-pointer"
                                onClick={() => setImage(index)}
                            />
                        ))}
                    </div>
                    <div className="w-full sm:w-[80%]">
                        <img src={productData.image[image]} className="w-full h-auto" />
                    </div>
                </div>
                <div className="flex-1">
                    <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
                    <div className='flex items-center gap-1 mt-2'>
                        <img src={starIcon} className='w-3.5' />
                        <img src={starIcon} className='w-3.5' />
                        <img src={starIcon} className='w-3.5' />
                        <img src={starIcon} className='w-3.5' />
                        <img src={starIconBlur} className='w-3.5' />
                        <div className="pl-2">(122)</div>
                    </div>
                    <p className='mt-5 text-3xl font-medium'>${productData.price}</p>
                    <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
                    <div className="flex flex-col gap-4 my-8">
                        <p>Select Size</p>
                        <div className="flex gap-2">
                            {productData.sizes.map(item => (
                                <button onClick={() => setSize(item)} key={item}
                                    className={`border border-gray-100 py-2 px-4 bg-gray-100 cursor-pointer
                                    ${item === size ? 'border-orange-500' : ''}`}>{item}</button>
                            ))}
                        </div>
                    </div>

                    <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer'
                        onClick={() => !size && toast.warning("Please select size")}
                    >
                        Add to cart
                    </button>

                    <hr className='mt-8 sm:w-4/5' />
                    <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                        <p>100% Original product.</p>
                        <p>Cash on delivery is available on this product.</p>
                        <p>Easy return and exchange policy within 7 days.</p>
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <div className="flex cursor-pointer">
                    <b className="border border-b-0 px-5 py-3 text-sm"
                        onClick={() => setActiveTab('description')}
                    >Description</b>
                    <b className="border border-b-0 px-5 py-3 text-sm"
                        onClick={() => setActiveTab('review')}
                    >Review (122)</b>
                </div>
                <p className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                    {activeTab === 'description' ? productData.description : <p>Review</p>}
                </p>
            </div>
            <RelatedProduct productCurrent={productData} />
            <Footer />
        </div>
    ) : <div className="opacity-0"></div>;
};