import React from 'react'
import monitor from '@/assets/icons/g27cq4-500x500 1.svg'
import game from "@/assets/icons/g92-2-500x500 1.svg";
import RoutePage from '@/components/PageRoutes/RoutePage';

const Cart = () => {
  return (
    <>
      <div className='px-[135px]'>
        <div className='py-[80px]'>
          <RoutePage>
            cart
        </RoutePage>  
        </div>
        <div className='flex flex-col gap-[40px]'>
        <div className='flex gap-[284px] pl-[40px] pr-[39px]'>
            <p className='text-[16px] font-normal'>Product</p>
            <p className='text-[16px] font-normal'>Price</p>
            <p className='text-[16px] font-normal'>Quantity</p>
            <p className='text-[16px] font-normal'>Subtotal</p>
        </div>
        <div className='flex items-center gap-[284px] pl-[40px] '>
            <div className='flex items-center gap-[182px]'>
                <div className='flex items-center gap-3'>
                    <img src={monitor} alt='pic' className='w-[54px] h-[54px]'/>
                    <p className='text-[16px] font-normal'>LCD Monitor</p>
                </div>
                <p className='text-[16px] font-normal'>$650</p>
            </div>
            <input type="number" placeholder='01' className='w-[72px] h-[44px] border-2 rounded'/>
            <p className='text-[16px] font-normal'>$650</p>
        </div>
        <div className='flex items-center gap-[284px] pl-[40px] '>
            <div className='flex items-center gap-[182px]'>
                <div className='flex items-center gap-3'>
                    <img src={game} alt='pic' className='w-[54px] h-[54px]'/>
                    <p className='text-[16px] font-normal'>H1 Gamepad</p>
                </div>
                <p className='text-[16px] font-normal'>$550</p>
            </div>
            <input type="number" placeholder='02' className='w-[72px] h-[44px] border-2 rounded'/>
            <p className='text-[16px] font-normal'>$1100</p>
        </div>
</div>

        <div className='flex gap-[757px] pt-[24px] pb-[80px]'>
            <button className='text-[16px] font-medium border-[1px] px-[48px] py-[16px] rounded'>Return To Shop</button>
            <button className='text-[16px] font-medium border-[1px] px-[48px] py-[16px] rounded'>Update Cart</button>

        </div>
        <div className='flex gap-[173px]'>
            <div className='flex gap-4'>
                <input type='text' placeholder='Coupon Code' className='w-[300px] h-[56px] pl-[24px] text-[16px] font-normal border-[1px] rounded'/>
                <button className=' h-[56px] bg-red-500 font-normal text-[16px] text-white px-[48px] py-[16px] rounded'>Apply Coupon</button>
            </div>
            <div className='border-[1px] w-[470px] h-[324px] px-[24px]'>
                <p className='text-[20px] font-medium pt-[32px] pb-[24px]'>Cart Total</p>
                <div className='flex gap-[307px] border-b-[1px] pb-[16px]'>
                    <p className='text-[16px] font-normal'>Subtotal:</p>
                    <p className='text-[16px] font-normal'>$1750</p>
                </div>
                <div className='flex gap-[314px] py-[16px] border-b-[1px]'>
                    <p className='text-[16px] font-normal'>Shipping:</p>
                    <p className='text-[16px] font-normal'>Free</p>
                </div>
                <div className='flex gap-[335px] py-[16px]'>
                    <p className='text-[16px] font-normal'>Total:</p>
                    <p className='text-[16px] font-normal'>$1750</p>
                </div>
                <button className='bg-red-500 text-[16px] font-medium text-white px-[48px] py-[16px] rounded'>Process to checkout</button>

            </div>

        </div>
      </div>
    </>
  )
}

export default Cart
