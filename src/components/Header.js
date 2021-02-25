import React from 'react'

function Header() {
    return (
        <div className="sticky top-0 h-12 bg-blue-500 shadow flex justify-start items-center text-white p-2">
            <h1 className="text-xl font-semibold">Your Todos</h1>
        </div>
    )
}

export default Header