import React from 'react'

// components
import Data from './Data'

function TableData({ users, deleteData }) {
    const dataUsers = users

    console.log(users)
    return (
        <div className="relative overflow-x-auto mt-10 w-2/3 mx-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Color
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>


                    </tr>
                </thead>
                <tbody>
                    {dataUsers.map((item, idx) => {
                        return (
                            <tr key={idx} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.name}
                                </th>
                                <td className="px-6 py-4">
                                    {item.lastname}
                                </td>
                                <td className="px-6 py-4">
                                    {item.position}
                                </td>
                                <td className="px-6 py-4">
                                    <button type='button' onClick={()=>deleteData(item.id)} >Delete</button>
                                </td>


                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TableData