import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

export default function Nav(props) {
   const [isOpen, setIsOpen] = useState('false')
   const [searchValue, setSearchValue] = useState("")
   return (
      <nav>
         <div className="nav-wp">
            <div className="left">
               <Link href="/">
                  <a>
                     <svg className="logo" width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="50" height="40" rx="3"></rect>
                        <path
                           d="M19.099 23.508c0 1.31-.423 2.388-1.27 3.234-.838.839-1.942 1.258-3.312 1.258h-4.403V12.277h4.492c1.31 0 2.385.423 3.224 1.27.846.838 1.269 1.912 1.269 3.223v6.738zm-2.808 0V16.77c0-.562-.187-.981-.562-1.258-.374-.285-.748-.427-1.122-.427h-1.685v10.107h1.684c.375 0 .75-.138 1.123-.415.375-.285.562-.708.562-1.27zM28.185 28h-5.896c-.562 0-1.03-.187-1.404-.561-.375-.375-.562-.843-.562-1.404V14.243c0-.562.187-1.03.562-1.404.374-.375.842-.562 1.404-.562h5.896v2.808H23.13v3.65h3.088v2.808h-3.088v3.65h5.054V28zm7.12 0c-.936 0-1.684-.655-2.246-1.965l-3.65-13.758h3.089l2.807 10.804 2.808-10.804H41.2l-3.65 13.758C36.99 27.345 36.241 28 35.305 28z"
                           style={{ fill: '#fff' }}
                        ></path>
                     </svg>
                  </a>
               </Link>
               <div className="search-wp">
                  <form>
                     <input className="search" type="text" placeholder="Search..." value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                     <Link href={`/search?req=${searchValue}`}>
                        <a>
                           <button type="submit">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                 <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z"></path>
                              </svg>
                           </button>
                        </a>
                     </Link>
                  </form>
               </div>
            </div>
            <div className="right">
               <button className="create-post" type="button" onClick={props.toggleNewArticle}>
                  Create Post
               </button>
               <div className="notif">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                     <path d="M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z"></path>
                  </svg>
               </div>
               <div className="profil" onMouseEnter={() => setIsOpen(!isOpen)} onMouseLeave={() => setIsOpen(!isOpen)}>
                  <div className="trigger"></div>
                  <img src="/assets/nav-profil-pic.jpeg" alt="" className={isOpen ? '' : 'active'} />
                  <ul className={isOpen ? 'profil-menu' : 'profil-menu active'}>
                     <li>
                        Arnaud <br /> <span>@arnaudhrt</span>
                     </li>
                     <div className="divider"></div>
                     <li>Dashboard</li>
                     <li>Create Post</li>
                     <li>Reading List</li>
                     <li>Settings</li>
                     <div className="divider"></div>
                     <li>Sign Out</li>
                  </ul>
               </div>
            </div>
         </div>
      </nav>
   )
}
