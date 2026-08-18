"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AiFillBug } from 'react-icons/ai'


const links = [
  {id:1,label:'Dashboard',href:'/'},
  {id:2,label:'Issues',href:'/issues'}

]

function NavBar() {

  const currentPath = usePathname()

  return (
    <div className='flex space-x-7 p-7 mb-3 border-b h-14 items-center text-2xl'>
        <Link href={'/'} > <AiFillBug/> </Link>

        <ul className='flex space-x-7'>
            {
              links.map((link)=>(
                <li key={link.id} >
                    <Link className={`${currentPath===link.href&&'text-slate-950'} text-slate-600 hover:text-slate-800 transition-colors`} href={link.href}>{link.label}</Link>
                </li>
              ))
            }
        </ul>
    </div> 
  )
}

export default NavBar
