import { useLoaderData } from "@remix-run/react"
export default function table() {
    const rowData = useLoaderData()
    console.log(rowData)
   return (
      <div class="bg-neutral-800 w-full rounded-md">
            <div class="flex flex-row justify-end items-center px-4 py-2">
                <button class="bg-violet-700 text-white hover:bg-violet-800 hover:text-white rounded-md px-3 py-2 text-md font-medium">
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
        </div>
   )
}