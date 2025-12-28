export function Header() {
    return (
        <div className="w-full bg-gray-900 py-3 col-span-6 px-40 text-white bg-[url('/background-blue.png')] bg-cover bg-center  blur-out bg-no-repeat">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
            <h1 className="text-3xl p-2 font-semibold text-white relative z-10">Enginnering Notes on Systems Infraestructure, and Software Reality.</h1>
            <p className="text-lg pl-2 text-gray-300 relative z-10">Long-form technical analisys and commentary. No hype. No shortcuts.</p>
    
            <ul className="mt-6 w-7xl m-auto relative z-10">
                <li className="inline-block bg-gray-800 text-white border border-gray-700 rounded px-3 py-1.5 mx-1 text-center align-middle hover:bg-gray-700 hover:text-blue-400 transition-colors cursor-pointer">Systems & OS</li>
                <li className="inline-block bg-gray-800 text-white border border-gray-700 rounded px-3 py-1.5 mx-1 text-center align-middle hover:bg-gray-700 hover:text-blue-400 transition-colors cursor-pointer">Cloud & Networking</li>
                <li className="inline-block bg-gray-800 text-white border border-gray-700 rounded px-3 py-1.5 mx-1 text-center align-middle hover:bg-gray-700 hover:text-blue-400 transition-colors cursor-pointer">Software Architecture</li>
                <li className="inline-block bg-gray-800 text-white border border-gray-700 rounded px-3 py-1.5 mx-1 text-center align-middle hover:bg-gray-700 hover:text-blue-400 transition-colors cursor-pointer">Performance & Failure Mo</li>

                <ul className="inline-block bg-gray-800 border border-gray-700 rounded text-center align-middle p-1 float-end relative z-10">
                    <li className="inline-block px-3 py-1 border-r border-gray-700 text-white hover:text-blue-400 cursor-pointer">EN</li>
                    <li className="inline-block px-3 py-1 border-r border-gray-700 text-gray-400 hover:text-blue-400 cursor-pointer">ES</li>
                    <li className="inline-block px-3 py-1 text-gray-400 hover:text-blue-400 cursor-pointer">Auto-Translated (AI)</li>
                </ul>
            </ul>
        </div>
    )
}