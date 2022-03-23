import React from 'react'

const Basic = ({ Title }) => {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
        <div className=' mx-2'>
            <button onClick={() => setIsOpen(!isOpen)} class="text-black bg-slate-200  focus:ring-4 focus:ring-sky-500 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button" data-dropdown-toggle="dropdown">
                {Title}
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>

            {/* // <!-- Dropdown menu --> */}
            <div class={`absolute ${isOpen ? "" : "hidden"} in bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4`}>
                <ul class="py-1" aria-labelledby="dropdown">
                    <li>
                        <a href="#" class="text-sm hover:bg-gray-400 text-gray-700 block px-4 py-2">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" class="text-sm hover:bg-gray-400 text-gray-700 block px-4 py-2">Settings</a>
                    </li>
                    <li>
                        <a href="#" class="text-sm hover:bg-gray-400 text-gray-700 block px-4 py-2">Earnings</a>
                    </li>
                    <li>
                        <a href="#" class="text-sm hover:bg-gray-400 text-gray-700 block px-4 py-2">Sign out</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Basic