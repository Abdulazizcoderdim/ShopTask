import { Link } from 'react-router-dom'
import Slider from '../../components/slider/Slider'
import { ArrowRight  } from 'lucide-react'
import Image1 from '../../../public/Image1.png'
import Image2 from '../../../public/Imag2.png'
import Image3 from '../../../public/Image33.png'

const Home = () => {
  return (
    <div className="md:container px-5">
      <div className="md:h-[536px] h-[304px]">
        <Slider />
      </div>
      <div className='md:flex  md:flex-nowrap flex-wrap w-full  items-center py-10'>
        <div>
          <p className='md:text-[72px] text-[44px] md:leading-[76px] leading-[44px] font-medium '>
            Simply Unique <span className='text-[#6C7275]'>/</span><br />
            Simply Better <span className='text-[#6C7275]'>.</span>
          </p>
        </div>
        <div className='flex flex-1 md:mt-0 mt-5 items-center md:justify-center'>
          <p className='text-base font-semibold text-[#6C7275]'>
            <span className='text-[#343839] font-semibold'>3legant</span> is a gift & decorations store based in HCMC, <br /> Vietnam. Est
            since 2019.{' '}
          </p>
        </div>
      </div>
      
      <div className='md:flex md:flex-nowrap flex-wrap w-full gap-5'>
        <div className='relative md:w-[50%] w-full'>
          <div className='absolute top-10 left-10'>
             <p className='text-[34px] font-medium'>Living Room</p>
             <Link className='text-base font-medium flex items-center gap-1 underline' to={'/shop'}>Shop Now <ArrowRight /></Link>
          </div>
          <img className='md:h-[664px] w-full h-[377px]' src={Image1} alt="" />
        </div> 
        <div className='flex md:mt-0 mt-5 gap-5 md:w-[50%] w-full flex-col'>
          <div className='relative'>
            <div className='absolute bottom-10 left-10'> 
               <p className='text-[34px] font-medium'>Bedroom</p>
               <Link className='text-base font-medium flex items-center gap-1 underline' to={'/shop'}>Shop Now <ArrowRight /></Link>
            </div>
            <img className='w-full md:h-[319px] h-[180px]' src={Image2} alt="" /> 
          </div>
          <div className='relative'>
            <div className='absolute bottom-10 left-10'> 
               <p className='text-[34px] font-medium'>Kitchen</p>
               <Link className='text-base font-medium flex items-center gap-1 underline' to={'/shop'}>Shop Now <ArrowRight /></Link>
            </div>
            <img className='w-full md:h-[319px] h-[180px]' src={Image3} alt="" /> 
          </div>
        </div> 
      </div>

      <div className='py-10 flex items-center justify-between'>
          <h1 className='uppercase md:text-[40px] text-[34px] leading-[44px] font-medium'>New <br /> Arrivals</h1>
          <p className='items-center md:flex hidden'>
            <Link to={'/product'}>More Products</Link>
            <span><ArrowRight /></span>
          </p>
      </div>
 
    </div>
  )
}

export default Home
