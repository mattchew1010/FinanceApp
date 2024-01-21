"use client"
import { useState } from "react"

const usernameRegex = /^[a-z0-9_-]{3,15}$/
const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/

export default function Form() {

   const [validation, setValidation] = useState({
      username: true,
      password: true
   })
   function formChanged(event){
      if (event.target.id === "username"){
         if (event.target.value.match(usernameRegex)){
            setValidation({...validation, username: true})
         }else {
            setValidation({...validation, username: false})
         }
      }
      if (event.target.id === "password"){
         if (event.target.value.match(passwordRegex)){
            setValidation({...validation, password: true})
         }else {
            setValidation({...validation, password: false})
         }
      }
   }
   return(
      <form className="mx-6 pb-6 my-5" method="POST">
               <input onChange={formChanged} type="username" name="username" id="username" className="my-0 bg-transparent border-0 outline-none text-white ring-2 ring-inset ring-indigo-600 rounded-md block w-full p-2.5" placeholder="Username"/>
               {!validation.username ? <p className="my-1 text-sm text-red-600">Invalid Username!</p> : null}
               <input onChange={formChanged} type="password" name="password" id="password" className="mt-3 bg-transparent border-0 outline-none text-white ring-2 ring-inset ring-indigo-600 rounded-md block w-full p-2.5" placeholder="Password"/>
               {!validation.password ? <p className="my-1 text-sm text-red-600">Invalid Password!</p> : null}
               <button disabled={(validation.username && validation.password) ? false : true} type="submit" className="mt-3 border-0 outline-none text-white bg-indigo-600 disabled:bg-indigo-500 disabled:text-stone-500 rounded-md block w-full p-2.5">Login</button>
            </form>
   )
}