import bgImg from '../assets/menu-list-bg.png'
import FrameOne from '../assets/Frame.png'
import FrameTwo from '../assets/Frame (1).png'
import DrinkOne from '../assets/drink-one.png'
import DrinkTwo from '../assets/cocktail1.png'
import MenuItems from './MenuItems'

function MenusSection() {
  return (
    <main style={{ backgroundImage: `url(${bgImg})` }} className='h-fit flex justify-between max-sm:p-3'>
      {/* left side image */}
      <img src={FrameOne} alt="frame" className='w-32 max-sm:hidden' />
      <section className='relative flex-1 h-full border border-white my-5 sm:my-32 p-5 sm:p-20'>
        <img src={DrinkOne} alt="DrinkOne" className='absolute top-0 left-0 max-sm:h-40 sm:-top-36 sm:-left-13' />
        <MenuItems/>
        <img src={DrinkTwo} alt="DrinkOne" className='absolute bottom-0 right-0 max-sm:h-28 sm:-bottom-10 sm:-right-1' />
      </section>
      {/* right side image */}
      <img src={FrameTwo} alt="frame" className='w-32 max-sm:hidden' />
    </main>
  )
}

export default MenusSection