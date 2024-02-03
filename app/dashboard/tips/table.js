"use client"
import { useState } from "react"
export default function table({tipRows, addTip}) {
    
    const [newTip, setNewTip] = useState({date: "", hoursWorked: "", amount: "", open: false})
    console.log(tipRows)
   return (
      <div class="bg-neutral-800 w-1/2 justify-self-center rounded-md">
            <table class="w-full text-md text-left rounded font-medium text-gray-400">
                <thead class="text-md text-gray-300 uppercase bg-neutral-700">
                    <tr>
                        <th scope="col" class="px-2 py-3">Date</th>
                        <th scope="col" class="px-2 py-3">Hours</th>
                        <th scope="col" class="px-2 py-3">Tips</th>
                        <button onClick={() => {
                            setNewTip({...newTip, open: !newTip.open})
                        }} class="bg-violet-700 text-white hover:bg-violet-800 hover:text-white rounded-md px-3 py-2 text-md font-medium">
                            + Add
                        </button>
                    </tr>
                </thead>
                {
                    newTip.open && (
                        <tr class="border-b border-gray-400">
                            <th scope="row" class="px-2 py-3 font-medium whitespace-nowraptext-white">
                                <input class="bg-neutral-700 placeholder-gray-500 focus:border-blue-500 border-neutral-500 border rounded-lg p-1.5" type="date" onChange={(e) => {
                                    setNewTip({...newTip, date: e.target.value})
                                }}/>
                            </th>
                            <td class="px-2 py-3">
                                <input class="bg-neutral-700 placeholder-gray-500 focus:border-blue-500 border-neutral-500 border rounded-lg p-1.5" placeholder="0" type="number" onChange={(e) => {
                                    setNewTip({...newTip, hoursWorked: e.target.value})
                                }}/>
                            </td>
                            <td class="px-2 py-3">
                                <input class="bg-neutral-700 placeholder-gray-500 focus:border-blue-500 border-neutral-500 border rounded-lg p-1.5" placeholder="$0" type="number" onChange={(e) => {
                                    setNewTip({...newTip, amount: e.target.value})
                                }}/>
                            </td>
                            <td class="px-2 py-3">
                                <button onClick={() => {
                                    addTip(newTip)
                                    setNewTip({...newTip, open: false})
                                }} class="bg-violet-700 text-white hover:bg-violet-800 hover:text-white rounded-md px-3 py-2 text-md font-medium">
                                    Save
                                </button>
                            </td>
                        </tr>
                    )
                }
                {tipRows.list.map((row) => {
                    return (
                        <tr class="border-b border-gray-400">
                            <th scope="row" class="px-2 py-3 font-medium whitespace-nowraptext-white">
                                {row.date.toLocaleDateString()}
                            </th>
                            <td class="px-2 py-3">{row.hoursWorked}</td>
                            <td class="px-2 py-3">${row.amount}</td>
                        </tr>
                    )
                })}      
            </table>
        </div>
   )
}