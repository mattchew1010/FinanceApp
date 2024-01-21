"use client"
import {useState} from "react"

const MissingProfileSVG = 
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffff" class="w-9 h-9">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

const MissingProfileSVGFilled = 
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffff" class="w-9 h-9">
  <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
</svg>


const AccountMenu = 
<div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-neutral-800 outline outline-1 outline-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
   <a href="#" class="block px-4 py-2 text-sm text-white hover:bg-neutral-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</a>
   <a href="#" class="block px-4 py-2 text-sm text-white hover:bg-neutral-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</a>
   <a href="/logout" class="block px-4 py-2 text-sm text-red-600 hover:bg-neutral-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</a>
</div>


export default function Acount() {
   const [AvatarUrl, setAvatarUrl] = useState()
   const [AccountButtonActive, setAccountButtonActive] = useState(false)
   return (
       <div class="relative ml-3">
            <div>
               <button onClick={() => setAccountButtonActive(!AccountButtonActive)} type="button" class="relative flex rounded-full text-sm focus:outline-none" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
               <span class="absolute -inset-1.5"></span>
               <span class="sr-only">Account</span>
               {
               AvatarUrl ? <img class="h-8 w-8 rounded-full" src={AvatarUrl} alt=""/> : //if there is an avatar url, display it
               AccountButtonActive ? [MissingProfileSVGFilled] : [MissingProfileSVG] //if there is no avatar url, display the correct missing profile svg
               }
               </button>
            </div>

            {AccountButtonActive ? AccountMenu : null}
         </div>
   )
}