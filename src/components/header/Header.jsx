import { ArrowRight, CircleUserRound, Menu, Search, ShoppingBag, TicketPercent, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  const [open, setOpen] = useState(
    JSON.parse(localStorage.getItem('is-open')) || false
  )
  const [modal, setModal] = useState(false)

  const handleClick = ()=>{
    localStorage.setItem('is-open', !open)
    setOpen(!open)
  }

  return (
    <header>
      {open && <div className="bg-[#F3F5F7] relative w-full py-2 gap-5 flex items-center justify-center">
        <span className="flex items-center gap-5 text-sm font-semibold">
          <TicketPercent /> 30% off storewide — Limited time!{' '}
        </span>
        <Link
          to={'#'}
          className="text-blue-500 text-sm font-medium underline flex items-center gap- cursor-pointer"
        >
          Shop Now <ArrowRight className="w-[18px] h-[18px]" />
        </Link>

        <span className="flex cursor-pointer justify-end origin-right float-right">
          <X onClick={handleClick} className='absolute right-5 top-2 origin-right'/>
        </span>
      </div>
      }
      <div className="md:container px-5 py-5 ">
        <div className="flex items-center justify-between">
         <div className='flex items-center gap-1'>
            <span onClick={()=>setModal(true)} className='relative flex cursor-pointer md:hidden'><Menu className='w-[20px] h-[20px]' /></span>
           <Link className='md:text-2xl text-base font-medium' to={'/'}>3legant.</Link>
         </div> 
         
         {/* Mobil Menu */}
            <div className='static md:hidden'> 
               <div className={`p-5 ${modal ? 'left-0' : '-left-[343px]'} transition-all duration-300 absolute w-[343px] flex h-full bg-white z-[1002] inset-0 shadow-xl`}>
                 <div className='flex w-full justify-between'>
                  <Link to={'/'}>3legant.</Link>
                  <span onClick={()=>setModal(false)} className='cursor-pointer h-5'><X/></span>
                 </div>
               </div>
            </div>
         {/* Mobil Menu end */}
         
         <div className='md:flex hidden'>
           <ul className='flex items-center gap-5'>
            <li>
              <NavLink className={`text-sm font-medium text-[#6C7275]}`} to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink className={`text-sm font-medium text-[#6C7275]`} to={'/shop'}>Shop</NavLink>
            </li>
            <li>
              <NavLink className={`text-sm font-medium text-[#6C7275]`} to={'/product'}>Product</NavLink>
            </li>
            <li>
              <NavLink className={`text-sm font-medium text-[#6C7275]`} to={'/contact-us'}>Contact Us</NavLink>
            </li>
           </ul>
         </div> 
         <div className='flex items-center gap-5'>
            <span className='md:flex hidden cursor-pointer'> <Search/></span>
            <span className='md:flex hidden cursor-pointer'> <CircleUserRound /></span>
            <span className='flex cursor-pointer items-center gap-1'> 
              <ShoppingBag />
              <span className='bg-black text-white px-2 rounded-full'>0</span> 
            </span> 
         </div> 
        </div>
      </div>
    </header>
  )
}

export default Header
