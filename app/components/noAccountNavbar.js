export default function NoAccount() {
   return(
      <div className="hidden sm:ml-6 sm:block">
         <div className="flex space-x-4">
            <a href="/login" className="text-gray-300 hover:bg-neutral-900 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Log in</a>
            <a href="/signup" className="bg-violet-700 text-white hover:bg-violet-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Sign Up</a>
         </div>
      </div>
   )
}