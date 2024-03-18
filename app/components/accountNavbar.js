"use client"
import {useState} from "react"

const MissingProfileSVG = 
<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-width="2" d="M7 17v1c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
  </svg>

const MissingProfileSVGFilled = 
<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-width="2" d="M7 17v1c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
  </svg>


const AccountMenu = 
<div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-neutral-800 outline outline-2 outline-accent-primary py-2 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
   <a href="/account" class="block px-4 py-2 text-sm text-white hover:bg-hoverstate" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Account</a>
   <a href="/settings" class="block px-4 py-2 text-sm text-white hover:bg-neutral-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</a>
   <a href="/logout" class="block px-4 py-2 text-sm text-red-600 hover:bg-neutral-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</a>
</div>


export default function Acount() {
   const [AvatarUrl, setAvatarUrl] = useState()
   const [AccountButtonActive, setAccountButtonActive] = useState(false)
   return (
       <div class="relative ml-3">
            <div>
               <button onBlur={() => setAccountButtonActive(false)} onClick={() => setAccountButtonActive(!AccountButtonActive)} data-dropdown-toggle="accountDropdown" type="button" class="relative flex px-3 py-2 text-sm rounded-md focus:outline-none focus:bg-accent-primary hover:bg-accent-primary" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
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