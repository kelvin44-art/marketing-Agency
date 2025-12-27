import logo from '../assets/fylla-logo.svg'
import dropdown from '../assets/dropdown.png'
import SocialLinks from './SocialLinks'
import ModeToggle from './ModeToggle'
import '../App.css'
import NavBarLists from './NavBarLists'


const Navbar = () => {

  return (
    <div className='border-black flex items-center justify-between py-5 px-5'>
        <img src={logo} alt="" className=' h-20 sm:max-h-30 '/>
        <ul className='hidden sm:flex justify-between items-center gap-10 lg:gap-5'>
            <NavBarLists listName={'SERVICES'}/>
            <NavBarLists listName={'WORK'}/>
            <NavBarLists listName={'STUDIO'}/>
            <NavBarLists listName={'BLOGS'}/>
            <li 
            className='flex items-center gap-2.5'>
                PAGES
                <img src={dropdown} alt="" className='h-3'/>
            </li>
            <li className='flex shrink-0 py-1.5 px-6.5 bg-black text-white leading-relaxed rounded-[5px]'
            >LET'S TALK
            </li>
            
        </ul>
        <ul className='hidden lg:flex gap-3 hover'>
            <li><SocialLinks socialName={'IN'}/></li>
            <li><SocialLinks socialName={'TW'}/></li>
            <li><SocialLinks socialName={'WH'}/></li>
        </ul>
        <ModeToggle/>
    </div>
  )
}

export default Navbar