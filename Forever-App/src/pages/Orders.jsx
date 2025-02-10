import React,{useContext,useState,useEffect} from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'

const Orders = () => {

  const {products,currency,cartItems} = useContext(ShopContext)

    const [cartData,setCartData] = useState([])
  
    useEffect(()=>{
  
      const tempData = []
      for(const items in cartItems){
        for(const item in cartItems[items]){
          if(cartItems[items][item] > 0){
            tempData.push({
              _id:items,
              size:item,
              quantity:cartItems[items][item]
            })
          }
        }
      }
    setCartData(tempData)
    },[cartItems])

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'}/>
      </div>
      <div className=''>
        {cartData.map((item,index)=>{
          const productData = products.find((product) => product._id === item._id)

          return(
            <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:justify-between gap-4'>
              <div className='flex items-start gap-6 text-sm'>
                <img src={productData.image[0]} className='w-16 sm:w-20' alt=""/>
                <div>
                  <p className='sm:text-base font-medium'>{productData.name}</p>
                  <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                    <p className='text-lg'>{currency}{productData.price}</p>
                    <p>Quantity : {productData.quantity}</p>
                    <p>Size : {productData.size}</p>
                  </div>
                  <p className='mt-2'>Purcashe Date: <span className='text-gray-400'>25th July, 2025</span> </p>
                </div>
              </div>
              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-2'>
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='text-sm text-base'>Ready to Ship</p>
                </div>  
                <button className='border px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>
              </div>
            </div>  
          )
})}
      </div>
    </div>
  )
}

export default Orders
