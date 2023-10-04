import Account from "./components/accountNavbar"

export default function Navbar() {
   return (
    <nav class="bg-neutral-800">
   <div class="mx-0 px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
         <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
         <div class="flex flex-shrink-0 items-center">
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"/>
         </div>
         <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
               <a href="#" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a>
               <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>
               <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
               <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a>
            </div>
         </div>
         </div>
         <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Account />
         </div>
      </div>
   </div>
</nav>
   )
}