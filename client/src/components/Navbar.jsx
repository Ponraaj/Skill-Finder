//sign in|sign out
//chatbot
//contact
import React from 'react'
import viteLogo from '/vite.svg'

const naveLinks=document.querySelector('.nav-links')
function onToggle(e){
    e.target.name=e.target.name==='menu-outline' ? 'close-outline' : 'menu-outline'
    naveLinks.classList.toggle('top-[6.5%]')
}

function Navebar(){
    return(
        <header className='bg-white'>
            <nav className='flex justify-between items-center w-[92%] mx-auto'>
                <div className='flex gap-1'>
                    <div className='py-[2.5%]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-robot" viewBox="0 0 16 16">
                        <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135"/>
                        <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5"/>
                    </svg>
                    </div>
                    <p className='flex font-bold gap-2'>Skill Finder</p>
                </div>
                <div className='nav-links md:static absolute bg-white md:min-h-fit min-h-[35vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5'>
                    <ul className='flex md:flex-row flex-col text-xs md:items-center md:gap-[4vw] gap-5'>
                        <li><a href="#" className='hover:text-gray-500'>Chatbot</a></li>
                        <li><a href="#" className='hover:text-gray-500'>Contact</a></li>
                    </ul>
                </div>
                <div className='flex item-center gap-3'>
                    <a href="#" className='text-xs hover:text-gray-500 py-1'>Sign in</a>
                    {/* <button className='text-xs bg-[#a6c1ee] text-white px-2 py-1 rounded-full hover:bg-[#87acec]'>Sign in</button> */}
                    <div className='text-base cursor-pointer md:hidden py-0.5'>
                        <ion-icon onClick={onToggle} name="menu-outline"></ion-icon>
                    </div>             
                </div>
            </nav>  
        </header>
    )
}

export default Navebar;
