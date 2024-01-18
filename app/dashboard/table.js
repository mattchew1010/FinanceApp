import { useLoaderData } from "@remix-run/react"
import { useState } from "react"
export default function table() {
    const rowData = useLoaderData()
    const [newTip, setNewTip] = useState({date: "", hoursWorked: "", amount: "", open: false})
    console.log(rowData)
   return (
      <div class="bg-neutral-800 w-full rounded-md">
            <div class="flex flex-row justify-end items-center px-4 py-2">
                <button onClick={() => {
                    setNewTip({...newTip, open: !newTip.open})
                }} class="bg-violet-700 text-white hover:bg-violet-800 hover:text-white rounded-md px-3 py-2 text-md font-medium">
                    + Add
                </button>
            </div>
            <table class="w-full text-md text-left font-medium text-gray-400">
                <thead class="text-md text-gray-300 uppercase bg-neutral-800">
                    <tr>
                        <th scope="col" class="px-2 py-3">Date</th>
                        <th scope="col" class="px-2 py-3">Hours</th>
                        <th scope="col" class="px-2 py-3">Tips</th>
                        <th scope="col" class="px-2 py-3">
                        <span class="sr-only">Actions</span>
                        </th>
                    </tr>
                </thead>
                {newTip.open && (
                    <tr>
                        <th scope="row" class="px-2 py-3 font-medium whitespace-nowraptext-white">
                            {newTip.date}
                        </th>
                        <td class="px-2 py-3">{newTip.hoursWorked}</td>
                        <td class="px-2 py-3">${newTip.amount}</td>
                    </tr>
                )}
                
                {rowData.list.map((row) => {
                    return (
                        <tr>
                            <th scope="row" class="px-2 py-3 font-medium whitespace-nowraptext-white">
                                {row.date}
                            </th>
                            <td class="px-2 py-3">{row.hoursWorked}</td>
                            <td class="px-2 py-3">${row.amount}</td>
                        </tr>
                    )
                })}      
            </table>
            <dialog open class="bg-neutral-800 w-1/3 h-1/3 rounded-md p-4 outline outline-1 outline-violet-700 text-gray-300">
                <h1 class="text-center text-xl font-medium">Add Tip</h1>
                <form action="/dashboard/tip" class="flex flex-col justify-center items-center my-2 ">
                    <div class="flex flex-row justify-between items-center w-full my-2">
                        <label class="text-lg font-medium">Date</label>
                        <input onChange={(e) => setNewTip({...newTip, date: e.target.value})} class="w-1/2 rounded-md bg-neutral-800 outline outline-1 outline-violet-700 text-gray-300" type="date" name="date" id="date"/>
                    </div>
                    <div class="flex flex-row justify-between items-center w-full my-2">
                        <label class="text-lg font-medium">Hours Worked</label>
                        <input onChange={(e) => setNewTip({...newTip, hoursWorked: e.target.value})} class="w-1/2 rounded-md bg-neutral-800 outline outline-1 outline-violet-700 text-gray-300" type="number" step="0.01" name="hoursWorked" id="hoursWorked"/>
                    </div>
                    <div class="flex flex-row justify-between items-center w-full my-2">
                        <label class="text-lg font-medium">Amount</label>
                        <input onChange={(e) => setNewTip({...newTip, amount: e.target.value})} class="w-1/2 rounded-md bg-neutral-800 outline outline-1 outline-violet-700 text-gray-300" type="number" step="1" name="amount" id="amount"/>
                    </div>
                    <div class="flex flex-row justify-between items-center w-full my-2">
                        <button onClick={() => setNewTip({...newTip, open: false})} class="bg-violet-700 text-white hover:bg-violet-800 hover:text-white rounded-md px-3 py-2 text-md font-medium">
                            Cancel
                        </button>
                        <button type="submit" class="bg-violet-700 text-white hover:bg-violet-800 hover:text-white rounded-md px-3 py-2 text-md font-medium">
                            Add
                        </button>
                    </div>
                </form>
            </dialog>
        </div>
   )
}