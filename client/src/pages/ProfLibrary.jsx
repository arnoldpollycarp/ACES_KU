import React from 'react'
import ProfileTitle from '../components/ProfileTitle'
import ProfileSideNav from '../components/ProfileSideNav'

export default function ProfLibrary() {
  return (
    <div className='m-5'>
        {/* title section  */}
        <ProfileTitle />
        <div className='flex flex-row'>
            {/* sidemenu section  */}
            <ProfileSideNav />
            <div className="overflow-x-auto p-2 sm:-mx-6 lg:-mx-4 flex-1">
              <div className="inline-block w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                <button className='bg-yellow-400 text-white px-2 py-2 font-bold text-sm hover:bg-slate-100 hover:text-gray-400 rounded-md'>Add Something</button>
                    <table className="w-full text-left text-sm font-light table-auto">
                    <thead className="border-b font-medium dark:border-neutral-500">
                        <tr>
                        <th scope="col" className="px-6 py-4">#</th>
                        <th scope="col" className="px-6 py-4">Title</th>
                        <th scope="col" className="px-6 py-4">Description</th>
                        <th scope="col" className="px-6 py-4">Availability</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                        className="border-b transition duration-300 ease-in-out hover:bg-slate-100">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                        <td className="whitespace-nowrap px-6 py-4">Engeneering Book</td>
                        <td className="whitespace-nowrap px-6 py-4">Volume 5</td>
                        <td className="whitespace-nowrap px-6 py-4">available</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
